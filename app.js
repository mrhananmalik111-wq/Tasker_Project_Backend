
const express = require('express')
const cors = require("cors");
const CardModel = require("./models/card_model")
const app = express()


const createCard = require("./Routes/card_route");
const signupROUTER = require("./Routes/signup_route")
const loginROUTER = require("./Routes/login_route")
const categoryROUTER = require("./Routes/category_router")
const statusROUTER = require("./Routes/status_route")
// const userRoutes = require("./resultroute")

require("dotenv").config();
const connecting = require("./common/connect")

const port = process.env.PORT || 3300;


app.use(express.json())
app.use(cors())
app.use("/api/v1/createCard", createCard);     
app.use("/api/v1/user",signupROUTER)
app.use("/api/v1/login",loginROUTER)
app.use("/api/v1/category",categoryROUTER)
app.use("/api/v1/status",statusROUTER)
// app.use("/api/v1/Get",getall)


app.use("/uploads", express.static("uploads"));

// app.use("/api/USER", userRoutes);


app.post("/creatform", async (req, res) => {
  try {
    const { Title, DueDate, DueTime, Description, Progress, Status,Category } = req.body;
    if (!Title || !DueDate || !DueTime || !Description || !Progress || !Status||!Category) {
      return res.status(400).json({ message: "Please fulfill all the required fields." });
    }
    const Data = await CardModel.create({ Title, DueDate, DueTime, Description, Progress, Status,Category });
    res.status(201).json({
      message: "Card created successfully",
      data: Data
    });
  } catch (e) {
    console.log(e.message)
    res.json({ Error: e.message })
  }
})


app.get('/', (req, res) => {
  res.send('Running Successfully!')
})

connecting();



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

