DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id serial PRIMARY KEY,
    email varchar(100) NOT NULL UNIQUE,
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
    user_id int
);
    -- email varchar(100) NOT NULL
    -- FOREIGN KEY(email) REFERENCES users(email) 
DROP TABLE IF EXISTS completions;
CREATE TABLE completions (
    id serial PRIMARY KEY,
    completion_date varchar(200), 
    habit_id int,
    FOREIGN KEY(habit_id) REFERENCES habits(id)
);



INSERT INTO users (id, email, username, password_digest) 
VALUES
(1, 'kakarrot@go.ku','Goku', 'tu9ibtoi4tbh2hhuet' ),
(2, 'majin@buu.com', 'Majin Buu', 'h4hoeuba3r3tbaeu' ),
(3, 'freezer@dg.dk','Freezer', 'ahudnthpdohbapbb243' ),
(4, 'lion@king.lk','Simba', 'aafadnthpqbsbapbb784' );

INSERT INTO habits (habit_name, habit_description, habit_frequency, frequency_target, user_id)
VALUES
    ('walking','walking 30 min daily','daily', 4, 1),
    ('swimming','swiming one hour daily','daily', 3, 2),
    ('sleeping','sleep 8 hours daily', 'daily', 7, 3),
    ('playing football', 'playing football 4 times a week', 'weekly', 4, 1);

INSERT INTO habits (completion_date, habit_id)
VALUES
    ('15-03-2022', 4),
    ('09-03-2022', 3),
    ('04-03-2022', 1),
    ('01-03-2022', 1);
