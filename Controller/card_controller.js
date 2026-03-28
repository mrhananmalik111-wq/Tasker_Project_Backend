const CardModel = require("../models/card_model")
async function CardController(req, res) {
  console.log(req.body)
    try {
        const { Title, DueDate, DueTime, Description, Progress, Status,Category } = req.body;
        if (!Title || !DueDate || !DueTime || !Description || !Progress || !Status ||!Category) {
          return res.status(400).json({ message: "Please fulfill all the required fields." });
        }
        const Data = await CardModel.create({Title, DueDate, DueTime, Description, Progress, Status, Category });
        res.json({
            message: "Card created successfully",
            data: Data
        });
    } catch (e) {
        console.log(e.message)
        res.json({ Error: e.message })
    }
}


async function getall(req,res) {
    try {
         const allUser = await CardModel.find().populate("Category").populate("Status")
         res.status(200).json(allUser)
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}


const getCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const Tasks = await CardModel.findById(id).populate("Category").populate("Status");
    res.status(200).json(Tasks);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


async function updateTask(req, res) {
  try {
    const { id } = req.params; // frontend se task id aayegi
    const updatedTask = await  CardModel.findByIdAndUpdate(id, req.body, {
      new: true,  // updated document return kare
    });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}


const getCardsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params; // URL se categoryId uthayenge
    const tasks = await CardModel.find({ Category: categoryId })
      .populate("Category")
      .populate("Status");

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


async function deleteTask(req,res) {
    try {
        const id = req.params.id
        await CardModel.findByIdAndDelete(id)
         res.status(200).json({ success: true })
    } catch (err) {
        res.status(500).json({
            error:err.message
        })
    }
}

module.exports={CardController,getall,updateTask,getCardById,getCardsByCategory,deleteTask}



