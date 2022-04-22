DROP DATABASE IF EXISTS potato_factory_db;
CREATE DATABASE potato_factory_db;

USE potato_factory_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name_ VARCHAR(30) NOT NULL
);

CREATE TABLE company_role  (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);
CREATE TABLE employee  (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id),
    FOREIGN KEY (role_id) REFERENCES company_role(id)
    ON DELETE SET NULL
);

