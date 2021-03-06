//const path = require('path');

const express = require('express');

//const rootDir = require('../utils/path');

const productController = require('../controllers/products');

const router = express.Router();

//const products = [];

// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

// exports.routes = router;
// exports.products = products;

module.exports = router;
