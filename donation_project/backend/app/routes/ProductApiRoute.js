
const express = require('express');

const ProductApiController = require('../controllers/ProductApiController');

const router = express.Router();

router.post('/create/product', ProductApiController.createProduct);

router.get('/product', ProductApiController.readProduct);

router.get('/edit/:id', ProductApiController.editProduct);

module.exports = router;