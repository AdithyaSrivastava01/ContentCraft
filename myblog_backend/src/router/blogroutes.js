
const express=require("express");
const controller=require("../controller/blogcontroller")

const route=express.Router();
route.get("/",controller.blogdetails)
route.get("/:id",controller.blogid)

route.post("/",controller.blogcreate)

route.delete("/:id",controller.blogdelete)

module.exports=route;

