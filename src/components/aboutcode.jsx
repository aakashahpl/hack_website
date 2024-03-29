import "../about.css"
import {
    motion
  } from "framer-motion"
import image from "../assets/hack_laptop.png"
 
function Aboutcode(){
   return( 
    <div className="About-section">
        <motion.div className="about_section_title" initial={{x:-200}} whileInView={{x:0}} transition={{duration:1,type:'spring'}}>Our_workflow.jsx</motion.div>
        {/* <img alt="code" src={image} class="codeimg" /> */}
        <div className="aboutcode_image"></div>
    </div>)
}

export default Aboutcode;