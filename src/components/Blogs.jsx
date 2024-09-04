import "./../css/Blogs.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
export default function Blogs() {
  return (
    <div>
      <Navbar />
      <div className="Blogs">
        <Link to={"/Blogs_Delhi"}>
          <img className="Blogs_Delhi" src="https://thumbs.dreamstime.com/b/india-gate-delhi-india-15161427.jpg"></img>
        </Link>
        <Link to={"/Blogs_Jaipur"}>
          <img
            className="Blogs_Jaipur"
            src="https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG"
          ></img>
        </Link>
        <Link to={"/Blogs_Kashmir"}>
          <img
            className="Blogs_Kashmir"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpvfpeKWGevvOQ2mb1B-RaziFse3VYN5DUw&s"
          ></img>
        </Link>
        <Link to={"/Blogs_MP"}>
          <img
            className="Blogs_MadhyaPradesh"
            src="https://cdn.budgetyourtrip.com/images/photos/headerphotos/large/india_madhyapradesh.jpg"
          ></img>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
