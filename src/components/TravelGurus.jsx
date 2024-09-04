import "./../css/TravelGurus.css";
import Navbar from "../Navbar.jsx";
export default function TravelGurus() {
    return (
        <div>
            <Navbar/>
            <h2 align="center" className='Packages_h2'>Popular Guides</h2>
            <h1 align="center" className='Packages_h1'>Explore With Expert Guides</h1>
            <p align="center" className='Packages_p'>Unlock the secrets of your destination with our curated selection of local guides. Whether you're exploring the bustling streets of a city, the tranquil beauty of nature, or the hidden gems off the beaten path, our guides offer insider knowledge and personalized experiences tailored to your interests.</p>
            <div align="center" className='Package_div1'>
                <div className='div_part_1'>
                    <img className='Package_divs_img' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>
                </div>
                <div className='div_part_2'>
                    <h1 align="left">Meet Your Guide: Anand</h1>
                    <h2 align="left">Discover the Hidden Treasures of Delhi with Anand</h2>
                    <p align="left">Embark on an unforgettable journey through Delhi with Anand, a seasoned expert with 5 years of experience in showcasing the best this region has to offer. With a deep passion history, culture, adventure, Anand brings the stories of Delhi to life, offering you an insider's perspective that goes beyond the typical tourist experience.</p>
                </div>
                <div className='div_part_3'>
                    <div className='div_part_3_line1'>
                        <h2>25 comments</h2>
                        <img className="starrating" src="/4StarRating.png"></img>
                    </div>
                    <br></br>
                    <br></br>
                    <h2 align="center">Fees: ₹2000</h2>
                    <br></br>
                    <br></br>
                    <div align="center" className='book_now_div'>
                        <button align="center" className='book_now'>Book Now</button>
                    </div>
                </div>
            </div>
            <br></br>
            <div align="center" className='Package_div1'>
                <div className='div_part_1'>
                    <img className='Package_divs_img' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>
                </div>
                <div className='div_part_2'>
                    <h1 align="left">WINTERS HOLIDAY TO THE LAKES OF UDAIPUR</h1>
                    <h2 align="left">Udaipur, known as the "City of Lakes," is a picturesque city in Rajasthan, India. It’s famous for its serene lakes like Lake Pichola, stunning palaces such as the City Palace, and rich Rajput history. The city’s charming blend of natural beauty and architectural splendor makes it a popular tourist destination. Udaipur is also renowned for its vibrant culture, traditional crafts, and scenic boat rides, offering visitors a glimpse into the royal heritage of Rajasthan.</h2>
                </div>
                <div className='div_part_3'>
                    <div className='div_part_3_line1'>
                        <h2>20 comments</h2>
                        <img className="starrating" src="/4StarRating.png"></img>
                    </div>
                    <br></br>
                    <br></br>
                    <h2 align="center">₹25,500 /person</h2>
                    <br></br>
                    <br></br>
                    <div align="center" className='book_now_div'>
                        <button align="center" className='book_now'>Book Now</button>
                    </div>
                </div>
            </div>
            <br></br>
            <div align="center" className='Package_div1'>
                <div className='div_part_1'>
                    <img className='Package_divs_img' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>
                </div>
                <div className='div_part_2'>
                    <h1 align="left">FEEL THE BEAUTY OF LADAKH</h1>
                    <h2 align="left">Ladakh, a high-altitude desert in northern India, is renowned for its stunning landscapes, rugged mountains, and serene monasteries. Nestled between the Karakoram and Himalayas, it offers breathtaking views of snow-capped peaks, crystal-clear lakes, and vast barren expanses. Leh, the capital, is a popular base for exploring the region’s Buddhist culture, ancient monasteries like Thiksey and Hemis, and the mesmerizing Pangong Lake. Ladakh is also a haven for adventure enthusiasts, offering trekking, river rafting, and mountain biking. Its unique blend of natural beauty and cultural heritage makes it a must-visit destination.</h2>
                </div>
                <div className='div_part_3'>
                    <div className='div_part_3_line1'>
                        <h2>40 comments</h2>
                        <img className="starrating" src="/4StarRating.png"></img>
                    </div>
                    <br></br>
                    <br></br>
                    <h2 align="center">₹22,000 /person</h2>
                    <br></br>
                    <br></br>
                    <div align="center" className='book_now_div'>
                        <button align="center" className='book_now'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}