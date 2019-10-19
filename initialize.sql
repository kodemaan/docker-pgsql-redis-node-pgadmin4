CREATE DATABASE my_db;

\c my_db;

CREATE TABLE posts (
  name VARCHAR(50),
  post_date timestamp without time zone
);

INSERT INTO posts (name, post_date) values ('test', '2019-10-19 23:30:01'),('test2', '2019-10-19 23:32:01');
