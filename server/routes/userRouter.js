const express = require('express')
const router = express.Router()
const blogController=require('../controller/blogController')

router.get('/', blogController.getAllBlog);
router.post('/', blogController.createBlog);
router.get('/blog/:id',blogController.findBlog)


module.exports=router