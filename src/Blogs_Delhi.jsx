import "./Blogs_Delhi.css"
import Navbar from "./Navbar.jsx"
export default function Blogs_Delhi() {
    return (
        <div>
            <Navbar />
            <div className="Portion1">
                <br></br>
                <br></br>
                <br></br>
                <h1 className="Heading" align="center">Exploring The Wonders Of Delhi</h1>
                <div align="center" className="ByAndDate">
                    <h2>By Aman</h2>
                    <h2>August 1 2024</h2>
                </div>
                <br></br>
                <div align="center" className="Description">
                    <h2 align="center">Join me on an unforgettable journey through the stunning city of Delhi, where ancient temples, lush landscapes, and vibrant culture converge to create a truly mesmerizing experience.</h2>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className="Portion2">
                <br></br>
                <h1 className="Location">Location Details</h1>
                <br></br>
                <div className="LocationDetails">
                    <div><h2>Country</h2><h3>India</h3></div>
                    <div><h2>City</h2><h3>Delhi</h3></div>
                    <div><h2>Coordinates</h2><h3>28.7041° N, 77.1025° E</h3></div>
                </div>
                <div>
                    <div className="ImgRow1">
                        <img className="India_Gate" src="/India_Gate.jpg"></img>
                        <img className="Lotus_Temple" src="/Lotus_Temple.jpg"></img>
                    </div>
                    <div className="ImgRow2">
                        <img className="Jama_Masjid" src="/Jama_Masjid.jpg"></img>
                        <img className="Red_Fort" src="/Red_Fort.jpg"></img>
                    </div>
                </div>
                <div className="RatingAndCost">
                    <div><h1>Rating</h1><img className="StarRating" src="/4StarRating.png"></img></div>
                    <div><h1>Cost</h1><h2>₹ 5,000 </h2></div>
                </div>
                <div className="Comments">
                    <h1>Comments</h1>
                    <input type="text" placeholder="Comment" className="InputComments"></input>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}