const dbconnection = require('../../config/db_connection');

module.exports = () => {
  const sql = {
    text: 'SELECT * FROM transactions  '
  };
  return dbconnection.query(sql);
};
