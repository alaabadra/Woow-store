INSERT INTO
  customer (
    customer_id,
    firstname,
    lastname,
    email,
    password
  )
VALUES
  (
    1,
    'alaa',
    'badra',
    'alaabadra4@gmail.com',
    '$2a$05$6Q1VE6DzhS8Z2pBr1VEPv.sM2dWPKacPv9GFC5M1.auGPlbab38aK'
  ),
  (
    2,
    'ala',
    'tare',
    'aa@hotmail.com',
    '$2a$05$xuOTwN1iWrraW7Og7cVAWu00RUpEXg6AV8X3Mz8cIUoQcT952FJ7e'
  ),
  (
    3,
    'alaa',
    'bad',
    'dim@gmail.com',
    '$2a$05$mjKkeAAMAaEsORbu.ZQKQurq4nr3pW3n524uwz9uQBrwLt3iGMAQG'
  ),
  (
    4,
    'ala',
    'tare',
    'bbb@hotmail.com',
    '$2a$05$rZ6MiHZcvdMzVwTyJsyJf.o.CXVgP0xt72NO0JzPL3o4uYtSfgJ9C'
  );

INSERT INTO
  cart (cart_id, cart_name, customer_cart_id)
VALUES
  (1, 'cart fruit ', 1),
  (2, 'cart veg', 2);

INSERT INTO
  products (
    product_id,
    product_name,
    product_image,
    product_price,
    sizes,
    customer_id,
    cart_product_id
  )
VALUES
  (
    1,
    'Ijebu Garri',
    'garri.jpg',
    8.99,
    '50lbs',
    1,
    1
  ),
  (
    2,
    'Brown Beans',
    'beans.jpeg',
    12.00,
    '2 lbs',
    2,
    2
  ),
  (3, 'tomato', 'tomato.jpg', 8.99, '50lbs', 1, 1),
  (4, 'potato', 'patato.jpg', 12, '65lbs', 1, 1),
  (5, 'eggs', 'eggs.jpg', 7, '9lbs', 1, 1);

INSERT INTO
  transactions (
    id_p_transactions,
    price,
    status,
    customer_transactions_id,
    num_card
  )
VALUES
  (1, 8.99, 'success', 1, 213322),
  (2, 100, 'Failed', 3, 656544);

  