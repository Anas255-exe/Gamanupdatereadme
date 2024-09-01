import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer-Content">
                <div className="Footer-Links">
                    <h3>Explore</h3>
                    <ul>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>
                <div className="Footer-Social">
                    <h3>Connect With Us</h3>
                    <ul className="Social-Icons">
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
                <div className="Footer-Signup">
                    <h3>Join Our Newsletter</h3>
                    <p>Get the latest travel tips, guides, and exclusive deals directly to your inbox.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" className="EmailInput" />
                        <button type="submit" className="SubscribeButton">Subscribe</button>
                    </form>
                </div>
            </div>
            <hr />
            <div className="Footer-Bottom">
                <p>&copy; 2024 Gaman. All rights reserved.</p>
            </div>
        </footer>
    );
}
