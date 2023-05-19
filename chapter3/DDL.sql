--Create Database
CREATE DATABASE keyboard_factory;

--Create Table Products
CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    qty INT NOT NULL
);

-- Create Table Parts
CREATE TABLE parts (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    product_id INT,
    CONSTRAINT product_fk FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Create Table Suppliers
CREATE TABLE suppliers (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    no_telp VARCHAR(15) NOT NULL
);

-- Create Bridge Table Part_Supplier
CREATE TABLE part_supplier (
    part_id INT,
    supplier_id INT,
    CONSTRAINT part_fk FOREIGN KEY (part_id) REFERENCES parts(id) ON DELETE CASCADE,
    CONSTRAINT supplier_fk FOREIGN KEY (supplier_id) REFERENCES suppliers(id) ON DELETE CASCADE
);