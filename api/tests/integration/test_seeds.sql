TRUNCATE users, habits RESTART IDENTITY;

INSERT INTO users (id, email, username, password_digest) 
VALUES
(1, 'kakarrot@go.ku','Goku', 'tu9ibtoi4tbh2hhuet' ),
(2, 'majin@buu.com', 'Majin Buu', 'h4hoeuba3r3tbaeu' );

INSERT INTO habits (habit_name, habit_description, habit_frequency, frequency_target, user_id) 
VALUES
('walking','walking 30 min daily','daily', 4, 1),
('swimming','swiming one hour daily','daily', 3, 1),
('sleeping','sleep 8 hours daily', 'daily', 7, 2);
