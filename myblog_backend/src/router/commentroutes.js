
const express=require("express");
const controller=require("../controller/commentcontroller")

const route=express.Router();
route.get("/:id",controller.commentdisplay)

route.post("/:id",controller.commentcreate)

module.exports=route;