var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});


var Product = (module.exports = mongoose.model("product", productSchema));