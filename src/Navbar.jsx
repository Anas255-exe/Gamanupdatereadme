import { Link } from "react-router-dom";
import './css/Navbar.css';

export default function Navbar() {
  return (
    <>
    <nav className="Navbar">
      <div className="Headings">
        <Link to="/" className="Name">Gaman</Link>
        <div className="HeadingButtons">Explore More</div>
        <div className="HeadingButtons">Plan Now</div>
        <div className="HeadingButtons">Share Tips</div>
        <div className="HeadingButtons">Discover</div>
        <Link to="/blogs" className="HeadingButtons">Blogs</Link>
      </div>
      <div className="AuthButtons">
        <button className="SignUpButton">login</button>
        <button className="SignUpButton">SignUp</button>
      </div>
    </nav>
    </>
  );
}
