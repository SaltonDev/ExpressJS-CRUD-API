const express = require("express");
const router = express.Router();
const { getProducts, getSingleProduct,addProduct,updateProduct,deleteProduct } = require("../controller/product.controller");

//fetch all products
router.get("/", getProducts);

//fetch single product
router.get('/:id',getSingleProduct);

//add product
router.post('/',addProduct);

//update product
router.put('/:id',updateProduct);

//delete product
router.delete('/:id',deleteProduct);

module.exports =router;