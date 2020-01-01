const dbconnection = require('../../config/db_connection');

const addUser = (email, password ) => {
  const sql = {
    text: 'INSERT INTO customer(email, password) VALUES ( $1, $2 ) RETURNING *',
    values: [email, password],
  };
  return dbconnection.query(sql);
};

module.exports = { addUser };

