import hacklogo from "../assets/hacklogo.png"
import { motion } from "framer-motion"
function Home(){
           return (
               <div className="home">
                   <motion.img className="hack-home-logo" initial = {{opacity:0,rotateY:90}} animate = {{opacity:1, rotateY:0}} transition={{ease:"linear", duration:3}} src={hacklogo} alt="hack-logo"/>
                   <motion.div initial={{opacity:0,}} animate={{opacity:1}} transition={{duration:3.5,delay:2}} className="home-quote"> <div className="home-quote-top">BUILDING THE FUTURE </div><div className="home-quote-bottom">BIT BY BIT</div></motion.div>
               </div>
           )
}

export default Home;