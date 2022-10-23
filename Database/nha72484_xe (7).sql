-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 24, 2022 lúc 01:54 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `nha72484_xe`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `allcodes`
--

CREATE TABLE `allcodes` (
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `allcodes`
--

INSERT INTO `allcodes` (`id`, `type`, `key`, `value`, `createdAt`, `updatedAt`) VALUES
(70, 'seat', 'TD1', 'C1', '2022-10-13 14:31:36', '2022-10-13 14:31:36'),
(71, 'seat', 'TD2', 'L1', '2022-10-13 14:31:50', '2022-10-13 14:31:50'),
(72, 'seat', 'TD3', 'B1', '2022-10-13 14:31:59', '2022-10-13 14:31:59'),
(73, 'seat', 'TD', 'L7', '2022-10-13 14:32:35', '2022-10-13 14:32:35'),
(74, 'seat', 'TD', 'A1', '2022-10-13 14:32:40', '2022-10-13 14:32:40'),
(75, 'seat', 'TD', 'C2', '2022-10-13 14:32:47', '2022-10-13 14:32:47'),
(76, 'seat', 'TD', 'L2', '2022-10-13 14:32:51', '2022-10-13 14:32:51'),
(77, 'seat', 'TD', 'B2', '2022-10-13 14:32:56', '2022-10-13 14:32:56'),
(78, 'seat', 'TD', 'L8', '2022-10-13 14:33:05', '2022-10-13 14:33:05'),
(79, 'seat', 'TD', 'A2', '2022-10-13 14:33:16', '2022-10-13 14:33:16'),
(80, 'seat', 'TD', 'C3', '2022-10-13 14:33:26', '2022-10-13 14:33:26'),
(81, 'seat', 'TD', 'L3', '2022-10-13 14:33:32', '2022-10-13 14:33:32'),
(82, 'seat', 'TD', 'B3', '2022-10-13 14:33:38', '2022-10-13 14:33:38'),
(83, 'seat', 'TD', 'L9', '2022-10-13 14:33:43', '2022-10-13 14:33:43'),
(84, 'seat', 'TD', 'A3', '2022-10-13 14:33:48', '2022-10-13 14:33:48'),
(85, 'seat', 'TD', 'C4', '2022-10-13 14:34:00', '2022-10-13 14:34:00'),
(86, 'seat', 'TD', 'L4', '2022-10-13 14:34:03', '2022-10-13 14:34:03'),
(87, 'seat', 'TD', 'B4', '2022-10-13 14:34:07', '2022-10-13 14:34:07'),
(88, 'seat', 'TD', 'L10', '2022-10-13 14:34:18', '2022-10-13 14:34:18'),
(89, 'seat', 'TD', 'A4', '2022-10-13 14:34:24', '2022-10-13 14:34:24'),
(90, 'seat', 'TD', 'C5', '2022-10-13 14:34:33', '2022-10-13 14:34:33'),
(91, 'seat', 'TD', 'L5', '2022-10-13 14:34:39', '2022-10-13 14:34:39'),
(92, 'seat', 'TD', 'B5', '2022-10-13 14:34:45', '2022-10-13 14:34:45'),
(93, 'seat', 'TD', 'L11', '2022-10-13 14:34:52', '2022-10-13 14:34:52'),
(94, 'seat', 'TD', 'A5', '2022-10-13 14:34:59', '2022-10-13 14:34:59'),
(95, 'seat', 'TD', 'C6', '2022-10-13 14:35:32', '2022-10-13 14:35:32'),
(96, 'seat', 'TD', 'L6', '2022-10-13 14:35:36', '2022-10-13 14:35:36'),
(97, 'seat', 'TD', 'B6', '2022-10-13 14:35:49', '2022-10-13 14:35:49'),
(98, 'seat', 'TD', 'L12', '2022-10-13 14:35:54', '2022-10-13 14:35:54'),
(99, 'seat', 'TD', 'A6', '2022-10-13 14:36:08', '2022-10-13 14:36:08'),
(100, 'seatup', 'TT', '1CT', '2022-10-13 14:45:25', '2022-10-13 14:45:25'),
(101, 'seatup', 'TT', '1BT', '2022-10-13 14:45:30', '2022-10-13 14:45:30'),
(102, 'seatup', 'TT', '1AT', '2022-10-13 14:45:34', '2022-10-13 14:45:34'),
(103, 'seatup', 'TT', '2CT', '2022-10-13 14:45:41', '2022-10-13 14:45:41'),
(104, 'seatup', 'TT', '2BT', '2022-10-13 14:45:46', '2022-10-13 14:45:46'),
(105, 'seatup', 'TT', '2AT', '2022-10-13 14:45:49', '2022-10-13 14:45:49'),
(106, 'seatup', 'TT', '3CT', '2022-10-13 14:45:56', '2022-10-13 14:45:56'),
(107, 'seatup', 'TT', '3BT', '2022-10-13 14:46:01', '2022-10-13 14:46:01'),
(108, 'seatup', 'TT', '3AT', '2022-10-13 14:46:05', '2022-10-13 14:46:05'),
(109, 'seatup', 'TT', '4CT', '2022-10-13 14:46:51', '2022-10-13 14:46:51'),
(110, 'seatup', 'TT', '4BT', '2022-10-13 14:46:55', '2022-10-13 14:46:55'),
(111, 'seatup', 'TT', '4AT', '2022-10-13 14:47:00', '2022-10-13 14:47:00'),
(112, 'seatup', 'TT', '5CT', '2022-10-13 14:47:06', '2022-10-13 14:47:06'),
(113, 'seatup', 'TT', '5BT', '2022-10-13 14:47:10', '2022-10-13 14:47:10'),
(114, 'seatup', 'TT', '5AT', '2022-10-13 14:47:14', '2022-10-13 14:47:14'),
(115, 'seatup', 'TT', '6CT', '2022-10-13 14:47:20', '2022-10-13 14:47:20'),
(116, 'seatup', 'TT', '6BT', '2022-10-13 14:47:23', '2022-10-13 14:47:23'),
(117, 'seatup', 'TT', '6AT', '2022-10-13 14:47:27', '2022-10-13 14:47:27'),
(118, 'seatup', 'TT', '1LT', '2022-10-13 14:47:32', '2022-10-13 14:47:32'),
(119, 'seatup', 'TT', '2LT', '2022-10-13 14:47:36', '2022-10-13 14:47:36'),
(120, 'seatup', 'TT', '3LT', '2022-10-13 15:09:30', '2022-10-13 15:09:30'),
(121, 'seatup', 'TT', '4LT', '2022-10-13 15:09:30', '2022-10-13 15:09:30'),
(122, 'seatup', 'TT', '5LT', '2022-10-13 15:09:30', '2022-10-13 15:09:30');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bookingseats`
--

CREATE TABLE `bookingseats` (
  `id` int(11) NOT NULL,
  `nameClient` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `ManegeId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `bookingseats`
--

INSERT INTO `bookingseats` (`id`, `nameClient`, `phoneNumber`, `price`, `ManegeId`, `userId`, `createdAt`, `updatedAt`) VALUES
(101, 'ghjkjgh', '76545', '54654654', 4, 1, '2022-09-03 09:37:21', '2022-09-03 09:37:21'),
(102, 'thgfd', '54645', '45355', 4, 1, '2022-09-03 09:39:02', '2022-09-03 09:39:02'),
(103, 'gfjnvhcb', '4563456345', '20000', 4, 1, '2022-09-03 09:39:23', '2022-09-03 09:39:23'),
(104, 'hrai', '265621694', '700000', 7, 1, '2022-09-03 16:40:03', '2022-09-03 16:40:03'),
(105, 'Tai', '02154585', '1400000', 8, 1, '2022-09-10 04:40:35', '2022-09-10 04:40:35'),
(106, 'hoa', '85782000', '1100000', 8, 1, '2022-09-10 04:41:36', '2022-09-10 04:41:36'),
(107, 'h', '45645645', '500000', 9, 1, '2022-09-10 03:52:07', '2022-09-10 03:52:07'),
(108, 'hoa', '345354', '50000000', 9, 1, '2022-09-10 03:57:23', '2022-09-11 05:58:09'),
(109, 'drfgg', '45645645', '1100000', 9, 1, '2022-09-10 04:34:14', '2022-09-10 04:34:14'),
(110, 'Tài', '5463545464', '600000', 9, 1, '2022-09-10 06:42:24', '2022-09-11 06:37:07'),
(112, 'gdfsgh', '54645645', '45645', 10, 1, '2022-10-12 15:14:18', '2022-10-12 15:14:18'),
(115, 'dfsgdsfg', '5464654', '54654', 11, 1, '2022-10-13 14:59:43', '2022-10-13 14:59:43'),
(116, 'dgdfghf', '54654', '456546', 11, 1, '2022-10-13 15:00:35', '2022-10-13 15:00:35'),
(119, 'fgdfg', '1564581', '5464564', 11, 1, '2022-10-13 18:18:26', '2022-10-13 18:18:26'),
(120, 'dfgdf', '6345654', '454', 11, 1, '2022-10-13 19:30:12', '2022-10-13 19:30:12'),
(121, 'ghgfh', '53264354', '3000000', 12, 1, '2022-10-14 07:30:47', '2022-10-14 07:30:47'),
(122, 'gfhgfh', '45654', '30040000', 12, 1, '2022-10-14 07:31:42', '2022-10-14 07:31:42'),
(126, 'edfgdf', '456456', '300000', 13, 1, '2022-10-16 04:18:20', '2022-10-16 04:18:20'),
(127, 'ergsdfg', '756745645', '900000', 14, 1, '2022-10-16 00:18:59', '2022-10-16 00:18:59'),
(128, 'sdfgsdfg', '5654645', '7564654', 15, 1, '2022-10-18 10:32:20', '2022-10-18 10:32:20');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `platesCar` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `cars`
--

INSERT INTO `cars` (`id`, `platesCar`, `status`, `createdAt`, `updatedAt`) VALUES
(4, '47a-11254', 1, '2022-09-01 08:09:39', '2022-09-01 08:09:39'),
(5, '47F-5550', 1, '2022-09-03 08:59:39', '2022-09-03 08:59:39'),
(7, 'sryghserty', 1, '2022-10-03 16:48:02', '2022-10-03 16:48:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `commodities`
--

CREATE TABLE `commodities` (
  `id` int(11) NOT NULL,
  `descriptioncommodities` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `commonCarId` int(11) DEFAULT NULL,
  `dateinput` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `commodities`
--

INSERT INTO `commodities` (`id`, `descriptioncommodities`, `price`, `commonCarId`, `dateinput`, `createdAt`, `updatedAt`) VALUES
(44, 'do sang', '100000', 4, '2022-09-01 07:00:00', '2022-09-03 10:00:24', '2022-09-03 10:00:24'),
(45, 'lop', '100000', 4, '2022-08-31 07:00:00', '2022-09-03 10:00:36', '2022-09-03 10:00:36'),
(46, 'hung tao lao', '100000', 5, '2022-08-31 07:00:00', '2022-09-03 10:00:51', '2022-09-03 10:00:51'),
(47, 'dfhdfgh', '100000', 5, '2022-08-31 07:00:00', '2022-09-03 10:00:59', '2022-09-03 10:00:59'),
(48, 'hfgh', '100000', 5, '2022-08-31 07:00:00', '2022-09-03 10:01:16', '2022-09-03 10:01:16'),
(49, 'gdfb', '100000', 5, '2022-09-02 07:00:00', '2022-09-03 10:01:29', '2022-09-03 10:01:29'),
(50, 'ftuhfg', '100000', 5, '2022-09-02 07:00:00', '2022-09-03 10:03:36', '2022-09-03 10:03:36'),
(51, 'sfgdf', '120000', 4, '2022-09-03 10:03:57', '2022-09-03 10:04:06', '2022-09-03 10:04:06'),
(52, 'sgvsfg', '120000', 4, '2022-09-02 07:00:00', '2022-09-03 10:04:21', '2022-09-03 10:04:21'),
(53, 'm/jkl;/kl', '120000', 4, '2022-09-03 07:00:00', '2022-09-03 10:04:27', '2022-09-03 10:04:27'),
(54, 'sdfasdf', '500000', 4, '2022-08-31 05:00:00', '2022-09-11 06:39:22', '2022-09-11 06:39:22'),
(59, '7564521', '45645645', 4, '2022-10-16 00:00:00', '2022-10-16 00:07:35', '2022-10-16 00:07:35'),
(60, 'jhghjfghjgh', '456456455', 4, '2022-10-16 00:00:00', '2022-10-16 00:07:44', '2022-10-16 00:07:44');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `consignments`
--

CREATE TABLE `consignments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nameUserSend` varchar(255) DEFAULT NULL,
  `phonenumberUserSend` varchar(255) DEFAULT NULL,
  `nameUserGet` varchar(255) DEFAULT NULL,
  `phonenumberUserGet` varchar(255) DEFAULT NULL,
  `typecommoditiesId` int(11) DEFAULT NULL,
  `carhangId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `consignments`
--

INSERT INTO `consignments` (`id`, `name`, `nameUserSend`, `phonenumberUserSend`, `nameUserGet`, `phonenumberUserGet`, `typecommoditiesId`, `carhangId`, `userId`, `date`, `price`, `createdAt`, `updatedAt`) VALUES
(35, 'fsdgdf', 'dfgdf', '76554654', 'sdggsdg', '6456546', 8, 4, 1, '2022-09-03 07:00:00', '54564', '2022-09-03 09:43:05', '2022-09-03 09:43:05'),
(36, 'fghjtdfhh', 'fsdgfds', '54695456', 'dfsgsdf', '5646546', 8, 6, 1, '2022-09-03 07:00:00', '4563453', '2022-09-03 17:20:15', '2022-09-03 17:20:15'),
(37, 'dfg', 'hfgjfhtgg', '56456454', 'hfghfgh', '5645645', 8, 9, 1, '2022-09-11 05:00:00', '20000', '2022-09-10 03:52:49', '2022-09-10 03:52:49'),
(38, 'fgjfghj', 'fghjfghj', '3456345646', 'fghjghf', '456546456', 8, 9, 1, '2022-09-11 05:00:00', '355555', '2022-09-10 03:54:45', '2022-09-10 03:54:45'),
(39, 'ddfgrdg', 'fgstdfg', '546353546', 'fsadfsad', '456356', 8, 10, 1, '2022-10-12 05:00:00', '54353453', '2022-10-12 15:08:31', '2022-10-12 15:08:31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `managecars`
--

CREATE TABLE `managecars` (
  `id` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `carId` int(11) DEFAULT NULL,
  `roadmapsId` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `managecars`
--

INSERT INTO `managecars` (`id`, `date`, `carId`, `roadmapsId`, `status`, `userId`, `createdAt`, `updatedAt`) VALUES
(4, '2022-09-05 22:12:54', 4, 13, 0, 1, '2022-09-03 08:55:13', '2022-09-05 22:13:00'),
(5, '2022-09-05 22:12:38', 4, 13, 0, 1, '2022-09-03 08:55:41', '2022-09-05 22:12:53'),
(6, '2022-09-05 22:13:01', 5, 14, 0, 1, '2022-09-03 08:59:55', '2022-09-05 22:13:06'),
(7, '2022-09-11 10:51:58', 5, 14, 0, 1, '2022-09-03 16:39:33', '2022-09-11 10:52:04'),
(8, '2022-09-11 10:51:53', 4, 13, 1, 1, '2022-09-10 04:39:41', '2022-09-11 10:51:58'),
(9, '2022-09-11 10:49:29', 5, 14, 1, 1, '2022-09-10 03:51:31', '2022-09-11 10:49:36'),
(10, '2022-10-12 05:00:00', 4, 14, 1, 1, '2022-10-12 15:08:01', '2022-10-12 15:08:01'),
(11, '2022-10-13 05:00:00', 4, 13, 1, 1, '2022-10-13 14:36:53', '2022-10-13 14:36:53'),
(12, '2022-10-14 05:00:00', 5, 14, 1, 1, '2022-10-14 07:30:24', '2022-10-14 07:30:24'),
(14, '2022-10-16 00:00:00', 4, 14, 1, 1, '2022-10-16 00:18:05', '2022-10-16 00:19:10'),
(15, '2022-10-18 00:00:00', 5, 14, 1, 1, '2022-10-18 10:32:06', '2022-10-18 10:32:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roadmaps`
--

CREATE TABLE `roadmaps` (
  `id` int(11) NOT NULL,
  `from` varchar(255) DEFAULT NULL,
  `to` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `roadmaps`
--

INSERT INTO `roadmaps` (`id`, `from`, `to`, `createdAt`, `updatedAt`) VALUES
(13, 'dd', 'ddb', '2022-09-01 08:10:00', '2022-09-01 08:10:00'),
(14, 'GG', '85', '2022-09-03 08:59:24', '2022-10-16 00:19:42');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `seatbooks`
--

CREATE TABLE `seatbooks` (
  `id` int(11) NOT NULL,
  `bookingseatsId` int(11) DEFAULT NULL,
  `seatId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `seatbooks`
--

INSERT INTO `seatbooks` (`id`, `bookingseatsId`, `seatId`, `createdAt`, `updatedAt`) VALUES
(327, 100, 'B1', '2022-09-03 09:32:59', '2022-09-03 09:32:59'),
(328, 100, 'A2', '2022-09-03 09:32:59', '2022-09-03 09:32:59'),
(329, 100, 'S1', '2022-09-03 09:32:59', '2022-09-03 09:32:59'),
(330, 101, 'A2', '2022-09-03 09:37:21', '2022-09-03 09:37:21'),
(331, 101, 'A5', '2022-09-03 09:37:21', '2022-09-03 09:37:21'),
(332, 102, 'B1', '2022-09-03 09:39:02', '2022-09-03 09:39:02'),
(333, 102, 'A1', '2022-09-03 09:39:02', '2022-09-03 09:39:02'),
(334, 103, 'S1', '2022-09-03 09:39:23', '2022-09-03 09:39:23'),
(335, 104, 'B2', '2022-09-03 16:40:03', '2022-09-03 16:40:03'),
(336, 104, 'A1', '2022-09-03 16:40:03', '2022-09-03 16:40:03'),
(337, 104, 'A4', '2022-09-03 16:40:03', '2022-09-03 16:40:03'),
(338, 104, 'S2', '2022-09-03 16:40:03', '2022-09-03 16:40:03'),
(339, 105, 'B5', '2022-09-10 04:40:35', '2022-09-10 04:40:35'),
(340, 105, 'A1', '2022-09-10 04:40:35', '2022-09-10 04:40:35'),
(341, 105, 'A5', '2022-09-10 04:40:35', '2022-09-10 04:40:35'),
(342, 105, 'S2', '2022-09-10 04:40:35', '2022-09-10 04:40:35'),
(343, 106, 'B1', '2022-09-10 04:41:36', '2022-09-10 04:41:36'),
(344, 106, 'B2', '2022-09-10 04:41:36', '2022-09-10 04:41:36'),
(345, 106, 'A2', '2022-09-10 04:41:36', '2022-09-10 04:41:36'),
(346, 106, 'S1', '2022-09-10 04:41:36', '2022-09-10 04:41:36'),
(347, 107, 'B2', '2022-09-10 03:52:07', '2022-09-10 03:52:07'),
(348, 107, 'A1', '2022-09-10 03:52:07', '2022-09-10 03:52:07'),
(349, 107, 'S2', '2022-09-10 03:52:07', '2022-09-10 03:52:07'),
(350, 108, 'B12', '2022-09-10 03:57:23', '2022-09-10 03:57:23'),
(351, 108, 'A5', '2022-09-10 03:57:23', '2022-09-10 03:57:23'),
(352, 108, 'S7', '2022-09-10 03:57:23', '2022-09-10 03:57:23'),
(353, 109, 'B3', '2022-09-10 04:34:14', '2022-09-10 04:34:14'),
(354, 109, 'A8', '2022-09-10 04:34:14', '2022-09-10 04:34:14'),
(355, 109, 'S6', '2022-09-10 04:34:14', '2022-09-10 04:34:14'),
(374, 110, 'S1', '2022-09-11 06:37:07', '2022-09-11 06:37:07'),
(375, 112, 'A1', '2022-10-12 15:14:18', '2022-10-12 15:14:18'),
(376, 113, 'C1', '2022-10-13 14:38:00', '2022-10-13 14:38:00'),
(377, 114, 'L3', '2022-10-13 14:52:55', '2022-10-13 14:52:55'),
(378, 114, 'L4', '2022-10-13 14:52:55', '2022-10-13 14:52:55'),
(379, 114, 'A3', '2022-10-13 14:52:55', '2022-10-13 14:52:55'),
(386, 117, 'B5', '2022-10-13 15:05:02', '2022-10-13 15:05:02'),
(387, 117, 'L5', '2022-10-13 15:05:02', '2022-10-13 15:05:02'),
(388, 118, 'C2', '2022-10-13 15:06:18', '2022-10-13 15:06:18'),
(389, 118, 'C2', '2022-10-13 15:06:18', '2022-10-13 15:06:18'),
(394, 119, '1CT', '2022-10-13 19:29:54', '2022-10-13 19:29:54'),
(395, 119, '7AT', '2022-10-13 19:29:54', '2022-10-13 19:29:54'),
(398, 120, '1CT', '2022-10-14 07:27:31', '2022-10-14 07:27:31'),
(399, 120, '7AT', '2022-10-14 07:27:31', '2022-10-14 07:27:31'),
(400, 120, 'C1', '2022-10-14 07:27:31', '2022-10-14 07:27:31'),
(401, 120, 'C2', '2022-10-14 07:27:31', '2022-10-14 07:27:31'),
(406, 122, 'C1', '2022-10-14 07:31:42', '2022-10-14 07:31:42'),
(407, 122, 'C2', '2022-10-14 07:31:42', '2022-10-14 07:31:42'),
(416, 121, '1BT', '2022-10-14 08:36:55', '2022-10-14 08:36:55'),
(417, 121, '3BT', '2022-10-14 08:36:55', '2022-10-14 08:36:55'),
(418, 121, '3AT', '2022-10-14 08:36:55', '2022-10-14 08:36:55'),
(419, 121, 'B2', '2022-10-14 08:36:55', '2022-10-14 08:36:55'),
(420, 126, 'C1', '2022-10-16 04:18:20', '2022-10-16 04:18:20'),
(421, 127, '1CT', '2022-10-16 00:18:59', '2022-10-16 00:18:59'),
(422, 127, '2LT', '2022-10-16 00:18:59', '2022-10-16 00:18:59'),
(423, 127, 'C1', '2022-10-16 00:18:59', '2022-10-16 00:18:59'),
(424, 128, '3LT', '2022-10-18 10:32:20', '2022-10-18 10:32:20'),
(425, 128, 'L1', '2022-10-18 10:32:20', '2022-10-18 10:32:20');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-allcode.js'),
('migration-bookingseat.js'),
('migration-cars.js'),
('migration-commodity.js'),
('migration-consignment.js'),
('migration-managecar.js'),
('migration-roadmap.js'),
('migration-seatBook.js'),
('migration-typecommodity.js'),
('migration-users.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `typecommodities`
--

CREATE TABLE `typecommodities` (
  `id` int(11) NOT NULL,
  `nametypecommodities` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `typecommodities`
--

INSERT INTO `typecommodities` (`id`, `nametypecommodities`, `createdAt`, `updatedAt`) VALUES
(8, 'do cong nghe', '2022-09-03 08:54:30', '2022-09-03 08:54:30');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `interfaceName` varchar(255) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `interfaceName`, `phonenumber`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '$2a$10$/9m4H3WfwWmC23tCw15HcuBco74dvd1oTIzIaoOWrh0KG/AzOY/hy', NULL, '0123456789', '2022-08-20 12:57:04', '2022-10-19 11:57:02');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `allcodes`
--
ALTER TABLE `allcodes`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `bookingseats`
--
ALTER TABLE `bookingseats`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `commodities`
--
ALTER TABLE `commodities`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `consignments`
--
ALTER TABLE `consignments`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `managecars`
--
ALTER TABLE `managecars`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `roadmaps`
--
ALTER TABLE `roadmaps`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `seatbooks`
--
ALTER TABLE `seatbooks`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `typecommodities`
--
ALTER TABLE `typecommodities`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `allcodes`
--
ALTER TABLE `allcodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT cho bảng `bookingseats`
--
ALTER TABLE `bookingseats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT cho bảng `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `commodities`
--
ALTER TABLE `commodities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT cho bảng `consignments`
--
ALTER TABLE `consignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `managecars`
--
ALTER TABLE `managecars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `roadmaps`
--
ALTER TABLE `roadmaps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `seatbooks`
--
ALTER TABLE `seatbooks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=426;

--
-- AUTO_INCREMENT cho bảng `typecommodities`
--
ALTER TABLE `typecommodities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
