import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
import Moment from 'moment'
type Props = {
    experience:Experience
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article  
    className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 
                w-[250px] md:w-[300px] xl:w-[350px] snap-center bg-[#292929] p-3
                opacity-30 hover:opacity-100  cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        src={urlFor(experience.companyImage).url()}
        className='w-12 h-12 md:w-18 md:h-18 rounded-full xl:w-24 xl:h-24 object-cover object-center'
        >

        </motion.img>
        <div className='px-0 md:px-10'>
            <h4 className='text-lg md:text-xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-sm md:text-md lg:text-lg mt-1 uppercase'>{experience.company}</p>
            <div className='flex space-x-2 my-2'>
                {experience.technologies.map( (tech) => {
                    return <Image key={tech._id} src={urlFor(tech.image).url()} height={100} width={100} alt={tech.title} className='h-6 w-6 ' />
                })}
                
                
               

            </div>
            <p className='py-3 text-gray-300 uppercase text-xs  '>
                {Moment(experience.dateStarted).format('MMMM DD Y')} - {experience.isCurrentlyWorkingHere ? 'NOW' : Moment(experience.dateEnded).format('MMMM DD Y') }
                
            </p>
            <ul className='list-disc space-y-3 ml-5 xs:text-xs sm:text-sm md:text-lg pr-3 h-48  overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                {experience.points.map( (point,index) => {
                    return <li key={index}>{point}</li>
                })}
                

            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard