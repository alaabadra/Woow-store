const dbconnection = require('../../config/db_connection');

const getDataCustomer = () => {
  const sql = {
    text: 'SELECT * FROM customer'
  };
  return dbconnection.query(sql);
};
module.exports={getDataCustomer};

