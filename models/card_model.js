const {Schema,ScehmaTypes,model, SchemaTypes} = require("mongoose")
const CardSchema = new Schema ({
  Title :{
    type:String,
    required:true
  },
   DueDate :{
    type:String,
    required:true
  },
   DueTime :{
    type:String,
    required:true
  },
   Description :{
    type:String,
    required:true
  },
   Progress :{
    type:String,
    required:true
  },
   Status :{
    type: SchemaTypes.ObjectId,
    ref : "Status",
    required:true
  },
  
   Category :{
    type: SchemaTypes.ObjectId,
    ref : "Category",
    required:true
  }

})
const Card = model('Card', CardSchema)

module.exports=Card;
