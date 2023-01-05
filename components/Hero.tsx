import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'
type Props = {
    pageInfo:PageInfo
}

export default function Hero({pageInfo}: Props) {
   
    const [text,count] = useTypewriter({
        words:[
            `Hi, I'm ${pageInfo?.name}`,
            'I`m a freelancer',
            'I`m a full stack developer'
        ],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-3 md:space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image src={urlFor(pageInfo?.profilePic).url()} height={100} width={100} alt="AnggaDwi" className='relative rounded-full h-24 w-24 md:h-32 md:w-32 mx-auto object-cover '/>
        <div className='z-20 '>
            <h2 className='text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]  object-cover'>
                {pageInfo.role}
            </h2>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold px-10'>
                
                <span className='mr-1 md:mr-3'>{text}  </span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
        </div>
        <div className=' pt-0 md:-pb-10 z-20'>
            <Link href="#about">
            <button className='heroButton'>About</button>

            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>

            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>

            </Link>
          
            <Link href="#projects">
            <button className='heroButton'>Projects</button>

            </Link>

            
        </div>
        
       
    </div>
  )
}