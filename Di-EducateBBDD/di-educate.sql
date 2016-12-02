-- MySQL dump 10.13  Distrib 5.7.16, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.16-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AUDIO`
--

DROP TABLE IF EXISTS `AUDIO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AUDIO` (
  `idAUDIO` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(250) NOT NULL,
  `idDATOS_EJERCICIO` int(11) NOT NULL,
  PRIMARY KEY (`idAUDIO`),
  KEY `fk_AUDIO_DATOS_EJERCICIO1_idx` (`idDATOS_EJERCICIO`),
  CONSTRAINT `FKdugq8eetkf46epvvf6fupve69` FOREIGN KEY (`idDATOS_EJERCICIO`) REFERENCES `DATOS_EJERCICIO` (`idDATOS_EJERCICIO`),
  CONSTRAINT `fk_AUDIO_DATOS_EJERCICIO1` FOREIGN KEY (`idDATOS_EJERCICIO`) REFERENCES `DATOS_EJERCICIO` (`idDATOS_EJERCICIO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AUDIO`
--

LOCK TABLES `AUDIO` WRITE;
/*!40000 ALTER TABLE `AUDIO` DISABLE KEYS */;
INSERT INTO `AUDIO` VALUES (1,'https://dl.dropboxusercontent.com/s/j0zjc8xk23qfz1y/raton.mp3',2),(2,'https://dl.dropboxusercontent.com/s/ebbm22deoivwd1y/callar.mp3',2),(3,'https://dl.dropboxusercontent.com/s/1goznrcuafx8x6t/abuelo.mp3',2),(4,'https://dl.dropboxusercontent.com/s/a7ey4xbq9yvacnd/pato.mp3',6),(5,'https://dl.dropboxusercontent.com/s/ney0xut0qbr7p1v/capucha.mp3',6),(6,'https://dl.dropboxusercontent.com/s/lgupikjqepbhqfg/coche.mp3',6),(7,'https://dl.dropboxusercontent.com/s/hq8dd84ihf5xh9z/clavito.mp3',7),(8,'https://dl.dropboxusercontent.com/s/tjus1tc68b6yx00/tigres.mp3',7),(9,'https://dl.dropboxusercontent.com/s/k63ypqsoororykn/cielo.mp3',7),(10,'https://dl.dropboxusercontent.com/s/hmejlcuhguzzo16/trabalenguas.mp3',7),(11,'https://dl.dropboxusercontent.com/s/kzn2gutj83x7mof/practica.mp3',7),(12,'https://dl.dropboxusercontent.com/s/nfi1r589s9rznm3/cuento.mp3',8),(13,'https://dl.dropboxusercontent.com/s/rqlwgjob08aobdb/1.mp3',8),(14,'https://dl.dropboxusercontent.com/s/fhar8ol77zwsg51/2.mp3',8),(15,'https://dl.dropboxusercontent.com/s/61fl193adpk8m3a/3.mp3',8),(16,'https://dl.dropboxusercontent.com/s/obz32q79l0o2x2c/4.mp3',8),(17,'https://dl.dropboxusercontent.com/s/m6hzb66ynd9imwl/5.mp3',8),(18,'https://dl.dropboxusercontent.com/s/33gz5aem2it6nwd/6.mp3',8),(19,'https://dl.dropboxusercontent.com/s/43e1av50syc1j94/juego2.mp3',5);
/*!40000 ALTER TABLE `AUDIO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DATOS_EJERCICIO`
--

DROP TABLE IF EXISTS `DATOS_EJERCICIO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DATOS_EJERCICIO` (
  `idDATOS_EJERCICIO` int(11) NOT NULL AUTO_INCREMENT,
  `idEJERCICIO` varchar(45) NOT NULL,
  PRIMARY KEY (`idDATOS_EJERCICIO`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DATOS_EJERCICIO`
--

