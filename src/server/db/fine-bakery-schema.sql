SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=1;

-- -----------------------------------------------------
-- Schema fine_bakery
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `fine_bakery` ;

-- -----------------------------------------------------
-- Schema fine_bakery
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fine_bakery` DEFAULT CHARACTER SET utf8 ;
USE `fine_bakery` ;

-- -----------------------------------------------------
-- Table `fine_bakery`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fine_bakery`.`roles` ;

CREATE TABLE IF NOT EXISTS `fine_bakery`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fine_bakery`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fine_bakery`.`users` ;

CREATE TABLE IF NOT EXISTS `fine_bakery`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `roles_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_roles_idx` (`roles_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_roles`
    FOREIGN KEY (`roles_id`)
    REFERENCES `fine_bakery`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `fine_bakery`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fine_bakery`.`super_users` ;

CREATE TABLE IF NOT EXISTS `fine_bakery`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
)
ENGINE = InnoDB;

USE fine_bakery;