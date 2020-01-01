const router = require('express').Router();
const {getCart,addCart}=require('../controller/cart/index');
const {getProducts,addProduct} = require('../controller/products/index');
const {getNotifications,addNewNoification,patchNotifications} = require('../controller/notifications/index');
const {getCheckout,addCheckout}=require('../controller/checkout/index');
const {addUser}= require('../controller/signup/index')
router.get('/get-cart',getCart);
router.get('/add-cart',addCart);

router.get('/get-products',getProducts);
router.get('/add-product',addProduct);

router.get('/get-noti',getNotifications);
router.get('/add-noti',addNewNoification);
router.get('/update-noti',patchNotifications);

router.get('/get-checkout',getCheckout);
router.get('/add-checkout',addCheckout);


router.post('/add-user',addUser);


module.exports=router;
