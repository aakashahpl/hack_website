import { useRef } from "react";
import pic from "../assets/1.png";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.png";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const eventDetails = {
  "#Hackathon":
    "Hackathon provides an opportunity for participants to develop their technical and problem-solving skills, and to work collaboratively in a team-based setting. The event can promote innovation and creativity by encouraging participants to think outside the box and develop new and unique solutions to complex problems.",
  "#Semicolon":
    "The  Semicolon  8.0  is  a  coding  competition  that  aims  to  bring  together  coders  of  all  levels  to  challenge  their  skills  and  push  their  boundaries.  The  competition  will  include  several  rounds  of  coding  challenges,  where  participants  will  have  to  solve  complex  problems using their coding skills.",
  "#Ideathon":
    "Ideathons are events where people come together to creatively solve problems, welcoming all knowledge levels and backgrounds, providing an opportunity for participants to learn something new, and providing a space and a time for participants to make headway on problems.",
};

function Image({ id, text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150);
  const opacity = useTransform(y, [100, -120], [0, 1]);

  return (
    <section className="event">
      <div ref={ref}>
        <img src={id} alt="event-logo" className="event_image" />
      </div>
      <div>
        <motion.h2 style={{ y }} className="event-content">
          {text}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          style={{ opacity }}
          className="event-info"
        >
          {eventDetails[text]}
        </motion.p>
      </div>
    </section>
  );
}

export default function Events() {
  return (
    <div className="Events-section background--custom">
      <motion.h1
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="events_section_title"
      >
        OUR EVENTS
      </motion.h1>
      <Image id={pic} text="#Hackathon" />
      <Image id={pic2} text="#Semicolon" />
      <Image id={pic3} text="#Ideathon" />
    </div>
  );
}
