import navicon from '../assets/bars.png'
import { VscChromeClose } from "react-icons/vsc";
function Navbar(){
    function navclick(){
    
        let navicon = document.querySelector(".navicon");
        let navbarlist = document.querySelector(".bar-nav-links");
        navicon.classList.add("hide");
        navbarlist.classList.remove("hide");
    }

    function navclose(){
        let navicon = document.querySelector(".navicon");
        let navbarlist = document.querySelector(".bar-nav-links");
        navicon.classList.remove("hide");
        navbarlist.classList.add("hide");
    }
    
    function about_scroll(){
        document.querySelector('.About-section').scrollIntoView();
        navclose()
    }

    function event_scroll(){
        document.querySelector('.Events-section').scrollIntoView();
        navclose()
    }

    function footer_scroll(){
        document.querySelector('.footer-container').scrollIntoView();
        navclose()
    }

    function domain_scroll() {
        document.querySelector('.domains').scrollIntoView();
        navclose()
    }

    return (
        <div className="navbar">
            <div className="logo-and-name">TEAM SRM HACKATHON</div>
            <img src={navicon} className="navicon" alt='navigation bars' height='30px' onClick={navclick}/>
            <div className='bar-nav-links hide'>
                <button className='closenav' onClick={navclose}><VscChromeClose size={16} /></button>
                <div className="aboutus-link" onClick={about_scroll}>ABOUT US</div>
                <div className="events-link" onClick={event_scroll}>OUR EVENTS</div>
                <div className="team-link" onClick={domain_scroll}>OUR DOMAINS</div>
                <div className="contact-link" onClick={footer_scroll}>CONTACT US</div>    
            </div>
            
            <div className="section-links">
                <div className="aboutus-link" onClick={about_scroll}>ABOUT US</div>
                <div className="events-link" onClick={event_scroll}>OUR EVENTS</div>
                <div className="team-link" onClick={domain_scroll}>OUR DOMAINS</div>
                <div className="contact-link" onClick={footer_scroll}>CONTACT US</div>                
            </div>  
        </div>
    )
}
export default Navbar;

