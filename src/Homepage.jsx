import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";
import Page3 from "./Page3.jsx";
import './App.css';

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="Pages">
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
