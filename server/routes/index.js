const router = require('express').Router();
const {getCart,addAproductToCart}=require('../controller/cart/index');
const {getProducts,getProductsCart} = require('../controller/products/index');
const {getNotifications,addNewNoification,patchNotifications} = require('../controller/notifications/index');
const {getCheckout,addCheckout}=require('../controller/checkout/index');
const {generatePayment}=require('../controller/transaction/index');
const {addUser}= require('../controller/signup/index');
const { authunticationLogin, authunticatinVerify,authunticationLogout} = require('../controller/authunticationLogin/index')

router.post('/login', authunticationLogin);
router.use(authunticatinVerify)
router.get('/logout',authunticationLogout)
router.get('/get-products',getProducts);
router.post('/add-to-cart',addAproductToCart);
router.get('/get-all-products-from-cart/:cartProductId',getProductsCart);
router.post('/generate-pay',generatePayment);

router.get('/get-noti',getNotifications);
router.get('/add-noti',addNewNoification);
router.get('/update-noti',patchNotifications);

router.get('/get-checkout',getCheckout);
router.get('/add-checkout',addCheckout);

router.post('/add-user',addUser);

module.exports=router;

