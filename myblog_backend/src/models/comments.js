
const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const commentSchema=new Schema({
    title: {
        type: String,
        required: true,
      },
      
comments:{
    type:Array
}

    }, { timestamps: true});

    const Comment=mongoose.model("Comment",commentSchema);
    module.exports=Comment;
