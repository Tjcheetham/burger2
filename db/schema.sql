DROP DATABASE IF EXISTS burgers;
CREATE DATABASE burgers;
USE burgers;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);