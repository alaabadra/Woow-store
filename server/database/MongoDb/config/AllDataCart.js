const { cart } = require('./db_buildSchema');
module.exports = async () => {
    const AllDataCart = [
        {
            cart_id:1,
            cart_name: 8.99,
            customer_cart_id: 8.99,
        }, {
            cart_id:2,
            cart_name: 100,
            customer_cart_id:3,
        }
    ]

    return cart.create(AllDataCart)
}