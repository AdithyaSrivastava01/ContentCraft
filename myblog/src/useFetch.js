import {useState,useEffect} from "react"

const useFetch=(url)=>{
    const [data,setData]=useState(null);  //an array of objects with initial value of null. 
    const [load,setPending]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const abort_check=new AbortController();
setTimeout(()=>
        fetch(url,{signal:abort_check.signal}).then(response=>{
            if(response.status===404){
                throw(Error("cant connect"));
            }
            return response.json();

        }).then(data => {
setData(data);
//console.log("fetch");
setPending(false);
setError(false);
        }).catch(err=>{
            if(err.name==="AbortError"){
                console.log("Aborted");
            }
            else{
                setError(err.message);
                console.log("not there");
                setData(null);
setPending(false);

            }
        }),1000);
        return ()=> abort_check.abort();
    },[url]);


    return {data,load,error};

}

export default useFetch;