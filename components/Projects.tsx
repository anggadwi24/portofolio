import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'
type Props = {
    projects : Project[]
}

const Projects = ({projects}: Props) => {
    
    return (
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24   uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl'>Projects</h3>
            
            <div className='mt-4 sm:mt-12 md:mt-20 lg:mt-40 relative w-full flex  overflow-y-hidden overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map( (project,i) => (
                    <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-10 md:p-40 h-screen'>
                        <motion.img 
                        initial={{
                            y:-300,
                            opacity:0,
                        }}
                        transition={{duration:1.2}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        src={urlFor(project.image).url()} alt={project.title} className='h-[16rem]'/>
                        <div className='space-y-4 px-0 md:px-5 max-w-6xl'>
                            <h4 className='text-xl font-semibold text-center'>
                               
                               <a href={project.linkToBuild} rel="noreferrer" target="_blank">{project.title}</a>
                            </h4>
                            <div className='flex items-center space-x-2 justify-center'>
                            {project.technologies.map((tech)=>{
                                return <Image key={tech._id} src={urlFor(tech.image).url()} alt={tech.title} width={100} height={100} className="h-4 w-4"/>
                            })}
                            </div>
                           
                            <p className='text-md text-center md:text-left'>{project.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'></div>
        </motion.div>
    )
}

export default Projects