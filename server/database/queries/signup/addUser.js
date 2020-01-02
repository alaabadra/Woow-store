const dbconnection = require('../../config/db_connection');

module.exports=(customerId, firstname,lastname,email, password ) => {
  const sql = {
    text: 'INSERT INTO customer(customer_id,firstname,lastname,email, password) VALUES ( $1, $2,$3,$4 ,$5) RETURNING *',
    values: [customerId,firstname,lastname,email, password],
  };
  return dbconnection.query(sql);
};


