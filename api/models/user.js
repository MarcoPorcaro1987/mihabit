const db = require('../dbConfig/init');

class User {
	constructor(data) {
		this.email = data.email;
		this.username = data.username;
		this.passwordDigest = data.password_digest;
	}
// create user
	static create({ username, email, passwordDigest }) {
		return new Promise(async (res, rej) => {
			try {
				let result = await db.query(
					`INSERT INTO users (username, email, password_digest) VALUES ($1, $2, $3) RETURNING *;`,
					[username, email, passwordDigest]
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

	//get all users
	static get all(){ 
        return new Promise (async (resolve, reject) => {
            try {
                // console.log(db);
                const result = await db.query('SELECT * FROM users;')
                const users = result.rows.map(u => ({ id: u.id, username: u.username }))
                resolve(users);
            } catch (err) {
                reject("Error retrieving users")
            }
        })
    };

}

module.exports = User;
