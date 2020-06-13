CREATE DATABASE park_info;
USE park_info;

CREATE TABLE typelp(
typelp VARCHAR(9) PRIMARY KEY,
nomtype VARCHAR(20)) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE salle (
  nsalle VARCHAR(7) NOT NULL,
  nom_salle VARCHAR(20) NOT NULL,
  nbposte TINYINT(2) DEFAULT NULL,
  indip VARCHAR(11) DEFAULT NULL,
  PRIMARY KEY (nsalle)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE poste (
  nposte VARCHAR(7) NOT NULL,
  nom_poste VARCHAR(20) NOT NULL,
  indip VARCHAR(11) DEFAULT NULL,
  ad VARCHAR(3) DEFAULT NULL,
  type_poste VARCHAR(9) DEFAULT NULL,
  nsalle VARCHAR(7) DEFAULT NULL,
  PRIMARY KEY (nposte)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE segment (
  indip VARCHAR(11) NOT NULL,
  nom_segment VARCHAR(20) DEFAULT NULL,
  etage TINYINT(1) DEFAULT NULL,
  PRIMARY KEY (indip)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE logiciel (
  nlog VARCHAR(5) NOT NULL,
  nomlog VARCHAR(20) NOT NULL,
  dateach DATETIME DEFAULT NULL,
  VERSION VARCHAR(7) DEFAULT NULL,
  typelog VARCHAR(9) DEFAULT NULL,
  prix DECIMAL(6,2) DEFAULT NULL,
  PRIMARY KEY (nlog)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE installation (
  nposte VARCHAR(7) DEFAULT NULL,
  nlog VARCHAR(5) DEFAULT NULL,
  num_ins INT(5) NOT NULL AUTO_INCREMENT,
  date_ins TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  delai DECIMAL(8,2) DEFAULT NULL,
  PRIMARY KEY (num_ins)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

INSERT INTO installation VALUES ('p2','log1',1,'2003-05-15 00:00:00',NULL),
('p2','log2',2,'2003-09-16 23:00:00',NULL),
('p4','log5',3,NULL,NULL),
('p6','log6',4,'2003-05-20 00:00:00',NULL),
('p6','log1',5,'2003-05-20 00:00:00',NULL),
('p8','log2',6,'2003-05-19 00:00:00',NULL),
('p8','log6',7,'2003-05-20 00:00:00',NULL),
('p11','log3',8,'2003-04-19 23:00:00',NULL),
('p12','log4',9,'2003-04-19 23:00:00',NULL),
('p11','log7',10,'2003-04-19 23:00:00',NULL),
('p7','log7',11,'2002-03-31 23:00:00',NULL);
SELECT * FROM installation

INSERT INTO logiciel VALUES ('log1','Oracle 6','1995-05-13 00:00:00','6.2','UNIX',3000.00),
('log2','Oracle 8','1999-09-15 00:00:00','8i','UNIX',5600.00),
('log3','SQL Server','1998-04-12 00:00:00','7','PCNT',3000.00),
('log4','Front Page','1997-06-03 00:00:00','5','PCWS',500.00),
('log5','WinDev','1997-05-12 00:00:00','5','PCWS',750.00),
('log6','SQL*Net',NULL,'2.0','UNIX',500.00),
('log7','I. I. S.','2002-04-12 00:00:00','2','PCNT',900.00),
('log8','DreamWeaver','2003-09-21 00:00:00','2.0','BeOS',1400.00);
SELECT * FROM logiciel

INSERT INTO poste VALUES ('p1','Poste 1','130.120.80','01','TX','s01'),
('p2','Poste 2','130.120.80','02','UNIX','s01'),
('p3','Poste 3','130.120.80','03','TX','s01'),
('p4','Poste 4','130.120.80','04','PCWS','s02'),
('p5','Poste 5','130.120.80','05','PCWS','s02'),
('p6','Poste 6','130.120.80','06','UNIX','s03'),
('p7','Poste 7','130.120.80','07','TX','s03'),
('p8','Poste 8','130.120.81','01','UNIX','s11'),
('p9','Poste 9','130.120.81','02','TX','s11'),
('p10','Poste 10','130.120.81','03','UNIX','s12'),
('p11','Poste 11','130.120.82','01','PCNT','s21'),
('p12','Poste 12','130.120.82','02','PCWS','s21');
SELECT * FROM poste

INSERT INTO salle  VALUES ('s01','Salle 1',3,'130.120.80'),
('s02','Salle 2',2,'130.120.80'),
('s03','Salle 3',2,'130.120.80'),
('s11','Salle 11',2,'130.120.81'),
('s12','Salle 12',1,'130.120.81'),
('s21','Salle 21',2,'130.120.82'),
('s22','Salle 22',0,'130.120.83'),
('s23','Salle 23',0,'130.120.83');
SELECT * FROM salle


INSERT INTO segment VALUES ('130.120.80','Brin RDC',NULL),
('130.120.81','Brin 1er	étage',NULL),
('130.120.82','Brin 2ème étage',NULL);
SELECT * FROM segment

INSERT INTO typelp VALUES ('TX','Terminal X-Window'),
('UNIX','Système Unix'),
('PCNT','PC Windows NT'),
('PCWS','PC Windows'),
('NC','Network Computer');
SELECT * FROM typelp

UPDATE segment SET etage=0 WHERE  indip='130.120.80';
UPDATE segment SET etage=1 WHERE  indip='130.120.81';
UPDATE segment SET etage=2 WHERE  indip='130.120.82';
SELECT * FROM segment

UPDATE logiciel SET prix=prix*0.9 WHERE typelog='PNCT';
SELECT nlog,typelog,prix FROM logiciel WHERE typelog='PCNT';

ALTER TABLE segment 
add(nbsalle INT(2) default 0, nbposte INT(2) default 0);
SELECT * FROM segment

ALTER TABLE logiciel 
add nbinstall INT(2) default 0;
SELECT * FROM logiciel

ALTER TABLE poste
add nblog INT(2) default 0;
SELECT * FROM poste;

ALTER TABLE salle MODIFY nom_salle VARCHAR(30);
DESC salle;

ALTER TABLE segment MODIFY nom_segment VARCHAR(15);
DESC segment;

SELECT * FROM installation;

ALTER TABLE installation ADD CONSTRAINT UNIQUE(nposte,nlog);

ALTER TABLE poste ADD CONSTRAINT fk_poste_indip FOREIGN KEY(indip) REFERENCES segment(indip);
ALTER TABLE poste ADD CONSTRAINT fk_poste_salle FOREIGN KEY(nsalle) REFERENCES salle(nsalle);
ALTER TABLE poste ADD CONSTRAINT fk_poste_type FOREIGN KEY(type_poste) REFERENCES typelp(typelp);
ALTER TABLE installation ADD CONSTRAINT fk_poste_inst FOREIGN KEY(nposte) REFERENCES poste(nposte);
ALTER TABLE installation ADD CONSTRAINT fk_logiciel_int FOREIGN KEY(nlog) REFERENCES logiciel(nlog);
ALTER TABLE logiciel ADD CONSTRAINT fk_log_type FOREIGN KEY(typelog) REFERENCES typelp(typelp)

SELECT nlog,typelog FROM logiciel WHERE typelog NOT IN(SELECT typelp FROM typelp)
INSERT INTO typelp VALUES('BeOS','System be');

ALTER TABLE salle add CONSTRAINT fk_segment FOREIGN KEY(indip) REFERENCES segment(indip);
DELETE FROM salle WHERE indip NOT IN(SELECT indip FROM segment);

CREATE TABLE softs AS SELECT nomlog,version,prix FROM logiciel;
SELECT * FROM softs;

ALTER TABLE softs CHANGE nomlog nomsoft VARCHAR(20);
DESC softs;

CREATE TABLE pcseuls AS SELECT nposte,nom_poste,indip,ad,type_poste,nsalle FROM poste
WHERE type_poste='PCNT' OR type_poste='PCWS';
SELECT * FROM pcseuls ;

ALTER TABLE pcseuls CHANGE nposte np VARCHAR(7);
ALTER TABLE pcseuls CHANGE nom_poste nomP VARCHAR(20);
ALTER TABLE pcseuls CHANGE indip seg VARCHAR(11);
ALTER TABLE pcseuls CHANGE type_poste typeP VARCHAR(9);
ALTER TABLE pcseuls CHANGE nsalle lieu VARCHAR(9); 
DESC pcseuls

SELECT nposte,type_poste FROM poste WHERE nposte='P8';

SELECT nomlog FROM logiciel WHERE typelog='UNIX';

SELECT nom_poste,indip,ad,nsalle FROM poste WHERE type_poste='UNIX' OR type_poste='PCWS';

SELECT nom_poste,indip,ad,nsalle,type_poste FROM poste 
WHERE indip='130.120.80' ORDER BY nsalle DESC;

SELECT nlog FROM installation WHERE nposte='P6';

SELECT nposte FROM installation WHERE nlog='log1';

SELECT nom_poste,CONCAT(indip,'.',ad) AS adresse_ip FROM poste WHERE type_poste='TX';

SELECT nposte,count(nlog) AS nbr_logiciel FROM installation GROUP BY nposte;

SELECT nsalle, COUNT(nposte) FROM poste GROUP BY (nsalle) ORDER BY 2;

SELECT nlog, COUNT(nposte) FROM installation GROUP BY (nlog);

SELECT AVG(prix) FROM logiciel WHERE typelog = 'UNIX';

SELECT MAX(dateach) FROM logiciel;

SELECT nposte FROM installation GROUP BY nposte HAVING COUNT(nlog)=2;

SELECT CONCAT(indip,'.',ad) FROM poste p, installation i
 WHERE p.nposte = i.nposte AND i.nlog = 'log6'; 

SELECT CONCAT(indip,'.',ad) FROM poste
 WHERE nposte IN
 (SELECT nposte FROM installation WHERE nlog = 'log6'); 


SELECT nom_segment FROM segment
 WHERE indip IN (SELECT indip FROM Poste WHERE type_poste = 'TX'
 GROUP BY indip HAVING COUNT(*)=3); 

SELECT nom_salle FROM salle WHERE nsalle IN
 (SELECT nsalle FROM poste WHERE nposte IN
 (SELECT nposte FROM installation WHERE nlog =
 (SELECT nlog FROM logiciel WHERE nomlog = 'Oracle 6'))); 
 
 SELECT nomlog FROM Logiciel WHERE dateach =
 (SELECT MAX(dateach) FROM logiciel); 
