INSERT INTO users (email, username, password_digest) 
VALUES
('kakarrot@go.ku','Goku', 'tu9ibtoi4tbh2hhuet' ),
('majin@buu.com', 'Majin Buu', 'h4hoeuba3r3tbaeu' ),
('freezer@dg.dk','Freezer', 'ahudnthpdohbapbb243' ),
('lion@king.lk','Simba', 'aafadnthpqbsbapbb784' );

INSERT INTO habits (habit_name, habit_description, habit_frequency, frequency_target, user_id)
VALUES
    ('walking','walking 30 min daily','daily', 4, 1),
    ('swimming','swiming one hour daily','daily', 3, 2),
    ('sleeping','sleep 8 hours daily', 'daily', 7, 3),
    ('playing football', 'playing football 4 times a week', 'weekly', 4, 1);

INSERT INTO completions (completion_date, habit_id)
VALUES
    ('15-03-2022', 4),
    ('09-03-2022', 3),
    ('04-03-2022', 1),
    ('01-03-2022', 1);

