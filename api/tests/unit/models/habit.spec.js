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

    // describe('create', () => {
    //     test('it resolves with book on successful db query', async () => {
    //         let bookData = { title: 'Test Book', yearOfPublication: 2020, abstract: 'test', authorName: 'Test Author' }
    //         jest.spyOn(db, 'query')
    //             .mockResolvedValueOnce({rows: [ { ...bookData, id: 1 }] });
    //         jest.spyOn(Author, 'findOrCreateByName')
    //             .mockResolvedValueOnce(new Author({id: 1, name: 'Test Author'}));
    //         const result = await Book.create(bookData);
    //         expect(result).toHaveProperty('id')
    //     })
    // });
    
})
