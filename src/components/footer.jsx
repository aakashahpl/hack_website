import logo from "../assets/hacklogo.png"
import mail from "../assets/mail.png"
import phone from "../assets/phone.png"
import insta from "../assets/insta.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import github from "../assets/github.png"

function Footer(){
    return (
        <div className="footer-container">
            <div className="logo-section"><img src={logo} alt="hack-logo" className="footer-logo" height="100px"/><div className="copyright">All rights reserved @TeamSRMhackathon</div></div>
            <div className="contact-section">
                <h2 className="footer-head">CONTACT:</h2>
                <div className="mail-logo"> <img src={mail} alt="mail-icon" className="mail logo" height="50px"/><span>srmhackathon5@gmail.com</span>  </div>
                <div className="phone-logo"> <img src={phone} alt="phone-icon" className="phone logo" height="50px"/><span>9014814181</span></div>
                </div>
            <div className="follow-section">
                <h2 className="footer-head">FOLLOW US:</h2>
                <div className="social-media-links">
                <a className="insta-logo" href="https://www.instagram.com/srm_hackathon"> <img src={insta} alt="insta-icon" className="insta logo" height="50px"/></a>
                <a className="linkedin-logo" href="https://www.linkedin.com/company/srmhackathon/" > <img src={linkedin} alt="linkedin-icon" className="linkedin logo" height="50px"/></a>
                <div className="twitter-logo"> <img src={twitter} alt="twitter-icon" className="twitter logo" height="50px"/></div>
                <div className="github-logo"> <img src={github} alt="github-icon" className="github logo" height="50px"/></div>
                </div>
                </div>
        </div>
    )
     
}

export default Footer;