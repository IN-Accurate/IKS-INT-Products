const express = require('express');
const productController = require('../controllers/product');
const subscriberController = require("../controllers/subscribe");
const router = express.Router();

// pubilc routes
// should add callback to these routes.
router.get('/products/all', productController.getAllProducts);
router.get('/product/:productName', productController.getSpecificProduct);
router.post('/subscribe', subscriberController.addSubscriber);


module.exports = router;