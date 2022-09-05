
const Comment=require("../models/comments")
const Blog=require("../models/blogs")


const commentdisplay=async (req,res)=>{
    try{
        const blogid=req.params.id;
        //console.log(blogid);
        const blog=await Blog.findOne({ _id: blogid});
        //console.log(blog);
        const name=blog.title;
        const commentname=await Comment.findOne({title:name});
res.status(200).json(commentname);


    }
    catch(err){
        res.status(500).json({ message: "Error Sending", err});

    }
}

const commentcreate=async (req,res)=>{
    
        const blogid=req.params.id;
        const blog=await Blog.findOne({_id:blogid})
        //const id=blog.id;
        const name=blog.title;
        console.log(req.body);
        const {username,text}=req.body.comments;
        console.log(req.body);
        const commentInfo=await Comment.findOne({title:name});
        console.log(commentInfo);
        if(commentInfo){await Comment.updateOne(

            
            { title:name },
            {
              $set: {
                comments: commentInfo.comments.concat({ username, text }),
              },
            }
        )
        res.status(200).json({ message: "success"});
        console.log("in check if");
    }
        
    else{
        const commentFirst=new Comment(req.body);
        commentFirst.save().then((result)=>{
res.status(200).json({"message":"success"});
console.log("in check else");
        }).catch((err)=>{
            res.status(500).json({ message: "Error Sending", err});

        })

    }
        
            
        

        
       
}
module.exports={
    commentdisplay:commentdisplay,
    commentcreate:commentcreate

}



