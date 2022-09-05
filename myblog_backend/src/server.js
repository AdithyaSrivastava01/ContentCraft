
const express=require("express");
const blogroutes=require("./router/blogroutes");


const commentroutes=require("./router/commentroutes")
const app=express();
const mongoose=require("mongoose");




mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((result)=>{
    console.log("connected to db");
app.listen(8000,()=>{
    console.log("listening at 8000")
});


}).catch((err)=>{
    console.log(err);
})


    

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/blogs/",blogroutes);

app.use("/api/blogs/comment/",commentroutes);

// console.log("new check");
