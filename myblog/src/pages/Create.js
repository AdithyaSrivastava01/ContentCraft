import {useState} from "react"
import { useHistory } from "react-router";
const Create = () => {
const [author,setAuthor]=useState("Mario");
const [title,setTitle]=useState(" ");
const [body,setBody]=useState(" ");
const [load,setLoad]=useState(false);
const blog={title,author,body};


const history=useHistory();
    return ( 
        <div className="create">
            <h2>Create a New Blog</h2>

            <form id="form1">
                <label>Blog Title:</label>
                <input required type="text" 
                 onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea required type="text"
                onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select required type="text"
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option  value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                </select>
                
            </form>
            {!load && <button form="form1" type="submit" onClick={()=>{
                //e.preventDefault();
                setLoad(true);
                const response=async ()=>{
                   const response2=await fetch("/api/blogs",{
                        method:"POST",
                        headers:{
                            'Accept': 'application/json',
      'Content-Type': 'application/json'
                        },
                        body:JSON.stringify(blog)
                        
                    })
                const data=await response2.json()
                return data;
                }
                response().then((data)=>{
                    console.log(data)
                }).catch((err)=>{
                    console.log(err)
                })
                    
               setLoad(null);
                history.push("/");
                
                // then always takes a callback function no just parameters allowed.
            }}>Add blog</button>}
                {load && <button>Loading....</button>}
        </div>
     );
}
 
export default Create;