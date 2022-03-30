TRUNCATE users RESTART IDENTITY;

INSERT INTO users (id, email, username, password_digest) 
VALUES
(1, 'kakarrot@go.ku','Goku', 'tu9ibtoi4tbh2hhuet' ),
(2, 'majin@buu.com', 'Majin Buu', 'h4hoeuba3r3tbaeu' );

