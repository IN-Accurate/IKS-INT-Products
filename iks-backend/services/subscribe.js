const Subscribers = require("../models/subscribers");

exports.addSubscriber = (userEmail) => {
    return new Promise((resolve, reject) => {
        new Subscribers({email: userEmail}).save().then((result)=>{
            return resolve(result);
        }).catch((err)=>{
            return reject(err);
        })
    })
}