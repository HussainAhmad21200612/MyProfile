import React from 'react'
import Section from './common/Section'
// import {} from 'react-icons/fa'

const Skills = () => {
    console.log(document.getElementById('sp')) //to check if the span tag is being rendered

    const skills=[
        {
            title:'Languages',
            content:[
                {id:1,
                content:'C',
                icon:"https://skillicons.dev/icons?i=c"
                },
                {id:2,
                content:'Java',
                icon:"https://skillicons.dev/icons?i=java"
                },
                {id:3,
                content:'Python',
                icon:"https://skillicons.dev/icons?i=python"
                },
                {id:4,
                content:'JavaScript',
                icon:"https://skillicons.dev/icons?i=javascript"
                },
                {id:5,
                content:'HTML',
                icon:"https://skillicons.dev/icons?i=html"
                },
                {id:6,
                content:'CSS',
                icon:"https://skillicons.dev/icons?i=css"
                }
        ]
        },{
            title:'Frameworks',
            content:[
                {id:1,
                content:'React',
                icon:"https://skillicons.dev/icons?i=react"
                },
                {id:2,
                content:'Tailwind CSS',
                icon:"https://skillicons.dev/icons?i=tailwind"
                },
                {id:3,
                content:'Bootstrap',
                icon:"https://skillicons.dev/icons?i=bootstrap"
                },
                {id:4,
                content:'Express.js',
                icon:"https://skillicons.dev/icons?i=express"
                },
                {id:5,
                content:'Node.js',
                icon:"https://skillicons.dev/icons?i=nodejs"

                }
            ]
        },
        {
            title:'Databases',
            content:[
                {id:1,
                content:'MySQL',
                icon:"https://skillicons.dev/icons?i=mysql"
                },
                {id:2,
                content:'MongoDB',
                icon:"https://skillicons.dev/icons?i=mongodb"
                }
            ]
        },
        {
            title:'Tools',
            content:[
                {id:1,
                content:'Git',
                icon:"https://skillicons.dev/icons?i=git"
                },
                {id:2,
                content:'GitHub',
                icon:"https://skillicons.dev/icons?i=github"
                },
                {id:3,
                content:'VS Code',
                icon:"https://skillicons.dev/icons?i=vscode"
                },
                {id:4,
                content:'Heroku',
                icon:"https://skillicons.dev/icons?i=heroku"
                },
                {id:5,
                content:'Netlify',
                icon:"https://skillicons.dev/icons?i=netlify"
                },
                {id:6,
                content:'Vercel',
                icon:"https://skillicons.dev/icons?i=vercel"
                }
            ]
            }
    ]
  return (
    <Section id="skills" title='Skills' emoji='🧑‍💻' sub={"Following are the skills I have acquired over the years. I am always open to learn new things and I am a quick learner."}>
    <div className='grid gap-10 lg:grid-cols-2'>
        {/* <table className='w-full text-left'>
            <tr className='border-b-2 border-gray-400'>
                <th className='py-2 '>Languages</th>
                <td className='pl-3'>C, Java, Python, JavaScript, HTML, CSS</td>
            </tr>
            <tr className='border-b-2 border-gray-400 '>

                <th className='py-2 '>Frameworks</th>
                <td className='pl-3'>React,Tailwind CSS, Bootstrap, Express.js, Node.js</td>
            </tr>
            <tr className='border-b-2 border-gray-400'>

                <th className='py-2 '>Databases</th>
                <td className='pl-3'>MySQL, MongoDB</td>
            </tr>
            <tr className='border-gray-400'>
             
                <th className='py-2'>Tools</th>
                <td className='pl-3'>Git, GitHub, VS Code, PyCharm, Jupyter Notebook, Heroku, Netlify, Vercel</td>
            </tr> */}
        {/* </table> */}
        {
            skills.map(({title,content}) => {
                return (
                    <div className='w-56 px-2 py-6 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
                        <h4 className='text-base text-gray-900 dark:text-cyan-500'>{title}</h4>
                        {
                            content.map(({id,content,icon}) => {
                                return (
                                    
                                    
                                    <div key={id} id="skillcont" className='w-2/3 mt-2 flex justify-between ml-10 items-left text-left '>{content}<img src={icon} alt="skillIcon" className='text-1 w-5'/></div>
                                    
                                )
                            })
                        }
                    </div>
                )
                
            })
        }

    </div>
    
    </Section>
  )
}

export default Skills
