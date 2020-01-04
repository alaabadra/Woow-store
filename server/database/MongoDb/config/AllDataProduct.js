const { products } = require('./db_buildSchema');
module.exports = async () => {
    const AllDataProduct = [
        {
            product_id:1,
            product_name: "Ijebu Garri",
            product_image: 'garri.jpg',
            product_price: 8.99,
            sizes: '50lbs',
            customer_id:1,
            cart_product_id:1
        }, {
            product_id:2,
            product_name: "Brown Beans",
            product_image: 'beans.jpeg',
            product_price: 12.00,
            sizes: '2 lbs',
            customer_id:2,
            cart_product_id:2

        }, {
            product_id:3,
            product_name: "tomato",
            product_image: 'tomato.jpeg',
            product_price: 12.00,
            sizes: '50 lbs',
            customer_id:1,
            cart_product_id:1
        }, {
            product_id:4,
            product_name: "potato",
            product_image: "potato.jpg",
            product_price:12,
            sizes: '64lbs',
            customer_id:1,
            cart_product_id:1
        },
        {
            product_id:5,
            product_name: "eggs",
            product_image: 'eggs.jpg',
            product_price: 7,
            sizes: '9lbs',
            customer_id:1,
            cart_product_id:1
        }

    ]

    return products.create(AllDataProduct)
}