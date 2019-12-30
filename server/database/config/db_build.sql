BEGIN;
DROP TABLE IF EXISTS products,cart,customer,transactions;
CREATE TABLE customer(
id SERIAL PRIMARY KEY,
firstname VARCHAR,
lastname VARCHAR,
email TEXT,
password TEXT
);
CREATE TABLE products (
id SERIAL PRIMARY KEY,
product_name TEXT NOT NULL,
product_image TEXT NOT NULL,
product_price NUMERIC,
sizes TEXT NOT NULL,
customer_id INTEGER REFERENCES customer(id)
);

CREATE TABLE cart (
customer_id SERIAL PRIMARY KEY,
cart_name TEXT NOT NULL,
product_id INTEGER REFERENCES products(id)
);

CREATE TABLE transactions (
id SERIAL PRIMARY KEY,
price VARCHAR NOT NULL,
status VARCHAR,
customer_id INTEGER REFERENCES customer(id)
);

COMMIT;
