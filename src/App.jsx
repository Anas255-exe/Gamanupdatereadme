import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Homepage from "./Homepage.jsx"
import Blogs_Delhi from "./Blogs_Delhi.jsx"
import Blogs from "./Blogs.jsx"
import Blogs_Jaipur from "./Blogs_Jaipur.jsx"
import Blogs_Kashmir from "./Blogs_Kashmir.jsx"
import Blogs_MP from "./Blogs_MP.jsx"
export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs_delhi" element={<Blogs_Delhi />}/>
                <Route path="/blogs_jaipur" element={<Blogs_Jaipur />} />
                <Route path="/blogs_kashmir" element={<Blogs_Kashmir />} />
                <Route path="/blogs_mp" element={<Blogs_MP />} />
            </Routes>
        </div>
    )
}