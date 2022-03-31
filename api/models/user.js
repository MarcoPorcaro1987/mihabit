const db = require('../dbConfig/init');
const Habit = require("./habit")
class User {
	constructor(data) {
		this.id = data.id;
		this.email = data.email;
		this.username = data.username;
		this.password= data.password_digest;
	}

// get all users
	static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const usersData = await db.query(`SELECT * FROM users;`)
                const users = usersData.rows.map(d => new User(d))
                resolve(users);
            } catch (err) {
                reject("Error retrieving users")
            }
        })
    }

	static findById(id) {
		return new Promise(async (res, rej) => {
			try {
				let result = await db.query(`SELECT * FROM users WHERE id = $1;`, [id]);
				let user = new User(result.rows[0]);
				res(user);
			} catch (err) {
				rej(`Error retrieving user: ${err}`);
			}
		});
	}

	get habits(){
        return new Promise (async (resolve, reject) => {
            try {
                const habitsData = await db.query(`SELECT * FROM habits WHERE user_id = $1;`, [ this.id ]);
                const habits = habitsData.rows.map(d => new Habit(d));
                resolve(habits);
            } catch (err) {
                reject("User's habits could not be found");
            };
        });
    };


// create user
	static create({ email, username, password_digest }) {
		return new Promise(async (res, rej) => {
			try {
				let result = await db.query(
					`INSERT INTO users (email, username, password_digest) VALUES ($1, $2, $3) RETURNING *;`,
					[email, username, password_digest]
				);
				let user = new User(result.rows[0]);
				res(user);
			} catch (err) {
				rej(`Error creating user: ${err}`);
			}
		});
	}
}

module.exports = User;
