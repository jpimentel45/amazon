-- Drops the bamazon if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "people" within bamazon_db --
CREATE TABLE products
(
  item_id INTEGER
  AUTO_INCREMENT NOT NULL,

  product_name VARCHAR
  (30) NOT NULL,

  department_name VARCHAR
  (100),

 price DECIMAL
  (10,2) NOT NULL,

  stock_quantity INTEGER
  (30),
  PRIMARY KEY
  (item_id)
  
);

  -- Creates new rows containing data in all named columns --
  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Bluetooth Vibrator", "Sexy", 1.50 , 100);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Carrs", "Organic Produce", 15, 100);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Stripper Pole", " Children Party Supplies", 169, 10);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("H20Melon", "Organic Produce", 15.50, 20);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Surface Pro 69", "Technology", 12201, 15);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("tomatoe", "Organic Produce", 2.50, 20);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Water", "Organic Produce", 15.50, 20);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Burrito", "Organic Produce", 12.50, 20);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Stripper", "Children Party Supplies", 5.50, 20);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Pokemon Cards", "Organic Games", 24.50, 20);