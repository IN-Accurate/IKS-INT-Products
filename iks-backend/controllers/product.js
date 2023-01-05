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
        const result = await productServices.getSpecificProduct(productName);
        res.status(200).send({ message: 'product fetched.', data: result });
    } catch (e) {
        res.status(401).send({ message: e.toString() });
    }
}

exports.search = async (req, res) => {
    try {
        const searchQuery = req.params.productName;
        const result = await productServices.searchDocs(searchQuery);
        res.status(200).send({ message: 'search completed.', data: result });
    } catch (e) {
        res.status(401).send({ message: e.toString() });
    }
}