const { Schema, SchemaTypes, model } = require("mongoose")

const SignupSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true  
    },
    contact: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // image: {
    //     type: String,
    //       default: ""
    // }
})

const Signup = model("Signup", SignupSchema)
module.exports = Signup
