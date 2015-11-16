-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 16, 2015 at 03:55 PM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `rene`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE IF NOT EXISTS `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_id` varchar(200) NOT NULL,
  `emp_fname` varchar(50) NOT NULL,
  `emp_lname` varchar(50) NOT NULL,
  `emp_phone` varchar(30) DEFAULT NULL,
  `emp_email` varchar(50) DEFAULT NULL,
  `emp_password` varchar(255) NOT NULL,
  `emp_level` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `emp_id_2` (`emp_id`),
  KEY `Emp_Id` (`emp_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `emp_id`, `emp_fname`, `emp_lname`, `emp_phone`, `emp_email`, `emp_password`, `emp_level`, `active`) VALUES
(14, '201', 'punetori', 'punai', '04455', 'test@test', 'test', 1, 1),
(16, '100', 'Flamur', 'statovci', '0444444', 'test@test', 'test', 1, 1),
(18, '200', 'Puntor', 'i ri', '04444', 'pun@pun', 'test', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_list` varchar(1500) CHARACTER SET utf8 DEFAULT NULL,
  `emp_id` int(11) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `date` datetime NOT NULL,
  `notes` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=119 ;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `prod_list`, `emp_id`, `total_price`, `date`, `notes`, `active`) VALUES
(87, ' , Coca cola - 1.00', 100, 1.00, '2015-10-29 15:24:00', '', 1),
(88, ' , Fanta - 1.00 , Sola - 2.50', 100, 3.50, '2015-10-29 15:24:08', '', 1),
(89, ' , SOLA - 1.00 , orangina - 2.00', 100, 3.00, '2015-10-29 15:24:16', '', 1),
(90, ' , Coca cola - 1.00', 100, 1.00, '2015-10-30 08:59:28', '', 1),
(91, ' , Fanta - 1.00 , Sola - 2.50', 100, 3.50, '2015-10-30 08:59:35', '', 1),
(92, ' , Coca cola - 1.00 , Fanta - 1.00 , Sola - 2.50', 100, 4.50, '2015-10-30 11:34:18', '', 1),
(93, ' , Coca cola - 1.00', 100, 1.00, '2015-10-30 14:43:21', '', 1),
(94, ' , Coca cola - 1.00', 100, 1.00, '2015-10-30 14:43:40', '', 1),
(95, ' , Fanta - 1.00', 100, 1.00, '2015-10-30 14:43:47', '', 1),
(96, ' , Sola - 2.50', 100, 2.50, '2015-10-30 14:43:58', '', 1),
(97, ' , SOLA - 1.00', 100, 1.00, '2015-10-30 14:44:13', '', 1),
(98, ' , orangina - 2.00', 100, 2.00, '2015-10-30 14:44:26', '', 1),
(99, ' , Coca cola - 1.00', 100, 1.00, '2015-10-30 14:44:31', '', 1),
(100, ' , Fanta - 1.00', 100, 1.00, '2015-10-30 14:44:38', '', 1),
(101, ' , Sola - 2.50', 100, 2.50, '2015-10-30 14:44:42', '', 1),
(102, ' , SOLA - 1.00', 100, 1.00, '2015-10-30 14:44:53', '', 1),
(103, ' , orangina - 2.00', 100, 2.00, '2015-10-30 14:46:59', '', 1),
(104, ' , Coca cola - 1.00', 100, 1.00, '2015-10-30 14:47:04', 'test', 1),
(109, ' , Coca cola - 1.00 , Fanta - 1.00 , Sola - 2.50 , SOLA - 1.00 , orangina - 2.00', 100, 7.50, '2015-11-04 09:39:18', '', 1),
(111, ' , Coca-cola - 2.00', 100, 2.00, '2015-11-12 14:07:15', '', 1),
(112, ' , Coca-cola - 2.00 , Fanta - 1.00', 100, 3.00, '2015-11-12 14:41:07', 'teting', 1),
(113, ' , Coca-cola - 2.00 , Fanta - 1.00', 100, 3.00, '2015-11-15 20:23:21', '', 1),
(115, ' , Coca-cola - 2.00 , Fanta - 1.00 , Sola - 2.50', 100, 5.50, '2015-11-16 13:14:12', '', 1),
(116, ' , Coca-cola - 2.00 , Fanta - 1.00 , Sola - 2.50', 100, 5.50, '2015-11-16 13:19:07', '', 1),
(117, ' , Coca-cola - 2.00 , Fanta - 1.00', 100, 3.00, '2015-11-16 13:22:18', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `prod_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_name` varchar(200) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `prod_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `active` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`prod_id`),
  KEY `prod_price` (`prod_price`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`prod_id`, `prod_name`, `category_id`, `prod_price`, `active`) VALUES
(1, 'Coca-cola', 1, 2.00, 1),
(2, 'Fanta', 1, 1.00, 1),
(4, 'Sola', 1, 2.50, 1),
(5, 'Burger', 4, 1.50, 1),
(14, 'Kamomil', 5, 1.00, 1),
(15, 'Green', 5, 0.50, 1),
(16, 'Capuccino', 2, 1.20, 1),
(17, 'Peja', 3, 1.50, 1),
(18, 'SOLA', 1, 1.00, 1);

-- --------------------------------------------------------

--
-- Table structure for table `prod_categories`
--

CREATE TABLE IF NOT EXISTS `prod_categories` (
  `cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`cat_id`),
  UNIQUE KEY `cat_id` (`cat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `prod_categories`
--

INSERT INTO `prod_categories` (`cat_id`, `cat_name`, `active`) VALUES
(1, 'Pije', 1),
(2, 'Coffe', 1),
(3, 'Birra', 1),
(4, 'Food', 1),
(5, 'Tea', 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `prod_categories` (`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
