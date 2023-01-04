const express = require('express');
const productController = require('../controllers/product');
const router = express.Router();

// pubilc routes
// should add callback to these routes.
router.get('/products/all', );
router.post('/products/:productName', );
router.delete('/products/:productName',);
router.post('/subscribe', );


module.exports = router;