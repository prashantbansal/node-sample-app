const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

//const products = [];

const productController = require('../controllers/products');

// admin/add-product //GET Request
router.get('/add-product', productController.getAddProduct);

   //admin/add-product //POST Request
router.post('/add-product', productController.postAddProduct);

//module.exports= router;
//module.exports.routes = router;
//module.exports.products = products;
module.exports = router;