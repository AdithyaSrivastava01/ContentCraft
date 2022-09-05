import {Link} from "react-router-dom";

const ArticleList = (props) => {
   let blogs=props.blog;
   //console.log(blogs)
   let title=props.title;
    return ( 
        <div>
                    <h1 className="p-10 text-[#f1356d] m-6 text-3xl">{title}</h1>

       
        
        {blogs.map((blog)=>{
            // the map function requires a return value that will be printed in the DOM.
            const id=blog._id;
            
            // console.log(id);
            return(
            <div className="container" key={id}>
            
       <Link to={`/blogs/${id}`}>
<h2>{blog.title}</h2>
<br></br>

<span >Written by {blog.author}</span>
</Link>
   </div>) ;
        })}
        </div>
     );
}
 
export default ArticleList;