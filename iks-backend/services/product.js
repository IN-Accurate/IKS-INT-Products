const Products = require('../models/products');

exports.getAllProducts = () => {
    return new Promise((resolve, reject) => {
        Products.find({}, (err, products)=>{
            if(err) return reject(err);
            resolve(products);
        })
    })
}
exports.getSpecificProduct = (productId) => {
    return new Promise((resolve, reject) => {
        Products.findOne({_id: productId}, (err, product)=>{
            if(err) return reject(err);
            resolve(product);
        })
    })
}

exports.searchDocs = (searchQuery) => {
    return new Promise((resolve, reject) => {
        Products.find({$text: { $search: searchQuery}}, (err, products)=>{
            if(err) return reject(err);
            resolve(products);
        })
    })
}