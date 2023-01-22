const dotenv=require("dotenv")
const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require('./config/connection')
const cors = require('cors');
const userRouter=require('./routes/userRouter')

dotenv.config()
const port=process.env.PORT

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/v1/', userRouter);

app.listen(port, () => {
    console.log("server started")
})


