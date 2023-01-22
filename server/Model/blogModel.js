const mongoose = require('mongoose');



const BlogSchema = new mongoose.Schema({
    heading: {
        type: String,
        required:true
    },
    paragraph: {
        type: String,
        required:true
    },
    imageUrl:{
        type:String 
    }

})

const blogModel = mongoose.model('blog', BlogSchema);
module.exports=blogModel