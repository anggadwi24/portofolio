import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageInfo } from '../typings';

type Props = {
    pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24   uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img
            initial={{
                x:-200,
                opacity:0,
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{x:0,opacity:1}}
            viewport={{once:true}}
            src="/img/i.jpg"
            className='-mb-24 mt-20 md:mt-0 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-65 md:h-95 xl:w-65 xl:h-95'
        >

        </motion.img>
        <div className='space-y-5 mt-10 px-0 md:px-10 md:mt-0'>
            <h4 className='text-xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'> little</span>{" "} background
            </h4>
            <p className='text-xs md:text-sm '>
                {pageInfo.backgroundInformation}
            </p>
        </div>
    </div>
  )
}

export default About