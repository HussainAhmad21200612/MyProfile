import React, {useState } from 'react'
import Section from './common/Section'
import { FaGithub, FaExternalLinkSquareAlt,FaStar } from 'react-icons/fa';
import p1 from "../images/p1.jpeg";
import p2 from "../images/p2.jpeg";
import p3 from "../images/p3.jpeg";
import p4 from "../images/p4.jpeg";
const Portfolio = () => {
  const [counters, setCounters] = useState([0,0,0,0,0,0]);

  const handleButtonClick = (index,isTicked) => {
    // Created a copy of the counters array to avoid directly mutating the state using spread
    const newCounters = [...counters];
    // Incrementing the counter at the specified index
    if(isTicked)
      newCounters[index] = newCounters[index] + 1;
    else
      newCounters[index] = newCounters[index] - 1;
    // Updated the state with the new counters array
    setCounters(newCounters);
  };

  const projects = [
    {
      id: 1,
      image: p1,
      title: "My Profile",
      github: "https://github.com/HussainAhmad21200612/MyProfile",
      live: "https://my-profile-beryl-chi.vercel.app/",
      
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
      id: 2,
      image: p2,
      title: "Personalized TodoApp",
      github: "https://github.com/HussainAhmad21200612/HUTECH-PERSONAL",
      live: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
      id: 3,
      image: p3,
      title: "RockVsMine",
      github: "https://github.com/HussainAhmad21200612/SONAR-ROCK-VS-MINE-OREDICTION",
      live: "https://github.com/HussainAhmad21200612/SONAR-ROCK-VS-MINE-OREDICTION",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
      id: 4,
      image: p4,
      title: "MSoft Calculator Clone",
      github: "https://github.com/HussainAhmad21200612/CLONE-MICROSOFT-CALCULATOR",
      live: "https://github.com/HussainAhmad21200612/CLONE-MICROSOFT-CALCULATOR",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    }
  ]

    
  return (
      <Section title="PORTFOLIO" emoji="👨🏻‍💻" sub="
      These are all the projects that I have build. Some of them still needs more improvisation.">
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden hover:scale-110 ease-in-out duration-300">
            
              <img src={project.image} alt={project.title} className="w-2/3" />
            <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
              <h3 className="">{project.title}</h3>
              <a href={project.github} target="_blank" rel="noreferrer" className="cursor-pointer text-2xl duration-150 hover:scale-110" onClick={
            
                () => {
                  
                  
                    handleButtonClick(project.id - 1,true);
                  
                }
              }
              ><FaGithub className='hover:text-cyan-500'/></a>
              <a href={project.live} target="_blank" rel="noreferrer" className="cursor-pointer text-2xl duration-150 hover:scale-110" ><FaExternalLinkSquareAlt className='hover:text-cyan-500' /></a>
              <FaStar id={project.id+"1"} className='text-2xl hover:scale-150 hover:cursor-pointer' onClick={
                () => {
                  const star = document.getElementById(project.id + "1");
                  
                  if (star.classList.contains('text-cyan-500')) {
                    star.classList.add('animate-spin')
                    setTimeout(() => {
                      star.classList.remove('animate-spin')
                    }, 1000);
                    star.classList.remove('text-cyan-500')
                  }
                  else {
                    star.classList.add('animate-spin')
                    setTimeout(() => {
                      star.classList.remove('animate-spin')
                    }, 1000);

                    star.classList.add('text-cyan-500')
                  }
                }
              } />
              
            </div>
          </div>
        ))}
      </div>
              
    
    </Section>
  ) 
}

export default Portfolio
