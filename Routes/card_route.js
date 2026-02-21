const express = require("express");
const router = express.Router();

const {
  CardController,
  getall,
  updateTask,
  getCardById,
  getCardsByCategory, 
  deleteTask
} = require("../Controller/card_controller");
router.get("/", (req, res) => {
  res.send("api is working");
});
router.post("/", CardController);
router.get("/getAll", getall);
router.get("/category/:categoryId", getCardsByCategory);
router.get("/:id", getCardById);
router.put("/:id", updateTask);
router.delete("/delete/:id", deleteTask);


module.exports = router;
