DROP TABLE IF EXISTS users;

CREATE TABLE users (
    email varchar(100) PRIMARY KEY,
    username varchar(255) NOT NULL UNIQUE,
    password_digest varchar(500) NOT NULL
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habit_description varchar(500) NOT NULL, 
    habit_frequency int NOT NULL,
    frequency_target int NOT NULL 
    -- FOREIGN KEY(email), 
    -- REFERENCES users(email) 
);

DROP TABLE IF EXISTS completions;
CREATE TABLE completions (
    id serial PRIMARY KEY,
    date DATA NOT NULL, 
    habit_id int
);
