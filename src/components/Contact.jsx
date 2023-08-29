import React from 'react'
import Section from './common/Section'
import { FaGithub,FaLinkedin,FaInstagram,FaTwitter } from 'react-icons/fa'

const Contact = () => {
    const links = [
        {
            id: 1,
            url: "https://github.com/hussainahmad21200612",
            icon: <FaGithub/>
        },
        {
            id: 2,
            url: "https://www.linkedin.com/in/hussainahmad6092/",
            icon: <FaLinkedin />
        },
        {
            id: 3,
            url: "https://twitter.com/yephussainhere",
            icon: <FaTwitter />
        },
        {
            id: 4,
            url: "https://www.instagram.com/yuphussainishere/",
            icon: <FaInstagram />
        },

    ]
  return (
      <Section title="Contact" emoji="📞" sub="I am open to any kind of opportunities. If you have any project idea or want to collaborate with me, feel free to reach out to me. I would love to have a feedback from you.">
          <div className='flex flex-col items-center justify-center gap-8 text-center'>
              
              <div className='flex w-full items-center justify-evenly m-5 gap-8 text-center'>
                  {
                      links.map(({ id, url, icon }) => {
                          return <a href={url} id={id} className='cursor-pointer md:text-3xl text-2xl duration-300 hover:text-cyan-500 hover:scale-150 ease-in-out m-5' target="_blank" rel="noopener noreferrer">{icon}</a>
                          
                      })
                  }
              </div>
              
              <div class>
                  
              </div>
              </div> 
              <div className="max-w-3xl flex px-20 shadow-lg shadow-gray-300 rounded-2xl overflow-hidden ease-in-out duration-300 mt-10 ">
            
              {/* <img src={mobile} alt="contact-me" className="mt-28 mx-4 w-96 h-96" /> */}
            <div className='w-40 md:w-full text-left my-10 '>
                      <form action='https://getform.io/f/f387da72-1127-4ddd-81a7-b30fe4cdda5e' method='POST'>
                          <div className='gap-4 w-full '>
                              <div className="flex flex-col">
                                  <label htmlFor="name" className='capitalize text-sm py-2 font-extralight'>Name</label>
                                  <input type="text" name="name" id="name" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' required/>
                          </div>
                          <div className="flex flex-col my-2">
                                  <label htmlFor="phone" className='capitalize text-sm py-2 font-extralight'>Phone</label>
                                  <input type="number" name="phone" id="phone" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                          </div>
                          <div className="flex flex-col">
                                  <label htmlFor="email" className='capitalize text-sm py-2 font-extralight'>Email</label>
                                  <input type="email" name="email" id="email" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' required />
                          </div>
                          <div className="flex flex-col my-2">
                                  <label htmlFor="msg" className='capitalize text-sm py-2 font-extralight'>Message</label>
                                  <textarea name="msg" id='msg' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none' rows="5" required/>
                          </div>
                          <div className="flex justify-center items-center">
                                <button type="submit" className="my-8 bg-gradient-to-r from-cyan-500 to-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">Send Me</button>
                          </div>
                          </div>
                          

                          
                      </form>
                
            </div>
          </div>
               
      
      
      </Section>
  )
}

export default Contact
