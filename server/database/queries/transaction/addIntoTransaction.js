
const dbconnection = require('../../config/db_connection');

const addIntoTransaction = (idTransacion,numCard,price,customerID,status) => {
  const sql = {
    text: 'INSERT INTO transactions(id_p_transactions,num_card,price,customer_transactions_id,status) VALUES ($1 , $2,$3,$4,$5) RETURNING *',
    values: [idTransacion,numCard,price,customerID,status]
  };
  return dbconnection.query(sql);
};

module.exports = { addIntoTransaction };

