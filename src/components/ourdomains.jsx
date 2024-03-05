import {useState} from "react";
import {
  motion
} from "framer-motion"


function OurDomains() {
  const [cards]=useState([
    {
      title:'Technical',
      text: 'Involves the application of specialized knowledge and skills to develop, maintain, and improve all the technical aspects of the event (ranges from web dev to to Blockchain to AI).'
    },
    {
      title:'Non-Technical',
      text:'Encompasses roles and activities that often involving areas like management, administration, and communication.'
    },
    {
      title:'Sponsorship',
      text:'Involves securing financial support from external entities for an event, project, or initiative in exchange for promotional benefits or association'
    },
    {
      title:'Publicity',
      text:'Focuses on generating attention and interest in the event through various communication channels.'
    },
    {
      title:'Public Relations',
      text:'Manages communication and relationships between an organization and its audience, including media, stakeholders, and the public, along with handling all the official documentation work.'
    },
    {
      title:'Literary',
      text:'It embodies the soul of club-related content, infusing creative writing into social media updates and covers the club essence'
    },
    {
      title:'Creatives',
      text:'Involves the generation of original ideas, designs, or spanning fields like art, graphic design, and multimedia production.'
    },
    {
      title:'Logistic Operations',
      text:'Encompasses the planning, coordination, and execution of processes to ensure the efficient flow of resources, goods, or people.'
    }
    
  ])
  return (
    <div>
      <motion.section className='domains'>
        <div className='container'>
          <h1>Our Domains</h1>
          <div className='cards'>
            <div className='card-grid'>
              {cards.map((card, i) => (
                <div key={i} className='card'>
                  <h2 className="domainhead">{card.title}</h2><br></br>
                  <p className="domaininfo">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default OurDomains;
