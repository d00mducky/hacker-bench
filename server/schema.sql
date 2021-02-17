drop database if exists mvp_db;
create database mvp_db;
use mvp_db;

create table users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  reactScore INT,
  aimScore INT,
  numScore INT,
  seqScore INT,
  verbalScore INT,
  chimpScore INT,
  PRIMARY KEY (id)
);

insert into users (name, reactScore, aimScore, numScore, seqScore, verbalScore, chimpScore) values ('Kyle Perra', 0, 0, 0, 0, 0, 0);