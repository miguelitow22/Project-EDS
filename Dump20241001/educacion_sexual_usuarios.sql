-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: educacion_sexual
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `role` enum('user','admin') NOT NULL,
  `activo` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Juanito','juanito@example.com','$2a$10$IBqbnw0AG5Ck3PbPAWnxxe91GfwJABubsMHpyebrvi2ctohdmI6Fi','admin',0),(2,'Juan','juan@example.com','$2a$10$0Xte9aG/Qk.G6NCVuXOo0OvM9Stu7JyziUw/R04v7xFk.E0KreBYG','user',1),(3,'cobo','cobo@gmail.com','$2a$10$CU8ZW2zlHotMPF7Tu0O41./5ubzPPiWJnLKjtxrLIojBtveI.LKcC','user',1),(4,'John Doe','john@example.com','$2a$10$.z46WKkV2cISsb6dh.poWOKDK0ymPxJtr5Kt4l/xRqj1q4MZ/9Uci','user',1),(5,'miguel ','migue@gmail.com','$2a$10$8Ir8BV5c3A3T45T/pjvY6.P4NOfFVuVZzeJU9JnsyFNsF/ZhzSnAm','user',1),(6,'pepito','miguel@gmail.com','$2a$10$PRfPqaHlS2oTTybgcUlNue8hTOVL1NSNPbvH1JXAoaHMnViItBIeu','user',0),(7,'santiago','santiago@gmail.com','$2a$10$L6KQzTSPluQ3IFn9ib3m/e.aHm6lDQq12RXJQW1vCmlRJrAXCSXPe','user',1),(8,'tio','tio@gmail.com','$2a$10$NYXaD2g8TrlcFQZfVAcjqOjp8ohfR3QV0KMa2oR3p0QZHD3x6JQ0y','user',1),(9,'Usuario Actualizado','usuario_actualizado@prueba.com','$2a$10$FSc1YsUJ4quCM4MOe2sHkODojvkbgb5fE/EtaMIiMkfRlJ2Vj5NCq','user',0),(10,'Miguel','julian@gmail.com','$2a$10$4dFoptvPkXF7lHmYdDOCXu1GGsnpCxcrjEf/na0otMR5hAeNKAcVu','user',0),(11,'Natalia Polo','natalia.polo1@udea.edu.co','$2a$10$fJffhwVrP0wczGvOMuHjFesAhpcXKme64pkUItcGzx7twKVh8ZcJG','user',1),(16,'Miguel','miguelitow@gmail.com','$2a$10$weLRqF0gy6AzCsU0huo0BO6mS4J0e5yFC03HXRJhyFrFVjoLxLMQq','user',1),(18,'daniel','daniel@gmail.com','$2a$10$3sxnAuEApsFGma/Flg2oJuEHA8e1jHpiUEYPaJAr1BkW65kh.0hsu','admin',1),(19,'mirlyn','mirlyn@gmail.com','$2a$10$SrZHrB9IFmyKL7FKvzyAQez2w5ofnJdi4F6N4.bHSVxx2h/JgdUMG','user',1),(21,'santiago22','santiago22@gmail.com','$2a$10$zgoDy.5bn/vbc4xXQnm8sejZrvQ6XN5XEFKZaR0jFQdsmvgSb6Ihe','user',1),(22,'miguel43','miguel43@gmail.com','$2a$10$5FUk5VQMrdQHydOj5adGfeK7qROgO1QSRiyRsvJKrUynjr4VQmeLa','user',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-01 15:12:51
