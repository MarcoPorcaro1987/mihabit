DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    user_id int,
    name varchar(100) NOT NULL,
    frequency int NOT NULL
);
