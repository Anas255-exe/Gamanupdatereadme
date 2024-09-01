import "./Blogs_MP.css"
import Navbar from "./Navbar.jsx"
export default function Blogs_MP() {
    return (
        <div>
            <Navbar />
            <div className="Portion1">
                <br></br>
                <br></br>
                <br></br>
                <h1 className="Heading" align="center">Exploring The Wonders Of Madhya Pradesh</h1>
                <div align="center" className="ByAndDate">
                    <h2>By Sukriti</h2>
                    <h2>February 10 2023</h2>
                </div>
                <br></br>
                <div align="center" className="Description">
                    <h2 align="center">Join me on an unforgettable journey through the stunning state of Madhya Pradesh, where the historical monuments, lush landscapes, and vibrant culture converge to create a truly mesmerizing experience.</h2>
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
                    <div><h2>City</h2><h3>Madhya Pradesh</h3></div>
                    <div><h2>Coordinates</h2><h3>22.9734° N, 78.6569° E</h3></div>
                </div>
                <div>
                    <div className="ImgRow1">
                        <img className="Fort" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/0102321_Maheshwar_Ghats_and_Fort%2C_Ahilya_Bai_Monuments%2C_Madhya_Pradesh_055.jpg/268px-0102321_Maheshwar_Ghats_and_Fort%2C_Ahilya_Bai_Monuments%2C_Madhya_Pradesh_055.jpg"></img>
                        <img className="Monument1" src="https://www.tourmyindia.com/states/madhyapradesh/image/mp-tourism.webp"></img>
                    </div>
                    <div className="ImgRow2">
                        <img className="Lake1" src="https://travel12go.in/wp-content/uploads/2021/08/Madhya-Pradesh-Tourism-2.webp"></img>
                        <img className="Hill" src="https://media.assettype.com/outlooktraveller%2F2024-06%2Fc058baf6-a35a-479c-965c-d4c14a154639%2FAmarkantaj.jpg"></img>
                    </div>
                </div>
                <div className="RatingAndCost">
                    <div><h1>Rating</h1><img className="StarRating" src="/4StarRating.png"></img></div>
                    <div><h1>Cost</h1><h2>₹ 15,000 </h2></div>
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