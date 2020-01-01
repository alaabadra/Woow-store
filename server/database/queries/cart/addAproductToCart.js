const dbconnection = require('../../config/db_connection');

const addAproductToCart = (productId,productName,productImg,productPrice,productSizes,customerId,cartProductId) => {
  const sql = {
    text: 'INSERT INTO products(product_id,product_name,product_image,product_price,sizes,customer_id,cart_product_id) VALUES ($1 , $2,$3,$4,$5,$6,$7) RETURNING *',
    values: [productId,productName,productImg,productPrice,productSizes,customerId,cartProductId]
  };
  return dbconnection.query(sql);
};

module.exports = { addAproductToCart };
