import './App.css'
import Navbar from './Navbar.jsx'
import Page1 from "./Page1.jsx"
import Page2 from "./Page2.jsx"
import Page3 from "./Page3.jsx"

function Homepage() {

  return (
    <div>
      <Navbar />
      <div className='Pages'>
        <Page1 />
        <br></br>
        <br></br>
        <Page2 />
        <br></br>
        <br></br>
        <Page3 />
      </div>
    </div>
  )
}

export default Homepage
