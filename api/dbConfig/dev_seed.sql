INSERT INTO users (email, username, password_digest) 
VALUES
('kakarrot@go.ku','Goku', 'tu9ibtoi4tbh2hhuet' ),
('majin@buu.com', 'Majin Buu', 'h4hoeuba3r3tbaeu' ),
('freezer@dg.dk','Freezer', 'ahudnthpdohbapbb243' );

INSERT INTO habits (habit_description, habit_frequency, frequency_target, email )
VALUES
    ('walking', 4, 3, 'kakarrot@go.ku'),
    ('swimming', 3, 6, 'majin@buu.com'),
    ('sleeping', 7, 8, 'freezer@dg.dk'),
    ('playing football', 5, 4, 'kakarrot@go.ku');

INSERT INTO habits (date, habit_id)
VALUES
    ('15-03-2022', 4),
    ('09-03-2022', 3),
    ('04-03-2022', 1),
    ('01-03-2022', 1);

    
  
