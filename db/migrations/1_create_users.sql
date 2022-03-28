DROP TABLE IF EXISTS users;

CREATE TABLE users (
    email varchar(100) PRIMARY KEY,
    username varchar(255) NOT NULL UNIQUE,
    password_digest varchar(500) NOT NULL
);
