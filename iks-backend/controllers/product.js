const productServices = require('../services/product');

// Gets all products and description
exports.getAllProducts = async (req, res) => {
    try {
        const result = await productServices.getAllProducts();
        res.status(200).send({ message: 'products fetched.', data: result });
    } catch (e) {
        res.status(401).send({ message: e.toString() });
    }
}

exports.getSpecificProduct = async (req, res) => {
    try {
        const productName = req.params.productName;
        if(!productName) throw new Error("Product name not defined.");
        const result = await productServices.getSpecificProduct(productName);
        res.status(200).send({ message: 'product fetched.', data: result });
    } catch (e) {
        res.status(401).send({ message: e.toString() });
    }
}