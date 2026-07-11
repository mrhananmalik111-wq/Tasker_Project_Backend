const mongoose = require('mongoose');

const connecting = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");
    console.log("📡 Using MONGO_URI:", process.env.MONGO_URI ? "Set" : "Not Set");
    
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 60000,    // 60 seconds
      socketTimeoutMS: 60000,
      connectTimeoutMS: 60000,
      family: 4,
      heartbeatFrequencyMS: 15000,
      maxPoolSize: 10,
      // Yeh options add karo
      retryWrites: true,
      retryReads: true,
    });
    
    console.log("✅ MongoDB Connected Successfully!");
    console.log("📊 Database Name:", mongoose.connection.db.databaseName);
    
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    console.error("📝 Full Error:", error);
    throw error;
  }
};

module.exports = connecting;