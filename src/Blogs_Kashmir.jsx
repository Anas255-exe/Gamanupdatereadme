import "./Blogs_Kashmir.css"
import Navbar from "./Navbar.jsx"
export default function Blogs_Kashmir() {
    return (
        <div>
            <Navbar />
            <div className="Portion1">
                <br></br>
                <br></br>
                <br></br>
                <h1 className="Heading" align="center">Exploring The Wonders Of Kashmir</h1>
                <div align="center" className="ByAndDate">
                    <h2>By Rahul</h2>
                    <h2>January 20 2024</h2>
                </div>
                <br></br>
                <div align="center" className="Description">
                    <h2 align="center">Join me on an unforgettable journey through the stunning city of Kashmir, where the mountains, lush landscapes, and vibrant culture converge to create a truly mesmerizing experience.</h2>
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
                    <div><h2>City</h2><h3>Kashmir</h3></div>
                    <div><h2>Coordinates</h2><h3>33.2778° N, 75.3412° E</h3></div>
                </div>
                <div>
                    <div className="ImgRow1">
                        <img className="House_Boat" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7IciPypCXpoJWeMzhDXEIZBELhkunRTijg&s"></img>
                        <img className="Garden" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f3/ed/05/as-the-spring-has-set.jpg?w=500&h=400&s=1"></img>
                    </div>
                    <div className="ImgRow2">
                        <img className="Valley" src="https://cdn.britannica.com/71/124771-004-FEE77ABA/Vale-of-Kashmir-Jammu-and-India.jpg"></img>
                        <img className="Snow" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3766/Snow%203.jpeg"></img>
                    </div>
                </div>
                <div className="RatingAndCost">
                    <div><h1>Rating</h1><img className="StarRating" src="/4StarRating.png"></img></div>
                    <div><h1>Cost</h1><h2>₹ 20,000 </h2></div>
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