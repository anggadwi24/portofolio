
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
    socials : Social[]
};
const Header = ({socials} : Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5
        }}
        className='flex flex-row items-center'
        >
            {socials.map( (value) => {
                return (
                    <SocialIcon 
                    key={value._id} 
                    url={value.url} 
                    fgColor="gray" bgColor='transparent'
                />
                )
                
            })}
           

        </motion.div>
       
        
        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1.5
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
        >
            <SocialIcon url="#contact" network='email' className='cursor-pointer' fgColor="gray" bgColor='transparent' />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
       
    </header>
  )
}

export default Header
