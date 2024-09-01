import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Blogs from "./components/Blogs.jsx";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}
