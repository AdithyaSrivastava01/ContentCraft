import useFetch from "../useFetch.js";
const CommentList = (props) => {
    const id=props.id;
    const url=`/api/blogs/comment/${id}/`;
    const{data:comments,load2,error2}=useFetch(url);
    console.log(comments);
const index=props.id;
    return ( 

<div>
{comments && <div>
    <h1>Comment Section</h1>
    {console.log(comments.comments)}
    
    {comments.comments.map((commentss)=>{
       return(            <div key={index}>
    <h4 className='text-xl font-bold'>{commentss.username}</h4>
              <p className='mt-1 mb-4'>{commentss.text}</p>
            </div>
       );
        
    })}
    </div>
    }
    </div>
    // conditional printing is neccessary as at an initial fetch the comments are null and map 
    //doesnt operates on null hence we need conditional printing.
     );
}
 
export default CommentList;