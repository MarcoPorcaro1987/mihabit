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


INSERT INTO users (email, username, password_digest)
VALUES
('kakarrot@go.ku','Goku', 'tu9ibtoi4tbh2hhuet' ),
('majin@buu.com', 'Majin Buu', 'h4hoeuba3r3tbaeu' ),
('freezer@dg.dk','Freezer', 'ahudnthpdohbapbb243' );

INSERT INTO habits (habit_name, habit_description, habit_frequency, frequency_target, email )
VALUES
    ('walking','walking 30 min daily','daily', 4, 'kakarrot@go.ku'),
    ('swimming','swimming one hour daily','daily', 3, 'majin@buu.com'),
    ('sleeping','sleep 8 hours daily', 'daily', 7, 'freezer@dg.dk'),
    ('playing football', 'playing football 4 times a week', 'weekly', 4, 'kakarrot@go.ku');

INSERT INTO habits (completion_date, habit_id)
VALUES
    ('15-03-2022', 4),
    ('09-03-2022', 3),
    ('04-03-2022', 1),
    ('01-03-2022', 1);
