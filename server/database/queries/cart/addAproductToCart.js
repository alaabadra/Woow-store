const dbconnection = require('../../config/db_connection');

module.exports = (  productName,productImg,productPrice,productSizes,customerId,cartProductId) => {
  const sql = {
    text: 'INSERT INTO products(product_name,product_image,product_price,sizes,customer_id,cart_product_id) VALUES ($1 , $2,$3,$4,$5,$6) RETURNING *',
    values: [productName,productImg,productPrice,productSizes,customerId,cartProductId]
  };
  return dbconnection.query(sql);
};

