var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required:true
    }
});

productSchema.index({name: 'text'});

var Product = (module.exports = mongoose.model("product", productSchema));