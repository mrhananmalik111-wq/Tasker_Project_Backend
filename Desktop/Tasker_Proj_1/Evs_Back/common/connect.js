const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
async function connecting() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully");
  } catch (e) {
    console.log(e.message);
    process.exit(1); // crash properly instead of hanging
  }
}

module.exports = connecting;