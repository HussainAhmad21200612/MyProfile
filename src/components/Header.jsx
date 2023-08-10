import React from 'react'
import {MdNightsStay,MdWbSunny } from "react-icons/md";
import my_pfp from '../images/mypfp.png'
const Header = ({darkMode,setDarkMode}) => {
  return (
      <header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
          <nav className='flex py-8 px-5  justify-between '>
              <img src={my_pfp} alt="hussain_img" className='text-2 w-14 h-14 lg:w-12 lg:h-12 rounded-[100%] object-cover object-top bg-gradient-to-b from-cyan-500'/>
              <div onClick={() => {
                  setDarkMode(!darkMode)
              }}>
                  {
                      darkMode ?
                          (
                              <MdWbSunny className='text-5xl lg:text-2xl cursor-pointer' />
                              
                          ) :
                          (
                              <MdNightsStay className='text-5xl lg:text-2xl cursor-pointer' />
                          )
                  }
                    
              </div>
          </nav>
          
    </header>
  )
}

export default Header