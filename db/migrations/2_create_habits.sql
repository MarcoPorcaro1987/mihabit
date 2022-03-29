DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habit_description varchar(500) NOT NULL, 
    habit_frequency int NOT NULL,
    frequency_target int NOT NULL 
    -- FOREIGN KEY(email), 
    -- REFERENCES users(email) 
);

