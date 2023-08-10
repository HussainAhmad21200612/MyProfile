import React from 'react'
import Section from './common/Section'

const Footer = () => {
  return (
      <Section className='min-h-fit flex flex-col justify-start items-start text-center py-16 px-5'>
          <p className='max-w-xlfont-light text-gray-500 mb-10 text-2xl'>
              © 2022 <a href="https://github.com/hussainahmad21200612" target="_blank" rel="noopener noreferrer" className='hover:text-gray-900 dark:hover:text-cyan-500'>Hussain Ahmad</a> All Rights Reserved
          </p>
    </Section>
  )
}

export default Footer