CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  objectId INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(25),
  message VARCHAR(200),
  roomname VARCHAR(20)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

