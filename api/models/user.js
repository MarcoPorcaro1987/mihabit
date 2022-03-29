const db = require('../dbConfig/init');

class User {
	constructor(data) {
		this.email = data.email;
		this.userName = data.userName;
		this.password= data.password;
	}
// create user
	static create({ email, userName, password }) {
		return new Promise(async (res, rej) => {
			try {
				let result = await db.query(
					`INSERT INTO users (username, email, password_digest) VALUES ($1, $2, $3) RETURNING *;`,
					[userName, email, password]
				);
				let user = new User(result.rows[0]);
				res(user);
			} catch (err) {
				rej(`Error creating user: ${err}`);
			}
		});
	}
//filter by email
	static findByEmail(email) {
		return new Promise(async (res, rej) => {
			try {
				let result = await db.query(`SELECT * FROM users WHERE email = $1;`, [email]);
				let user = new User(result.rows[0]);
				res(user);
			} catch (err) {
				rej(`Error retrieving user: ${err}`);
			}
		});
	}
//get users by id
	get users(){
        return new Promise (async (resolve, reject) => {
            try {
                const usersData = await db.query(`SELECT * FROM users WHERE id = $1;`, [ this.id ]);
                const users = usersData.rows.map(d => new User(d));
                resolve(users);
            } catch (err) {
                reject("User could not be found");
            };
        });
    };

}

module.exports = User;
