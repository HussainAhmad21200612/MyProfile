import React from 'react'
import Section from './common/Section'
import dsa from '../images/dsa.png'
import web from '../images/web.png'


const Services = () => {
    const projects = [
        {
            id: 1,
            image: dsa,
            title: 'Data Structures',
        },
        {
            id: 2,
            image: web,
            title: 'Web Development',
        }

    ]
  return (
      <Section id="services" title="Experience" emoji="🚀"
          sub="Here are the services that I have worked upon and I provide.You can also connect with me by directly sending me email." >
          
          <div className='grid gap-10 lg:grid-cols-2'>
              {
                    projects.map(({ id, image, title,style }) => {
                        return (
                            <div key={id} className='flex flex-col justify-center items-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
                                <img src={image} alt={title} className="md:w-64 md:h-44 object-contain" />
                                <h4 className='text-base mt-5'>{title}</h4>
                            </div>
                        )
                    })
              }
          </div>
        </Section>      
      
  )
}

export default Services