-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-09-2026 a las 13:04:39
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
-- Base de datos: `estudiantes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `control_de_prestamos`
--

CREATE TABLE `control_de_prestamos` (
  `ID-Estudiantes` int(4) NOT NULL,
  `estudiantes` varchar(14) NOT NULL,
  `prestamos` int(13) NOT NULL,
  `libros` int(13) NOT NULL,
  `estado` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `control_de_prestamos`
--

INSERT INTO `control_de_prestamos` (`ID-Estudiantes`, `estudiantes`, `prestamos`, `libros`, `estado`, `estado`) VALUES
(11, 'Jose', 1, 1, '', 'Válido'),
(12, 'Maria', 2, 0, '', 'Revisar');

--
-- Disparadores `control_de_prestamos`
--
DELIMITER $$
CREATE TRIGGER `trg_evitar_doble_prestamo` BEFORE INSERT ON `control_de_prestamos` FOR EACH ROW BEGIN
    -- Verifica si el libro ya existe con estado de préstamo activo (asumiendo 1 = activo)
    IF EXISTS (
        SELECT 1 
        FROM control_de_prestamos 
        WHERE libros = NEW.libros AND prestamos = 1
    ) THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Error: Este libro ya se encuentra en un préstamo activo.';
    END IF;
END
$$
DELIMITER ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `control_de_prestamos`
--
ALTER TABLE `control_de_prestamos`
  ADD PRIMARY KEY (`ID-Estudiantes`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `control_de_prestamos`
--
ALTER TABLE `control_de_prestamos`
  MODIFY `ID-Estudiantes` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