LOCK TABLES `DATOS_EJERCICIO` WRITE;
/*!40000 ALTER TABLE `DATOS_EJERCICIO` DISABLE KEYS */;
INSERT INTO `DATOS_EJERCICIO` VALUES (1,'leoleo1'),(2,'leoleo2'),(3,'leoleo3'),(4,'juego1'),(5,'juego2'),(6,'escucho1'),(7,'escucho2'),(8,'escucho3');
/*!40000 ALTER TABLE `DATOS_EJERCICIO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `IMAGEN`
--

DROP TABLE IF EXISTS `IMAGEN`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `IMAGEN` (
  `idIMAGEN` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(250) NOT NULL,
  `idDATOS_EJERCICIO` int(11) NOT NULL,
  PRIMARY KEY (`idIMAGEN`),
  KEY `fk_IMAGEN_DATOS_EJERCICIO1_idx` (`idDATOS_EJERCICIO`),
  CONSTRAINT `FK216uhbbe9v02b89l325vlr3ub` FOREIGN KEY (`idDATOS_EJERCICIO`) REFERENCES `DATOS_EJERCICIO` (`idDATOS_EJERCICIO`),
  CONSTRAINT `fk_IMAGEN_DATOS_EJERCICIO1` FOREIGN KEY (`idDATOS_EJERCICIO`) REFERENCES `DATOS_EJERCICIO` (`idDATOS_EJERCICIO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IMAGEN`
--

LOCK TABLES `IMAGEN` WRITE;
/*!40000 ALTER TABLE `IMAGEN` DISABLE KEYS */;
INSERT INTO `IMAGEN` VALUES (1,'https://dl.dropboxusercontent.com/s/cyisadk5tkxf7i3/banana.png',1),(2,'https://dl.dropboxusercontent.com/s/fcgpu1umndkgc5x/dolphin.png',1),(3,'https://dl.dropboxusercontent.com/s/k651pfsjazvnrqy/bano.png',1),(4,'https://dl.dropboxusercontent.com/s/9ispq6vz6mjgd0x/dedo.png',1),(5,'https://dl.dropboxusercontent.com/s/tdomd3pbfbph52w/pantalon.png',1),(6,'https://dl.dropboxusercontent.com/s/kqef4fuh7gphmnw/burro.png',1),(7,'https://dl.dropboxusercontent.com/s/obmetahrv0olk2s/audio.png',2),(8,'https://dl.dropboxusercontent.com/s/obmetahrv0olk2s/audio.png',6),(9,'https://dl.dropboxusercontent.com/s/obmetahrv0olk2s/audio.png',7),(10,'https://dl.dropboxusercontent.com/s/obmetahrv0olk2s/audio.png',8),(11,'https://dl.dropboxusercontent.com/s/55ukzi6gq9cw4wh/mu.jpg',8),(12,'https://dl.dropboxusercontent.com/s/l6cb6q0yfm9mdwd/guau.jpg',8),(13,'https://dl.dropboxusercontent.com/s/1lvy09y9423y5uw/plash.jpg',8),(14,'https://dl.dropboxusercontent.com/s/3no5gxnh1y9ihl6/run.jpg',8),(15,'https://dl.dropboxusercontent.com/s/8kiwg8p8mahubaq/ring.jpg',8),(16,'https://dl.dropboxusercontent.com/s/usdbnruoi54vzlq/muack.jpg',8),(17,'https://dl.dropboxusercontent.com/s/11k25oe92y34mhb/boing.jpg',8);
/*!40000 ALTER TABLE `IMAGEN` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RESPUESTA`
--

DROP TABLE IF EXISTS `RESPUESTA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RESPUESTA` (
  `idRESPUESTA` int(11) NOT NULL AUTO_INCREMENT,
  `TEXTO_RESPUESTA` varchar(45) NOT NULL,
  `idDATOS_EJERCICIO` int(11) NOT NULL,
  PRIMARY KEY (`idRESPUESTA`),
  KEY `fk_RESPUESTA_DATOS_EJERCICIO1_idx` (`idDATOS_EJERCICIO`),
  CONSTRAINT `FKofkr8r09y07x7dk00fahb3bvh` FOREIGN KEY (`idDATOS_EJERCICIO`) REFERENCES `DATOS_EJERCICIO` (`idDATOS_EJERCICIO`),
  CONSTRAINT `fk_RESPUESTA_DATOS_EJERCICIO1` FOREIGN KEY (`idDATOS_EJERCICIO`) REFERENCES `DATOS_EJERCICIO` (`idDATOS_EJERCICIO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RESPUESTA`
--

LOCK TABLES `RESPUESTA` WRITE;
/*!40000 ALTER TABLE `RESPUESTA` DISABLE KEYS */;
INSERT INTO `RESPUESTA` VALUES (1,'p',1),(2,'d',1),(3,'b',1),(4,'d',1),(5,'p',1),(6,'b',1),(7,'raton',2),(8,'callar',2),(9,'abuelo',2),(10,'lagarto',3),(11,'tomate',3),(12,'tetera',3),(13,'lechuga',3),(14,'gato',3),(15,'topo',3),(16,'cinco',3),(17,'copa',3),(18,'papel',3),(19,'go',4),(20,'bu',4),(21,'lo',4),(22,'pla',5),(23,'fan',5),(24,'tu',5),(25,'pato',6),(26,'capucha',6),(27,'coche',6),(28,'clavito',7),(29,'tigres',7),(30,'desenladrillador',7),(31,'muu',8),(32,'plash',8),(33,'run',8),(34,'muack',8),(35,'boing',8),(36,'ring',8);
/*!40000 ALTER TABLE `RESPUESTA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RESULTADOS`
--

DROP TABLE IF EXISTS `RESULTADOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RESULTADOS` (
  `idRESULTADOS` int(11) NOT NULL AUTO_INCREMENT,
  `APROBADO` tinyint(1) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idDATOS_EJERCICIO` int(11) NOT NULL,
  PRIMARY KEY (`idRESULTADOS`),
  KEY `fk_RESULTADOS_USUARIOS_idx` (`idUser`),
  KEY `fk_RESULTADOS_DATOS_EJERCICIO1_idx` (`idDATOS_EJERCICIO`),
  CONSTRAINT `FKc9pniajved55tlj7jcd1ixpvi` FOREIGN KEY (`idDATOS_EJERCICIO`) REFERENCES `DATOS_EJERCICIO` (`idDATOS_EJERCICIO`),
  CONSTRAINT `FKe3eo24v7spjwmpkm4m2qm2bbi` FOREIGN KEY (`idUser`) REFERENCES `USUARIOS` (`idUser`),
  CONSTRAINT `fk_RESULTADOS_DATOS_EJERCICIO1` FOREIGN KEY (`idDATOS_EJERCICIO`) REFERENCES `DATOS_EJERCICIO` (`idDATOS_EJERCICIO`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_RESULTADOS_USUARIOS` FOREIGN KEY (`idUser`) REFERENCES `USUARIOS` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RESULTADOS`
--

LOCK TABLES `RESULTADOS` WRITE;
/*!40000 ALTER TABLE `RESULTADOS` DISABLE KEYS */;
/*!40000 ALTER TABLE `RESULTADOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TEXTO_ENUNCIADO`
--

DROP TABLE IF EXISTS `TEXTO_ENUNCIADO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TEXTO_ENUNCIADO` (
  `idTEXTO_ENUNCIADO` int(11) NOT NULL AUTO_INCREMENT,
  `TEXTO_ENUNCIADO` varchar(250) NOT NULL,
  `idDATOS_EJERCICIO` int(11) NOT NULL,
  PRIMARY KEY (`idTEXTO_ENUNCIADO`),
  KEY `fk_TEXTO_ENUNCIADO_DATOS_EJERCICIO1_idx` (`idDATOS_EJERCICIO`),
  CONSTRAINT `FK7qqnm9u91cudcofw0cgmgniiu` FOREIGN KEY (`idDATOS_EJERCICIO`) REFERENCES `DATOS_EJERCICIO` (`idDATOS_EJERCICIO`),
  CONSTRAINT `fk_TEXTO_ENUNCIADO_DATOS_EJERCICIO1` FOREIGN KEY (`idDATOS_EJERCICIO`) REFERENCES `DATOS_EJERCICIO` (`idDATOS_EJERCICIO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TEXTO_ENUNCIADO`
--

LOCK TABLES `TEXTO_ENUNCIADO` WRITE;
/*!40000 ALTER TABLE `TEXTO_ENUNCIADO` DISABLE KEYS */;
INSERT INTO `TEXTO_ENUNCIADO` VALUES (1,'Crea la secuencia con la primera y última sílaba de las palabras que aparecen a continuación',3),(2,'Escucha el cuento y cuando estés listo pulsa \"Adelante\" para avanzar a la actividad',8);
/*!40000 ALTER TABLE `TEXTO_ENUNCIADO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USUARIOS`
--

DROP TABLE IF EXISTS `USUARIOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USUARIOS` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellidos` varchar(45) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `foto` varchar(45) DEFAULT NULL,
  `aficiones` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USUARIOS`
--

LOCK TABLES `USUARIOS` WRITE;
/*!40000 ALTER TABLE `USUARIOS` DISABLE KEYS */;
/*!40000 ALTER TABLE `USUARIOS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-12-01 20:17:09
