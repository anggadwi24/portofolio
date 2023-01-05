import React from 'react'
import {motion} from 'framer-motion'
import SkillCard from './Skill'
import { Skill } from '../typings'

type Props = {
  skills : Skill[]
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative flex-col text-center md:text-left 
            xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 
            mx-auto items-center' 
    >
        <h3 className='absolute top-24   uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl'>Skills</h3>
        <h3 className='absolute top-32  uppercase tracking-[1px] md:tracking-[3px]  text-gray-500 text-xs md:text-sm '> Hover over a skill for current profieciency</h3>
        
        <div className='grid grid-cols-4 gap-5'>
          {skills?.slice(0,skills.length/2).map((skill) => {
            return <SkillCard key={skill._id} skill={skill} dirrectionLeft={false}/>
          })} 
          {skills?.slice(skills.length / 2, skills.length).map(skill => {
            return <SkillCard key={skill._id} skill={skill} dirrectionLeft={true}/>
            
            
          })}
           
          
            


        </div>
    </motion.div>
  )
}

export default Skills