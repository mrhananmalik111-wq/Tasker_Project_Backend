const {Schema,SchemaTypes,model} = require("mongoose")
const StatusSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  icon:{
    type:String,
    required:true
  }
});

const Status = model('Status', StatusSchema);
module.exports = Status;