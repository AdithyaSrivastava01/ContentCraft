import useFetch from "../useFetch.js";
import ArticleList from "../components/ArticleList.js";
const Home = () => {
    const {data:blogs,load,error}=useFetch("/api/blogs");
    return ( 
        <div>
            
        {load && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {/* {error} derefrence the error message. */}
        {blogs && <ArticleList blog={blogs} title={"My Blogs"} ></ArticleList>}
        </div>
     );
}
 
export default Home;