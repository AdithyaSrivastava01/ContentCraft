import {useState} from "react"
import { useHistory } from "react-router";

const CommentCreate = (props) => {
const id=props.id;
const titleblog=props.name;
//const title=props.title;
const url=`/api/blogs/comment/${id}/`
const [username,setUser]=useState(" ");
const [text,setText]=useState(" ");
const [load,setLoad]=useState(false);
const data={title:titleblog,comments:{username,text}};
const history=useHistory();


    return ( 
        <div className="create">
            <h2>Add a Comment</h2>

            <form onSubmit={(e)=>{
                //e.preventDefault();
                setLoad(true);
                fetch(url,{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(data)
                    
                }
                ).then(()=>{
                    console.log("added");
                    setLoad(false);

                }).catch((err)=>{
                    console.log(err.message);
                });
                history.push("/blogs/"+id);
            }}>
                <label>UserName:</label>
                <input required type="text" 
                 onChange={(e)=>setUser(e.target.value)}/>
                <label>Comment:</label>
                <input required type="text" 
                 onChange={(e)=>setText(e.target.value)}/>
                
                {!load && <button>Add Comment</button>}
                {load && <button>Loading....</button>}
            </form>
        </div>
     );
}
 
export default CommentCreate;