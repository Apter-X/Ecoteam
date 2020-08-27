CREATE TABLE authors (

    id int PRIMARY KEY AUTO_INCREMENT,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL
);

CREATE TABLE categories  (

    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
   
);


CREATE TABLE articles (

id int PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
sentence VARCHAR(255) NOT NULL,
content TEXT NOT NULL,
date DATETIME DEFAULT NOW(),
author_id int NOT NULL,
category_id int NOT NULL

);