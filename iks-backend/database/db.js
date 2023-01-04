var mongoose = require("mongoose");

exports.connect = ()=>{
  // Connect with mongodb instance 
    mongoose.connect(process.env.MONGO_URI,(err)=>{
      if(err) throw new Error("Error connecting to database");
      console.log("mongoose connected");
    }); 
}