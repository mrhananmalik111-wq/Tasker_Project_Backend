
const Status = require("../models/status_model")
async function StatusControl(req, res) {
    try {
        const {name , icon } = req.body;
        if (!name || !icon) {
          return res.status(400).json({ message: "Please fulfill all the required fields." });
        }
        const Data = await  Status.create({ name , icon });
        res.json({
            message: "Category created successfully",
            data: Data
        });
    } catch (e) {
        console.log(e.message)
        res.json({ Error: e.message })
    }
};

async function getall(req,res) {
    try {
         const allStatus = await Status.find()
         res.status(200).json(allStatus)
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}

module.exports={StatusControl,getall}