import './App.css'
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div>
            <nav className='Navbar'>
                <div className='Headings'>
                    <Link to={"/"}><div className='Name'>Gaman</div></Link>
                    <div className='HeadingButtons'>Explore More</div>
                    <div className='HeadingButtons'>Plan Now</div>
                    <div className='HeadingButtons'>Share Tips</div>
                    <div className='HeadingButtons'>Discover</div>
                    <Link to={"/blogs"}><div className='HeadingButtons'>Blogs</div></Link>
                </div>
                <div>
                    <button className="SignUpButton">Sign Up</button>
                </div>
            </nav>
            <hr></hr>
        </div>
    )
}