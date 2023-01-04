var mongoose = require("mongoose");

var subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});


var Subscriber = (module.exports = mongoose.model("subscribers", subscriberSchema));