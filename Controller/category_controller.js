
const Category = require("../models/category_model")
async function CategoryControl(req, res) {
    try {
        const {name , colors } = req.body;
        if (!name || !colors) {
          return res.status(400).json({ message: "Please fulfill all the required fields." });
        }
        const Data = await  Category.create({ name , colors });
        res.json({
            message: "Category created successfully",
            data: Data
        });
    } catch (e) {
        console.log(e.message)
        res.json({ Error: e.message })
    }
};

async function getall(req,res) {
    try {
         const allcategories = await Category.find()
         res.status(200).json(allcategories)
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}




module.exports={CategoryControl,getall}