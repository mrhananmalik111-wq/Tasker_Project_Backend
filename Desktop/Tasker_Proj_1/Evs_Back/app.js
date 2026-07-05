const express = require('express')
const cors = require("cors");
const CardModel = require("./models/card_model")
const app = express()

const createCard = require("./Routes/card_route");
const signupROUTER = require("./Routes/signup_route")
const loginROUTER = require("./Routes/login_route")
const categoryROUTER = require("./Routes/category_router")
const statusROUTER = require("./Routes/status_route")

require("dotenv").config();
const connecting = require("./common/connect")

const port = process.env.PORT || 3300;

// Middleware
app.use(express.json())
app.use(cors())
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/v1/createCard", createCard);
app.use("/api/v1/user", signupROUTER)
app.use("/api/v1/login", loginROUTER)
app.use("/api/v1/category", categoryROUTER)
app.use("/api/v1/status", statusROUTER)

// ============== FIXED GET ROUTES ==============

// For Navbar
app.get("/api/v1/tasks/get", async (req, res) => {
  try {
    const tasks = await CardModel.find({});
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// For AllTasks & Fetch_Data
app.get("/api/v1/createCard/getAll", async (req, res) => {
  try {
    const cards = await CardModel.find({});
    res.status(200).json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Get single task
app.get("/api/v1/task/:id", async (req, res) => {
  try {
    const task = await CardModel.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error("Error fetching task:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Update task
app.put("/api/v1/task/:id", async (req, res) => {
  try {
    const { Title, DueDate, DueTime, Description, Progress, Status, Category } = req.body;
    const updatedTask = await CardModel.findByIdAndUpdate(
      req.params.id,
      { Title, DueDate, DueTime, Description, Progress, Status, Category },
      { new: true, runValidators: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task updated successfully", data: updatedTask });
  } catch (error) {
    console.error("Error updating task:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Delete task
app.delete("/api/v1/task/:id", async (req, res) => {
  try {
    const deletedTask = await CardModel.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Create form route
app.post("/creatform", async (req, res) => {
  try {
    const { Title, DueDate, DueTime, Description, Progress, Status, Category } = req.body;
    if (!Title || !DueDate || !DueTime || !Description || !Progress || !Status || !Category) {
      return res.status(400).json({ message: "Please fulfill all the required fields." });
    }
    const Data = await CardModel.create({ Title, DueDate, DueTime, Description, Progress, Status, Category });
    res.status(201).json({
      message: "Card created successfully",
      data: Data
    });
  } catch (e) {
    console.log(e.message)
    res.status(500).json({ Error: e.message })
  }
})

// Home route
app.get('/', (req, res) => {
  res.send('Running Successfully!')
})

// ============== VERCEL EXPORT ==============
module.exports = app;

// ============== LOCAL DEVELOPMENT ==============
if (require.main === module) {
  async function startServer() {
    try {
      await connecting();
      app.listen(port, () => {
        console.log(`✅ Server running on port ${port}`);
      });
    } catch (error) {
      console.error("❌ Failed to start server:", error.message);
      process.exit(1);
    }
  }
  startServer();
}