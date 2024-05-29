INSERT INTO `user_role` (`id`, `role`) VALUES (NULL, 'Super Admin');


CREATE TABLE `global_discount` (`id` INT NOT NULL AUTO_INCREMENT , `discount_type` INT NOT NULL COMMENT '1 - Flat rate, 2 - Amount' , `flat_rate` DOUBLE NOT NULL , `percentage` DOUBLE NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
INSERT INTO `global_discount` (`id`, `discount_type`, `flat_rate`, `percentage`) VALUES (NULL, '1', '0', '0');


CREATE TABLE `bank` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `status` int(11) NOT NULL,
  `added_by` int(11) NOT NULL,
  `added_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL,
  `updated_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
ALTER TABLE `bank`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bank_added_by` (`added_by`),
  ADD KEY `bank_updated_by` (`updated_by`);
ALTER TABLE `bank`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `bank`
  ADD CONSTRAINT `bank_added_by` FOREIGN KEY (`added_by`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `bank_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`id`);
COMMIT;
ALTER TABLE `bank` CHANGE `updated_by` `updated_by` INT(11) NULL DEFAULT NULL;



CREATE TABLE `card_discount` (`id` INT NOT NULL AUTO_INCREMENT , `bank` INT NOT NULL , `card_type` INT NOT NULL , `discount_type` INT NOT NULL , `amount` DOUBLE NOT NULL , `valid_date_start` VARCHAR(10) NOT NULL , `valid_date_end` VARCHAR(10) NOT NULL , `status` INT NOT NULL , `added_by` INT NOT NULL , `added_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated_by` INT NULL DEFAULT NULL , `updated_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;