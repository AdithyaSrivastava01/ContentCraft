import { useParams } from "react-router";
import useFetch from "../useFetch.js";
import { useHistory } from "react-router";
import CommentList from "../components/CommentList"
import CommentCreate from "../components/CommentCreate"


const ArticleDetails = () => {
    const {id}=useParams();//the parameter comes from the app.js and then we fetch it.
    const history=useHistory();
    

const{data:blog,load,error}=useFetch("/api/blogs/"+id);


    return ( 
        
        <div>
           
{error && <div>{error}</div>}
{load && <div>Loading...</div>}
{blog && <div className="details">
<h2>{blog.title}</h2>
<p><em>Written by {blog.author}</em></p>
<article>
   {blog.body}
   
</article>

<span className="cursor-pointer" onClick={()=>{
                
                const response=async ()=>{
                const raw=await fetch("/api/blogs/"+id,{
                    method:"DELETE"})}
                
           response();
            history.push("/");
           
            }}>Delete</span>
<div>
   <CommentCreate name={blog.title} id={id}></CommentCreate>
   </div>
            <div>
    <CommentList  id={id} ></CommentList>
    </div>
   </div>}
  
    
        </div>
    );
}
 
export default ArticleDetails;