
const mongoose = require('mongoose');
const dotenv=require("dotenv")


dotenv.config()
const mongooseConnect = process.env.MONGO_CONNECTION_ID;


mongoose.connect(mongooseConnect, (err) => {
    if (err)
        return console.log("mongodb connection error", err)
    console.log("database connected");
})


module.exports= mongoose