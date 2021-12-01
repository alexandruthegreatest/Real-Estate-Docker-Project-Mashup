-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 23, 2021 at 06:03 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cloud_computing`
--

-- --------------------------------------------------------

--
-- Table structure for table `new_property`
--

CREATE TABLE `new_property` (
  `Id` int(11) NOT NULL,
  `property_name` varchar(255) NOT NULL,
  `property_type` varchar(255) NOT NULL,
  `street_address` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `country` varchar(11) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `operating_account` varchar(255) NOT NULL,
  `property_reserve` varchar(255) NOT NULL,
  `manager` varchar(255) NOT NULL,
  `unit_number` varchar(255) NOT NULL,
  `soft` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `new_property`
--

INSERT INTO `new_property` (`Id`, `property_name`, `property_type`, `street_address`, `postal_code`, `country`, `owner`, `operating_account`, `property_reserve`, `manager`, `unit_number`, `soft`) VALUES
(4, '', 'Town Home', 'India', '3010', 'Kenya', 'Alan', 'company checking', 'First P Reserve', 'Danson', '12', 'soft');

-- --------------------------------------------------------

--
-- Table structure for table `new_tenant`
--

CREATE TABLE `new_tenant` (
  `Id` int(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `unit_number` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `resident_center_status` varchar(255) NOT NULL,
  `text_message_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `new_tenant`
--

INSERT INTO `new_tenant` (`Id`, `first_name`, `last_name`, `unit_number`, `phone`, `email`, `resident_center_status`, `text_message_status`) VALUES
(1, 'Backend', 'Petrol', '2', '254770023385', 'johndoe@gmail.com', 'new', 'sent');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `new_property`
--
ALTER TABLE `new_property`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `new_tenant`
--
ALTER TABLE `new_tenant`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `new_property`
--
ALTER TABLE `new_property`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `new_tenant`
--
ALTER TABLE `new_tenant`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
