import './App.css'

export default function Page1() {
    return (
        <div className='Page1'>
            <h1 className="SubHeading" align="center">
                Plan Your Dream Vacation<br></br> With Us Today!
            </h1>
            <p className="SubContent" align="center">
                Welcome to Gaman, the ultimate travel planning hub where you can find <br></br> inspiration, expert advice, and amazing travel deals. Start exploring now!
            </p>
            <div align="center">
                <button className="SignUpButton" >Sign Up</button>
            </div>
            <br></br>
            <br></br>
            <div className='ExpolreStatesDiv'>
                <h1 align="center">Explore States</h1>
                <div className='States'>
                    <div className='Delhi'>
                    </div>
                    <div className='Jaipur'>
                    </div>
                    <div className='Kashmir'>
                    </div>
                    <div className='UttarPradesh'>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='SeasonalHotspotsDiv'>
                <h1 align="center">Seasonal Hotspots</h1>
                <div className='States'>
                    <div className='Manipur'>
                    </div>
                    <div className='Himachal'>
                    </div>
                    <div className='Kerala'>
                    </div>
                    <div className='MadhyaPradesh'>
                    </div>
                </div>
            </div>
        </div>
    )
}