
const Blog=require("../models/blogs.js");
const Comment=require("../models/comments.js");

const blogdetails=async (req,res)=>{
    try{
        const bloglist=await Blog.find().sort({createdAt:-1})
        res.status(200).json(bloglist);
    }
    
    
 catch(err){
     res.status(500).json({ message: "Error connecting to db", err});
 }
    }
const blogid=async (req,res)=>{
        try{
            const id=req.params.id;
            //console.log(id);
            const blogid=await Blog.findById(id);
            // console.log(blogid);
res.status(200).json(blogid);


        }
        catch(err){
            res.status(500).json({ message: "Error connecting to db", err});

        }
    }
const blogcreate=async (req,res)=>{
    //console.log(req.body);
    const blog=new Blog(req.body)
     blog.save().then((result)=>{
        res.status(200).json({ message: "success"});
        console.log("done");
    }).catch((err)=>{
        res.status(500).json({ message: "Error Sending", err});

    })
}

const blogdelete=async (req,res)=>{
    const id=req.params.id;
    Blog.findByIdAndDelete(id).catch((err)=>{
      console.log(err);
    })

}
module.exports={
    blogdelete:blogdelete,
    blogcreate:blogcreate,
    blogid:blogid,
    blogdetails:blogdetails

}
// const jg='{"hu":"fjfk","fjkf":"jffp"}'

