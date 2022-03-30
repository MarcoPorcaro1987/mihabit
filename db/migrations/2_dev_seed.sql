INSERT INTO users (id, email, username, password_digest) 
VALUES
(1, 'kakarrot@go.ku','Goku', 'tu9ibtoi4tbh2hhuet' ),
(2, 'majin@buu.com', 'Majin Buu', 'h4hoeuba3r3tbaeu' ),
(3, 'freezer@dg.dk','Freezer', 'ahudnthpdohbapbb243' ),
(4, 'lion@king.lk','Simba', 'aafadnthpqbsbapbb784' );

INSERT INTO habits (habit_name, habit_description, habit_frequency, frequency_target )
VALUES
    ('walking','walking 30 min daily','daily', 4),
    ('swimming','swiming one hour daily','daily', 3),
    ('sleeping','sleep 8 hours daily', 'daily', 7),
    ('playing football', 'playing football 4 times a week', 'weekly', 4);

INSERT INTO completions (completion_date, habit_id)
VALUES
    ('15-03-2022', 4),
    ('09-03-2022', 3),
    ('04-03-2022', 1),
    ('01-03-2022', 1);

