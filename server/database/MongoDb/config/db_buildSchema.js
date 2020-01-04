
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.customer = mongoose.model('customer', new Schema({
    customer_id: Number,
    firstname: String,
    product_image:String,
    lastname:String,
    email:String,
    password:String

}))

exports.cart = mongoose.model('cart', new Schema({
    cart_id: Number,
    cart_name: String,
    customer_cart_id: String
  
}))
exports.products = mongoose.model('products', new Schema({
    product_id: Number,
    product_name: String,
    product_image:String,
    product_price:String,
    sizes:String,
    cart_product_id:Number,
    customer_id:Number

}))

exports.transactions = mongoose.model('transactions', new Schema({
    id_p_transactions: Schema.Types.ObjectId,
    price: Number,
    status: String,
    customer_transactions_id: Number,
    num_card: Number,
}))


