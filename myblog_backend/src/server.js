
const express=require("express");
const blogroutes=require("./router/blogroutes");


const commentroutes=require("./router/commentroutes")
const app=express();
const mongoose=require("mongoose");

const dbURI="mongodb+srv://adithya:adithya%4001@myblog.1n7uq.mongodb.net/myblog?retryWrites=true&w=majority"//special characters like @
//! in password and username must be replaced by their corresponding hex codes



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