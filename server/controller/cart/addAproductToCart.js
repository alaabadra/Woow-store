const { addAproductToCart } = require('../../database/queries/cart/addAproductToCart');
const { getAllProducts } = require('../../database/queries/products/getProducts')
module.exports = (req, res, next) => {
    const { productId, productName, productImg, productPrice, productSizes, customerId, cartProductId } = req.body;
    console.log('body id', req.body.productId);

    getAllProducts()
        .then(resultGet => {
            resultGet.rows.map(element => {
                console.log('res id', element.product_id);
                if (productId !== element.product_id) {
                    addAproductToCart(productId, productName, productImg, productPrice, productSizes, customerId, cartProductId)
                        .then(result => {
                            if (result.rowCount) {
                                res.status(200).send({
                                    error: null,
                                    productId: result.rows[0].product_id,
                                    productName: result.rows[0].product_name,
                                    productImg: result.rows[0].product_image,
                                    productPrice: result.rows[0].product_price,
                                    productSizes: result.rows[0].sizes,
                                    customerId: result.rows[0].cart_product_id,
                                    cartProductId: result.rows[0].customer_id
                                })
                            } else {
                                res.status(500).send(JSON.stringify({ msg: 'Internal ServerError' }));
                            }

                        })
                } else {
                    console.log('sorry , you can not add this product id again in this cart');

                }
            })
        })

}

