import "./css/App.css";
import Carousel from "./components/Carousel.jsx";

const images = [
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpR_mbwG8e2smECzOyo5PY39hkS4PTlCSXQ&s"
];

export default function Page1() {
  return (
    <div className="Page1">
      <h1 className="SubHeading" align="center">
        Plan Your Dream Vacation<br></br> With Us Today!
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
