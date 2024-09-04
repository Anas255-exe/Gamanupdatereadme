import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Blogs from "./components/Blogs.jsx";
import BlogDetail from './components/BlogDetail.jsx';
import Blogs_Delhi from "./Blogs_Delhi.jsx";
import Blogs_Jaipur from "./Blogs_Jaipur.jsx";
import Blogs_Kashmir from "./Blogs_Kashmir.jsx";
import Blogs_MP from "./Blogs_MP.jsx";
import Signup from "./components/signup.jsx";
import Login from "./components/login.jsx";
import TravelGurus from "./components/TravelGurus.jsx";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs_delhi" element={<Blogs_Delhi />} />
        <Route path="/blog/:title" element={<BlogDetail/>} />
        <Route path="/blogs_jaipur" element={<Blogs_Jaipur />} />
        <Route path="/blogs_kashmir" element={<Blogs_Kashmir />} />
        <Route path="/blogs_mp" element={<Blogs_MP />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/travelgurus" element={<TravelGurus />} />
      </Routes>
    </div>
  );
}
