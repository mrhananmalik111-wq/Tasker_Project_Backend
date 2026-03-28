const mongoose = require("mongoose")
async function connecting() {
    try {
        await mongoose.connect(process.env.URI)
        console.log("Data Base Connected Successfully")
    } catch (e) {
        console.log(e.message)
    }
}
module.exports=connecting;