BEGIN;

DROP TABLE IF EXISTS products,
cart,
customer,
transactions;

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    email TEXT,
    password TEXT
);

CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,
    cart_name TEXT NOT NULL,
    customer_cart_id INTEGER REFERENCES customer(customer_id)
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL,
    product_image TEXT NOT NULL,
    product_price NUMERIC,
    sizes TEXT NOT NULL,
    cart_product_id INTEGER REFERENCES cart(cart_id),
    customer_id INTEGER REFERENCES customer(customer_id)
);

CREATE TABLE transactions (
    id_p_transactions SERIAL PRIMARY KEY,
    price VARCHAR NOT NULL,
    status VARCHAR,
    customer_transactions_id INTEGER REFERENCES customer(customer_id),
    num_card NUMERIC
);

COMMIT;
