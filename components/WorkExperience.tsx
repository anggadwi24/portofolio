
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import ExperienceCard from './ExperienceCard';
type Props = {
  experiences : Experience[]
}

const WorkExperience = ({experiences}: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow:hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24   uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5 mt-10 sm:mt-24 md:mt-32 lg:mt-32 overflow-x-scroll p-5 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          {experiences?.map(experience => {
            return  <ExperienceCard key={experience._id} experience={experience}/>
          })}
           
           

        </div>
    </motion.div>
  )
}

export default WorkExperience