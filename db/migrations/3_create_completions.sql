DROP TABLE IF EXISTS completions;
CREATE TABLE completions (
    id serial PRIMARY KEY,
    date DATA NOT NULL, 
    habit_id int
);
