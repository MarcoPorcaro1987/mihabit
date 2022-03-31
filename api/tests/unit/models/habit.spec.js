const Habit = require('../../../models/habit');
const User = require('../../../models/user');

jest.mock('../../../models/user');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('Habit', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with authors on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}]});
            const all = await Habit.all;
            expect(all).toHaveLength(3)
        })
    });

    describe('findById', () => {
        test('it resolves with habit on successful db query', async () => {
            let habitData = { id: 1, habit_name: 'Test Habit' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ habitData] });
            const result = await Habit.findById(1);
            expect(result).toBeInstanceOf(Habit)
        })
    });

    describe('create', () => {
        test('it resolves with habit on successful db query', async () => {
            let habitData = { habit_name: 'walking', habit_description: 'walking 30 min daily', habit_frequency: 'daily', frequency_target: 4, user_id: 1 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...habitData, id: 1 }] });
            jest.spyOn(User, 'findById')
                .mockResolvedValueOnce(new User({id: 1, username: 'Test User'}));
            const result = await Habit.create(habitData);
            expect(result).toHaveProperty('id')
        })
    });
    
})
