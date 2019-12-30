const dbconnection = require('../../config/db_connection');

const getAllProducts = () => {
  const sql = {
    text: 'SELECT * FROM products  '
  };
  return dbconnection.query(sql);
};
module.exports={getAllProducts};
