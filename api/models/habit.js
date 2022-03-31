const db = require('../dbConfig/init');
const dayjs = require('dayjs');
const dayOfYear = require('dayjs/plugin/dayOfYear');
const weekOfYear = require('dayjs/plugin/weekOfYear');
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);

//??? days stuff


const User = require('./user');
class Habit {
	constructor(data) {
		this.id = data.id;
		this.habitName = data.habit_name;
		this.description = data.habit_description;
		this.frequency = data.habit_frequency;
		this.frequencyTarget = data.frequency_target; 
		this.currentPeriod = data.currentPeriod;
		this.bestPeriod = data.bestPeriod;
		this.currentCompletions = data.currentCompletions;
        this.completionDates = data.completionDates;
		this.user = { path: `/users/${data.user_id}`};
	}


    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query('SELECT * FROM habits');
                let habits = habitData.rows.map(b => new Habit(b));
                resolve (habits);
            } catch (err) {
                reject('Habit not found');
            }
        });
    };

	static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let  habitData = await db.query(`SELECT habits.*, users.username as user_username
                                                FROM habits 
                                                INNER JOIN users
                                                ON habits.user_id = users.id
                                                WHERE habits.id = $1;`, [ id ]);
                let habit = new Habit( habitData.rows[0]);
                resolve (habit);
            } catch (err) {
                reject('Habit not found');
            }
        });
    };

    static findByUser (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let habitsData = await db.query(`SELECT * FROM habits WHERE user_id = $1;`, [ id ]);
                const habits = habitsData.rows.map(d => new Habit(d))
                resolve (habits);
            } catch (err) {
                reject('Error retrieving user\'s habits');
            }
        });
    }

