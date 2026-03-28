const CardModel = require("../models/card_model");

// Create a new card
async function CardController(req, res) {
  console.log(req.body);
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
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
}

// Get all cards
async function getall(req, res) {
  try {
    const allUser = await CardModel.find()
      .populate("Category", "_id name")
      .populate("Status", "_id name");

    res.status(200).json(allUser);

  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
}

// Get card by ID
const getCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const Task = await CardModel.findById(id)
      .populate("Category", "_id name")
      .populate("Status", "_id name");

    if (!Task) return res.status(404).json({ message: "Card not found" });

    res.status(200).json(Task);

  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};

// Update a card
async function updateTask(req, res) {
  try {
    const { id } = req.params;

    const updatedTask = await CardModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedTask) return res.status(404).json({ message: "Card not found" });

    res.status(200).json(updatedTask);

  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
}

// Get cards by category
const getCardsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const tasks = await CardModel.find({ Category: categoryId })
      .populate("Category", "_id name")
      .populate("Status", "_id name");

    res.status(200).json(tasks);

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

// Delete a card
async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    const deleted = await CardModel.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ message: "Card not found" });

    res.status(200).json({ success: true });

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  CardController,
  getall,
  updateTask,
  getCardById,
  getCardsByCategory,
  deleteTask
};