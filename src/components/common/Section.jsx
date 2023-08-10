import React from 'react'

const Section = ({title,emoji,sub,children,id}) => {
  return (
    <section id={id} className='min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center'>
      <h3 className='py-3 text-3xl lg:text-5xl'>{title}{emoji }</h3>
          <p className='max-w-xl font-light text-gray-500 mb-10 text-lg lg:text-xl'>{sub}</p>
          {children}
          </section>
  )
}

export default Section