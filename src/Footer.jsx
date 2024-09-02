import './css/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="Footer">
                <div className='Footer_Content' align="left">
                    <h1>Gaman</h1>
                    <h2>Gaman- Aapka apna saathi.Think travel Think Gaman.</h2>
                    <h1>Special Thanks</h1>
                    <h2>"Special thanks to nature for creating such wonderful places."

                        "Our connecting partners and guides, our lovable tourers, local people, and our beautiful team have all contributed to creating such a great website. ❤"

                        "Anas, Mrityunjay, Nikita, Manmeet, Nishit, and Haseeb—without them, creating such a website would have been impossible. Thank you, lovely team!"❤❤❤</h2>
                </div>
                <div className='Contact_Us'>
                    <h1 align="left">Contact Us</h1>
                    <h2 align="left">Feel free to contact and reach us !!</h2>
                    <div className='Connect_Buttons'>
                        <button className='Facebook_Button'><img className="Facebook_Button_img" src="https://img.freepik.com/free-psd/social-media-logo-design_23-2151299463.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1725235200&semt=ais_hybrid"></img></button>
                        <button className='Whatsapp_Button'><img align="center" className='Whatsapp_Button_img' src="https://thumbs.dreamstime.com/b/whatsapp-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-whatsapp-logo-editorial-illustrative-white-208333080.jpg"></img></button>
                        <button className='Twitter_Button'><img className='Twitter_Button_img' src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?semt=ais_hybrid"></img></button>
                    </div>
                    <h2 align="left"><img className="Phone_Logo" src="https://img.freepik.com/premium-vector/phone-call-telephone-icon_628407-1740.jpg"></img>+91 7905335656</h2>
                    <h2 align="left"><img className='Mail_Logo' src="https://png.pngtree.com/element_our/sm/20180416/sm_5ad44c32ac169.jpg"></img>info.gaman.com</h2>
                    <h2 align="left"><img className='Location_Logo' src="https://media.istockphoto.com/id/1193451471/vector/map-pin-vector-glyph-icon.jpg?s=612x612&w=0&k=20&c=wuWVeHuthNAXzjOO5_VY9SUOd-6cxwpVH8VVfh6Y7Lc="></img>675, delhi technological university, delhi -110042</h2>
                </div>
                <div className='Subscription'>
                    <h2 align="left">Subscribe our instagram page for more interesting update & news !!</h2>
                    <br></br>
                    <br></br>
                    <input className='Email_input' placeholder='Enter Your Email'></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button className='Subscribe_Button' align="center">Subscribe</button>
                </div>
            </div>
            <div className='Footer_Bottom'>
                <h2>© 2024 Gaman_creation. All rights reserved</h2>
                <div className='Footer_Links'>
                <Link to={"/"}><h3 className='Links'>Privacy Policy</h3></Link><hr></hr>
                <Link to={"/"}><h3 className='Links'>Terms & Conditions</h3></Link><hr></hr>
                <Link to={"/"}><h3 className='Links'>FAQ</h3></Link>
                </div>
            </div>
        </footer>
    );
}
