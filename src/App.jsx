import { Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage.jsx";
import Blogs from "./Blogs.jsx";

import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}
