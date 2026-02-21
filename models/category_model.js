const {Schema,ScehmaTypes,model} = require("mongoose")

const  CategorySchema = new Schema({
   
    name:{
        type:String,
        required:true
    },
    
    
colors:{
        type:String,
        required:true
    }
})

const Category = model("Category", CategorySchema)
module.exports = Category;