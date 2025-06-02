CREATE DATABASE IF NOT EXISTS userdb;

USE userdb;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  company VARCHAR(100),
  role VARCHAR(50),
  country VARCHAR(50)
);


-- Insert sample data
INSERT INTO users (firstName, lastName, companyName, role, country)
VALUES
('John', 'Doe', 'Google', 'Developer', 'USA'),
('Jane', 'Smith', 'Amazon', 'Manager', 'UK');
