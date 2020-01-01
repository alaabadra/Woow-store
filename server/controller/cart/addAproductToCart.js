const { addAproductToCart } = require('../../database/queries/cart/index');
module.exports = (req, res) => {
    const { productName, productImg, productPrice, productSizes, customerId, cartProductId } = req.body;
    addAproductToCart(productName, productImg, productPrice, productSizes, customerId, cartProductId)
        .then(result => {
            if (result.rows[0]) {
                res.status(200).send({
                    error: null,
                    productId: result.rows[0].product_id,
                    productName: result.rows[0].product_name,
                    productImg: result.rows[0].product_image,
                    productPrice: result.rows[0].product_price,
                    productSizes: result.rows[0].sizes,
                    customerId: result.rows[0].customer_id,
                    cartProductId: result.rows[0].cart_product_id
                })
            } else {
                res.status(500).send(JSON.stringify({ msg: 'Internal ServerError' }));
            }

        })
        .catch(() => {
            res.end()
        })
}

