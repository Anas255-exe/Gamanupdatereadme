import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Homepage from "./Homepage.jsx"
import Blogs_Delhi from "./Blogs_Delhi.jsx"
import Blogs from "./Blogs.jsx"
export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs_delhi" element={<Blogs_Delhi />}/>
            </Routes>
        </div>
    )
}