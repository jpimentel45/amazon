-- first if exists drop  --
DROP DATABASE IF EXISTS favorite_db;
-- Creates "favorite_db" database --
CREATE DATABASE favorite_db;

--use  favorite_db to store--
USE favorite_db;

-- Create table for "favorite_foods" in favorite_db --
CREATE TABLE favorite_foods
(
    --string with 50 characters must have input --
    food VARCHAR(50) NOT NULL,
    -- inter 10 characters stored in score --
    score INTEGER(10)
);
--table for fav songs--
CREATE TABLE favorite_songs
(
    song VARCHAR(100) NOT NULL,
    artist VARCHAR(50),
    score INTEGER(10)
);
--table for favorite movies--
CREATE TABLE favorite_movies
(
    id INTEGER NOT NULL
    AUTO_INCREMENT,
  movie VARCHAR
    (100) NOT NULL,
  -- boolean set to false if no value--
  five_times BOOLEAN DEFAULT false,
  score INTEGER
    (10),
  PRIMARY KEY
    (id)
);
