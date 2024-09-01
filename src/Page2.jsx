// import "./App.css"
import "./css/page2.css"
export default function Page2() {
    return (
        <div>
            <h1 className="SubHeading" align="center">
                Your Travel Community Awaits. <br></br> Join Today!
            </h1>
            <p className="SubContent" align="center">
                At Gaman, we bring together three key groups to make travel planning a breeze. <br></br>Join us as a traveller, travel guru, partner agency and explore plan and share your travel <br></br> experiences.
            </p>
            <br/>
            
            <div className="Users">
                <div className="Travellers" align="center">
                    <h2>Travellers: Explore, Plan, <br></br>Share, Inspire</h2>
                    <p className="UsersContent">Discover detailed travel plans with fellow travellers.</p>
                </div>
                <div className="TravelGurus" align="center">
                    <h2>Travel Gurus: Share <br></br>Your Expert Tips</h2>
                    <p className="UsersContent">Join us as a Travel Guru and earn incentives for sharing your valuable knowledge andadvice with our community.</p>
                </div>
                <div className="PartnerAgencies" align="center">
                    <h2>Partner Agencies: Boost <br></br>Your Visibility</h2>
                    <p className="UsersContent">Connect with travellers directly by advertising your hotels, guides restraunts and more.</p>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    )
}