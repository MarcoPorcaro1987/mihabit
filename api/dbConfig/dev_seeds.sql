INSERT INTO users (username, email, password_digest) 
VALUES
('Goku', 'kakarrot@go.ku', 'tu9ibtoi4tbh2hhuet' ),
('Majin Buu', 'majin@buu.com', 'h4hoeuba3r3tbaeu' ),
('Freezer', 'freezer@dg.dk', 'ahudnthpdohbapbb243' );

INSERT INTO posts (user_id, name, frequency)
VALUES
    (1, 'walking', 4),
    (2, 'swimming', 3),
    (3, 'sleeping', 7),
    (1, 'playing football', 3)
