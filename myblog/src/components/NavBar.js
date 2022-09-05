import {Link} from "react-router-dom";
const NavBar = () => {
    // console.log("check")
    return ( 
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' role='navigation'>
      <h1 className="pl-60 text-[#f1356d] m-6 text-3xl ">Blogs</h1>
      <div className="links">
               <Link to="/">Home</Link>
               <Link to="/create">Create</Link>
               <Link to="/about">About</Link>
               
           </div>
      
    </nav>
     );
}
 
export default NavBar;