/*create habit*/
	static create({habit_name, habit_description, habit_frequency, frequency_target, user_id }) {
		return new Promise(async (res, rej) => {
			try {
				let result = await db.query(
					`INSERT INTO habits (habit_name, habit_description, habit_frequency, frequency_target, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
					[habit_name, habit_description, habit_frequency, frequency_target, user_id]
				);

				let completionDates = [];

				let habit = new Habit({
					...result.rows[0],
					completionDates,
					currentPeriod: 0,
					bestPeriod: 0,
				});
				res(habit);
			} catch (err) {
				rej(`Error creating habit: ${err}`);
			}
		});
	}

	//delete a habit
	destroy() {
		return new Promise(async (resolve, reject) => {
			try {
				await db.query(`DELETE FROM completions WHERE habit_id = $1;`, [this.id]);
				await db.query(`DELETE FROM habits WHERE id = $1;`, [this.id]);
				resolve('Habit was deleted');
			} catch (err) {
				reject('Habit could not be deleted');
			}
		});
	}

}
module.exports = Habit;


// // //mark a habit as complete for the day 
// // 	markAsComplete() {
// // 		return new Promise(async (res, rej) => {
// // 			try {
// // 				const today = new Date();
// // 				const todaysDate = `${today.getFullYear()}-${(today.getMonth() + 1)
// // 					.toString()
// // 					.padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

// // 				const result = await db.query(
// // 					'INSERT INTO completions (completion_date, habit_id) VALUES ($1, $2) RETURNING *;',
// // 					[todaysDate, this.id]
// // 				);
// // 				res(result.rows[0]);
// // 			} catch (err) {
// // 				rej(err);
// // 			}
// // 		});
// // 	}

// // 	// track a habit by id: to see if they have completed a habit for the day and see their most recent completion streak */
// // 	static findById(id) {
// // 		return new Promise(async (res, rej) => {
// // 			try {
// // 				let result = await db.query(`SELECT * FROM habits WHERE id = $1;`, [id]);
// // 				if (result.rowCount === 0) {
// // 					throw new Error('Habit not found');
// // 				}
// // 				let datesResult = await db.query(
// // 					'SELECT * FROM completions WHERE habit_id = $1 ORDER BY completion_date;',
// // 					[result.rows[0].id]
// // 				);

// // 				const completionDates = datesResult.rows;
// // 				const periods = Habit.getPeriods(
// // 					completionDates.map((data) => data.completion_date),
// // 					result.rows[0].habit_frequency,
// // 					result.rows[0].frequency_target
// // 				);
// // 				let habit = new Habit({
// // 					...result.rows[0],
// // 					completionDates,
// // 					...periods,
// // 				});
// // 				res(habit);
// // 			} catch (err) {
// // 				console.log(err.message);
// // 				rej(err);
// // 			}
// // 		});
// // 	}
	
// // //function to get streaks, see their most recent completion streak
// // 	static getPeriods(completionDates, frequency, frequencyTarget) {
// // 		let today = dayjs(new Date());
// // 		let dates = [];

// // 		if (completionDates.length === 0) {
// // 			return {
// // 				bestPeriod: 0,
// // 				currentPeriod: 0,
// // 				currentCompletions: 0,
// // 			};
// // 		}

// // 		if (frequency === 'hourly') {
// // 			today = today.dayOfYear();
// // 			dates = completionDates.map((date) => dayjs(date).dayOfYear());
// // 		}
// // 		if (frequency === 'daily') {
// // 			today = today.week();
// // 			dates = completionDates.map((date) => dayjs(date).week());
// // 		}
// // 		if (frequency === 'weekly') {
// // 			today = today.month();
// // 			dates = completionDates.map((date) => dayjs(date).month());
// // 		}
// // 		const datesLength = dates.length;

// // 		if (Math.abs(today - dates[datesLength - 1]) > 1) {
// // 			return {
// // 				bestPeriod: 0,
// // 				currentPeriod: 0,
// // 				currentCompletions: 0,
// // 			};
// // 		}
// // 		const fullDatesData = dates.reduce(
// // 			(acc, curr) => {
// // 				if (curr === acc[acc.length - 1].day) {
// // 					acc[acc.length - 1].count++;
// // 				} else {
// // 					acc.push({
// // 						day: curr,
// // 						count: 1,
// // 					});
// // 				}
// // 				return acc;
// // 			},
// // 			[
// // 				{
// // 					day: dates[0],
// // 					count: 0,
// // 				},
// // 			]
// // 		);
// // 		const datesData = fullDatesData
// // 			.filter((day) => day.count >= frequencyTarget)
// // 			.map((date) => date.day);

// // 		let currentPeriod = 1;
// // 		let bestPeriod = 1;
// // 		let previousDate = datesData[0];

// // 		for (let i = 1; i < datesData.length; i++) {
// // 			if (Math.abs(previousDate - datesData[i]) === 1) {
// // 				currentPeriod++;
// // 				if (currentPeriod > bestPeriod) {
// // 					bestPeriod = currentPeriod;
// // 				}
// // 			} else {
// // 				currentPeriod = 1;
// // 			}
// // 			previousDate = datesData[i];
// // 		}
// // 		let currentCompletions = 0;

// // 		if (today === fullDatesData[fullDatesData.length - 1].day) {
// // 			currentCompletions = fullDatesData[fullDatesData.length - 1].count;
// // 		}
// // 		return {
// // 			bestPeriod,
// // 			currentPeriod,
// // 			currentCompletions,
// // 		};
// // 	}

// //show all habits for single user
// static findByEmail(email) {
// 	return new Promise(async (res, rej) => {
// 		try {
// 			headers: {
// 				Authorization: `Bearer: ${localStorage.getItem('token')}`
// 			}

// 			const db = await initDB();
// 			const habitData = await db.collection('habits').find({ userEmail: email }).toArray();
// 			const habits = habitData.map(data => new Habit({ ...data, id: data._id }));
// 			resolve(habits)

			
// 		} catch (err) {
// 			rej(`Error retrieving habits for ${ email }`)
// 		}
// 	})
	
// }
