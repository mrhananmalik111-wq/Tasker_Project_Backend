const express = require("express")
const router = express.Router();
const  {StatusControl,getall} =require("../Controller/status_controller")
router.post(`/`,StatusControl);
router.get("/get",getall)
module.exports=router;