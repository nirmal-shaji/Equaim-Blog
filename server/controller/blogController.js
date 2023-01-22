
const blogModel = require('../model/blogModel');




module.exports = {
    createBlog: async (req, res) => {
        console.log("reaching herer")
        const { imageUrl, paragraph, heading } = req.body;
        try {
            if (paragraph && heading) {
            await blogModel.create(req.body);
            return res.status(200).json("sucess");
        }
        return res.status(400).json('field missing')  
        } catch (error) {
            console.log(error)
            return res.status(500).json('internal server error');
        }
      
    },
    getAllBlog: async (req, res) => {
        try {
            const data=await blogModel.find({}).lean();
            res.status(200).json(data);
        } catch (error) {
            console.log(error)
            return res.status(500).json('internal server error');
        }
    },
    findBlog: async (req, res) => {
        const id = req.params.id;
        try {
            if (id) {
                const data = await blogModel.findOne({ _id: id });
                return res.status(200).json(data)
        }  
        } catch (error) {
            console.log(error);
            return res.status(500).json('internal server error');
        }
      
    }
}