-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-09-2026 a las 14:15:02
-- Versión del servidor: 5.7.24
-- Versión de PHP: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cine`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cartelera`
--

CREATE TABLE `cartelera` (
  `Idpeliculas` int(100) NOT NULL,
  `peliculas` varchar(20) NOT NULL,
  `funciones` varchar(20) NOT NULL,
  `salas` varchar(20) NOT NULL,
  `asientos` int(20) NOT NULL,
  `reservas` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cartelera`
--

INSERT INTO `cartelera` (`Idpeliculas`, `peliculas`, `funciones`, `salas`, `asientos`, `reservas`) VALUES
(1, 'Avatar', '16:00', 'Sala 1', 100, 25),
(2, 'Avengers', '12:00', 'Sala 2', 100, 34),
(3, 'Mi villano favorito', '18:00', 'Sala 1', 100, 36),
(4, 'Spiderman', '20:00', 'Sala 3', 100, 89),
(5, 'Batman', '16:00', 'Sala 2', 100, 45),
(6, 'Toy story', '13:30', 'Sala 4', 100, 43),
(7, 'Mario Bros 2', '20:00', 'Sala 1', 100, 45),
(8, 'Transformers', '20:00', 'Sala 5', 100, 34),
(9, 'Jurassic park', '17:30', 'Sala 2', 100, 56),
(10, 'Titanic', '13:40', 'Sala 5', 100, 43);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cartelera`
--
ALTER TABLE `cartelera`
  ADD PRIMARY KEY (`Idpeliculas`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cartelera`
--
ALTER TABLE `cartelera`
  MODIFY `Idpeliculas` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
