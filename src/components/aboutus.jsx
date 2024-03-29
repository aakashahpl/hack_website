import "../about.css"
import {
    motion
  } from "framer-motion"
function Aboutus() {
    return (
        <div className="About-section">
            <motion.div className="about_section_title" initial={{x:-200}} whileInView={{x:0}} transition={{duration:1,type:'spring'}}>ABOUT US</motion.div>
            
            <motion.div className="about_section_content" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.3,duration:1.2}} viewport={{amount:0.5}}>
                SRM Hackathon, which was earlier known as IT Association is one
                of the most active associations under School of Computing. SRM
                Hackathon aims to upskill all students and ultimately make them
                have successful careers. We work on establishing a system of
                technical and competitive practices in the college, to set up a
                healthy coding environment for the students. At SRM Hackathon,
                we aim to build and structure your tech career, for the dream
                companies worldwide based on your skills, preferences, and work
                hard with you, until we achieve your end goal together, as a
                team. We aim to provide the best platform to code, collaborate
                and have fun.
            </motion.div>
            <div className="achievement_cards">
                <div className="years_of_service">
                    <div className="experience_number">11+</div>
                    <div className="card_content">years of experience</div>
                </div>
                <div className="number_of_events">
                    <div className="experience_number">50+</div>
                    <div className="card_content">events organized</div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
