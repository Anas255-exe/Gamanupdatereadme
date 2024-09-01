import "./Blogs.css"
import { Link } from "react-router-dom"
import Navbar from "./Navbar.jsx"
export default function Blogs(){
    return(
        <div>
            <Navbar />
            <div className="Blogs">
            <Link to={"/Blogs_Delhi"}><img className="Blogs_Delhi" src="./India_Gate.jpg"></img></Link>
            <img className="Blogs_Jaipur" src="https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG"></img>
            <img className="Blogs_Kashmir" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpvfpeKWGevvOQ2mb1B-RaziFse3VYN5DUw&s"></img>
            <img className="Blogs_MadhyaPradesh" src="https://cdn.budgetyourtrip.com/images/photos/headerphotos/large/india_madhyapradesh.jpg"></img>
            </div>
        </div>
    )
}