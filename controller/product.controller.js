const Product = require("../models/product.model");

//get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500), json({ message: error.message });
  }
};
//get single product
const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({ message: "product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//add product
const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (!product) {
      res.status(404).json({ message: "failed to add product" });
    }
    res.status(200).json({ message: "product added" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//updating product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatingProduct = await Product.findByIdAndUpdate(id,req.body);
    if (!updatingProduct) {
      res.status(404).json({ message: "product not updated may be product doesn't exist" });
    }
    const newProduct =await Product.findById(id);
    res.status(200).json({ message: "product updated", newProduct });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//deleting product
const deleteProduct = async(req,res) => {
    try{
        const { id } = req.params;
        const deleted = await Product.findByIdAndDelete(id);
        if(!deleted){
            res.status(404).json({message: "failed to delete product"});
        }
        res.status(200).json({message: "product deleted"});
    }
    catch(error){
        return res.status(500).json({ message:error.message});
    }
}

module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct
};
