import "./Blogs_Jaipur.css"
import Navbar from "./Navbar.jsx"
export default function Blogs_Jaipur() {
    return (
        <div>
            <Navbar />
            <div className="Portion1">
                <br></br>
                <br></br>
                <br></br>
                <h1 className="Heading" align="center">Exploring The Wonders Of Jaipur</h1>
                <div align="center" className="ByAndDate">
                    <h2>By Nikhil</h2>
                    <h2>July 1 2024</h2>
                </div>
                <br></br>
                <div align="center" className="Description">
                    <h2 align="center">Join me on an unforgettable journey through the stunning city of Jaipur, where ancient forts, lush landscapes, and vibrant culture converge to create a truly mesmerizing experience.</h2>
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
                    <div><h2>City</h2><h3>Jaipur</h3></div>
                    <div><h2>Coordinates</h2><h3>26.9124° N, 75.7873° E</h3></div>
                </div>
                <div>
                    <div className="ImgRow1">
                        <img className="Hawa_Mahal" src="https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG"></img>
                        <img className="Market" src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68025-Jaipur.jpg"></img>
                    </div>
                    <div className="ImgRow2">
                        <img className="Fort1" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=600&h=-1&s=1"></img>
                        <img className="Lake" src="https://miro.medium.com/v2/resize:fit:630/1*kF1syWA9TfXpbBgBsK4b5w.jpeg"></img>
                    </div>
                </div>
                <div className="RatingAndCost">
                    <div><h1>Rating</h1><img className="StarRating" src="/4StarRating.png"></img></div>
                    <div><h1>Cost</h1><h2>₹ 6,000 </h2></div>
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