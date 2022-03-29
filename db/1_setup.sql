DROP TABLE IF EXISTS users;

CREATE TABLE users (
    email varchar(100) PRIMARY KEY,
    username varchar(255) NOT NULL UNIQUE,
    password_digest varchar(500) NOT NULL
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habit_name varchar(255) NOT NULL,
    habit_description varchar(500) NOT NULL, 
    habit_frequency varchar(200) NOT NULL,
    frequency_target int NOT NULL, 
    email varchar(100) NOT NULL, 
    FOREIGN KEY(email) REFERENCES users(email) 
);

DROP TABLE IF EXISTS completions;
CREATE TABLE completions (
    id serial PRIMARY KEY,
    completion_date varchar(200), 
    habit_id int,
    FOREIGN KEY(habit_id) REFERENCES habits(id)
);
