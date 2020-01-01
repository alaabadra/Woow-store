
const dbconnection = require('../../config/db_connection');

module.exports= (cartProductId) => {
  const sql = {
    text: 'SELECT * FROM products  WHERE cart_product_id=$1',
    values:[cartProductId]
  };
  return dbconnection.query(sql);
};

