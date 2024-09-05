import "./css/App.css";
import Carousel from "./components/Carousel.jsx";
// import TravelSlider from "./components/TravelSlider.jsx";
const images = [
  "https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg",
  "https://images.pexels.com/photos/1260801/pexels-photo-1260801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/434334/pexels-photo-434334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

];

export default function Page1() {
  return (
    <div className="Page1">
      <br></br>
      <h1 className="SubHeading" align="center">
        Plan Your Travel in a Minute<br></br> With Us Today!
      </h1>
      <p className="SubContent" align="center">
        Welcome to Gaman, the ultimate travel planning hub where you can find{" "}
        <br/> inspiration, expert advice, and amazing travel deals. Start
        exploring now!
      </p>
      <br/>
      <Carousel images={images} interval={5000} />
 

    </div>
  );
}
