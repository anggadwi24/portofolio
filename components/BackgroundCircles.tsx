import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
    initial={{
      opacity:0,
    }}
    animate={{
      scale: [1, 1.2, 1.3, 1.5, 1],
      opacity:[0.1, 0.2, 0.4, 0.8, 0.1 ,1.0]

    }}

    transition={{
      duration:2.5
    }}
    className='relative flex justify-center items-center '
    >
        <div className='absolute border border-[#333333] rounded-full  h-24 w-24 md:h-[8rem] md:w-[8rem] mt-32 md:mt-52 animate-ping'></div>
         <div className=' rounded-full border border-[#333333]  h-48 w-48 md:h-[16rem] md:w-[16rem] mt-32 md:mt-52 absolute'></div>

        <div className='rounded-full border border-[#333333] h-64 w-64 md:h-[24rem] md:w-[24rem] absolute mt-32 md:mt-52 '></div>

        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[20rem] w-[20rem] md:h-[28rem] md:w-[28rem] absolute mt-32 md:mt-52 animate-pulse'></div>
        <div className='rounded-full border border-[#333333] h-[24rem] w-[24rem] md:h-[32rem] md:w-[32rem] absolute mt-32 md:mt-52'></div> 

        
        
    </motion.div>
  )
}

export default BackgroundCircles