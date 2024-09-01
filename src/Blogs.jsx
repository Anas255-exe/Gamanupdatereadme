import "./Blogs.css"
import { Link } from "react-router-dom"
import Navbar from "./Navbar.jsx"
export default function Blogs(){
    return(
        <div>
            <Navbar />
            <Link to={"/Blogs_Delhi"}><img className="Blogs_Delhi" src="./India_Gate.jpg"></img></Link>
            <img className="Blogs_Jaipur"></img>
        </div>
    )
}