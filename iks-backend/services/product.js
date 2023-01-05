const Products = require('../models/products');

exports.getAllProducts = () => {
    return new Promise((resolve, reject) => {
        Products.find({}, (err, products)=>{
            if(err) return reject(err);
            resolve(products);
        })
    })
}
exports.getSpecificProduct = (productName) => {
    return new Promise((resolve, reject) => {
        Products.findOne({name: productName}, (err, product)=>{
            if(err) return reject(err);
            resolve(product);
        })
    })
}