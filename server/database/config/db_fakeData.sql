INSERT INTO
  customer (
    id,
    firstname,
    lastname,
    email

      )
VALUES
  (
    1,
    'alaa ',
    'badra',
    'alaa@h.c'
     
  ),(
    2,
    'dema ',
    'badra',
    'dema@h.c'
     
  );

INSERT INTO
  products (
    id,
    product_name,
    product_image,
    product_price,
    sizes,
    customer_id
      )
VALUES
  (
    1,
    'Ijebu Garri',
    'garri.jpg',
    8.99,
    '50lbs',
    1
  ),(
    2,
    'Brown Beans',
    'beans.jpeg',
    12.00,
    '2 lbs',
    1
  );

  INSERT INTO
  cart (
    customer_id,
    cart_name,
    product_id

      )
VALUES
  (
    1,
    'cart fruit ',
     1
  ),(
    2,
    'cart veg',
    2
  );

 INSERT INTO
  transactions (
    id,
    price,
    status,
    customer_id
      )
VALUES
  (
    1,
    8.99,
    'success',
    2
  ),(
    2,
    100,
    'Failed',
    2
  );

