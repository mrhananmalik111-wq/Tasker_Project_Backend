const express = require("express")
const router = express.Router();
const  {CategoryControl,getall} =require("../Controller/category_controller")

router.get("/" , (req , res) => {
    res.send("category is working")
})

router.post(`/`,CategoryControl);
router.get("/Get",getall)
module.exports=router;