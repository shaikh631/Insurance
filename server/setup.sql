-- Create database
CREATE DATABASE IF NOT EXISTS insurance_db;
USE insurance_db;

-- Create table
CREATE TABLE IF NOT EXISTS insurance_forms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  country VARCHAR(100) NOT NULL,
  about LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create index on email for faster queries
CREATE INDEX idx_email ON insurance_forms(email);
