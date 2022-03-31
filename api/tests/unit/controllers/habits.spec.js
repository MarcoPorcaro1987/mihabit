const habitsController = require('../../../controllers/habits')
const Habit = require('../../../models/habit');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('habits controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        test('it returns habits with a 200 status code', async () => {
            jest.spyOn(Habit, 'all', 'get')
                 .mockResolvedValue(['habit1', 'habit2']);
            await habitsController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['habit1', 'habit2']);
        })
    });

    describe('show', () => {
        test('it returns an habit with a 200 status code', async () => {
            let testHabit = {
                id: 1, habit_name: 'walking', 
                habit_description: 'walking 30 min daily',
                habit_frequency: 'daily', frequency_target: 4, user_id: 1
            }
            jest.spyOn(Habit, 'findById')
                .mockResolvedValue(new Habit(testHabit));
                
            const mockReq = { params: { id: 1 } }
            await habitsController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });

    describe('create', () => {
        test('it returns a new book with a 201 status code', async () => {
            let testHabit = {
                id: 1, habit_name: 'walking', 
                habit_description: 'walking 30 min daily',
                habit_frequency: 'daily', frequency_target: 4, user_id: 1
            }
            jest.spyOn(Habit, 'create')
                .mockResolvedValue(new Habit(testHabit));
                
            const mockReq = { body: testHabit }
            await habitsController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });

    describe('destroy', () => {
        test('it returns a 204 status code on successful deletion', async () => {
            jest.spyOn(Habit.prototype, 'destroy')
                .mockResolvedValue('Deleted');
            
            const mockReq = { params: { id: 1 } }
            await habitsController.destroy(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })
    });
    
})
