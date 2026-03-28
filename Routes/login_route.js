const express = require("express")
const router = express.Router()
const loginROUTER = require("../Controller/login_controller")
router.post("/login",loginROUTER)
module.exports=router