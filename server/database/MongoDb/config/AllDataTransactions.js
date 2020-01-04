const { transactions } = require('./db_buildSchema');
module.exports = async () => {
    const AllDataTransactions = [
        {
            id_p_transactions:1,
            price: 8.99,
            status: 'success',
            product_price: 8.99,
           
            customer_transactions_id:1,
            num_card:213322
        }, {
            id_p_transactions:2,
            price: 100,
            status: 'failed',
            customer_transactions_id:3,
            num_card:656544

        }
    ]

    return transactions.create(AllDataTransactions)
}