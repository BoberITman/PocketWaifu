CREATE TABLE `users` (
  `id` int DEFAULT NULL,
  `IDD` varchar(255) NOT NULL,
  `coins` int DEFAULT NULL,
  `tickets` int DEFAULT NULL,
  `malname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`IDD`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci