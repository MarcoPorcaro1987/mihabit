INSERT INTO users (email, username, password_digest) 
VALUES
('kakarrot@go.ku','Goku','tu9ibtoi4tbh2hhuet' ),
('majin@buu.com', 'Majin Buu', 'h4hoeuba3r3tbaeu' ),
('freezer@dg.dk','Freezer', 'ahudnthpdohbapbb243' );

INSERT INTO habits (user_id, habit_name, habit_description, habit_frequency, frequency_target)
VALUES
    (1, 'walking','walking 30 min daily','daily', 4),
    (2, 'swimming','swiming one hour daily','daily', 3),
    (3, 'sleeping','sleep 8 hours daily', 'daily', 7),
    (1, 'playing football', 'playing football 4 times a week', 'weekly', 4);

INSERT INTO completions (completion_date, habit_id)
VALUES
    ('15-03-2022', 4),
    ('09-03-2022', 3),
    ('04-03-2022', 1),
    ('01-03-2022', 1);
