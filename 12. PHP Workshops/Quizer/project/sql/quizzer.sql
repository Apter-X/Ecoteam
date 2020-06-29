-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 13, 2020 at 07:46 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quizzer`
--

-- --------------------------------------------------------

--
-- Table structure for table `choice`
--

DROP TABLE IF EXISTS `choice`;
CREATE TABLE IF NOT EXISTS `choice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_id` int(11) NOT NULL,
  `is_correct` tinyint(1) NOT NULL DEFAULT '0',
  `text` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_question` (`question_id`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `choice`
--

INSERT INTO `choice` (`id`, `question_id`, `is_correct`, `text`) VALUES
(1, 1, 1, '$_GET[]'),
(31, 6, 1, '1'),
(4, 1, 0, 'Reset.from'),
(30, 4, 0, '0'),
(29, 4, 0, '2'),
(28, 4, 0, '3'),
(27, 4, 1, '1'),
(9, 1, 0, '$_SERVER[]'),
(10, 1, 0, '$_FILE[]'),
(11, 2, 0, 'Create Myfunction'),
(12, 2, 0, 'Myfunction Create'),
(13, 2, 1, 'function myFunc()'),
(14, 2, 0, 'New Function()'),
(26, 5, 0, 'C++'),
(25, 5, 0, 'JAVASCRIPT'),
(24, 5, 1, 'PYTHON'),
(23, 5, 0, 'PHP'),
(32, 6, 0, '3'),
(33, 6, 0, '2'),
(34, 6, 0, '0'),
(35, 7, 1, 'dada'),
(36, 7, 0, 'dad'),
(37, 7, 0, 'daa'),
(38, 7, 0, 'dddda'),
(39, 7, 0, 'dada');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
CREATE TABLE IF NOT EXISTS `questions` (
  `question_id` int(11) NOT NULL,
  `Text` text NOT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question_id`, `Text`) VALUES
(1, 'How do you get information from a form that is submitted using the \"get\" method?'),
(2, 'What is the correct way to create a function in PHP?\r\n\r\n'),
(5, 'what the best backend language in the history '),
(4, 'how much parameter take the function mysqli->query()'),
(6, 'how much parameter take the function mysqli->query()'),
(7, 'dadaz');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
