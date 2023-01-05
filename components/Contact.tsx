import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PageInfo } from '../typings'

type Inputs = {
    name:string
    email:string
    subject:string 
    message:string 
}
type Props = {
    pageInfo:PageInfo
}

const Contact = ({pageInfo}: Props) => {
    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit:SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`
    }
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly items-center mx-auto'>
        <h3 className='absolute top-24   uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl'>Contact</h3>
        <div className='mt-12 sm:mt-12 md:mt-20 lg:mt-40 flex flex-col space-y-5'>
            <h4 className='text-sm md:text-xl font-semibold text-center'>
                I have got just what you need {""}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets talk.</span>
            </h4>
            <div className='space-y-3'>
                <div className='flex items-center space-x-5 justify-center ' >
                    <PhoneIcon className='text-[#F7AB0A] h-4 w-4 lg:h-6 lg:w-6 animate-pulse'/>
                    <p className='text-sm lg:text-xl'>{pageInfo.phoneNumber}</p>
                </div>
                <div className='flex items-center space-x-5 justify-center ' >
                    <EnvelopeIcon className='text-[#F7AB0A] h-4 w-4 lg:h-6 lg:w-6 animate-pulse'/>
                    <p className='text-sm lg:text-xl'>{pageInfo.email}</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-4 w-4 lg:h-6 lg:w-6 animate-pulse'/>
                    <p className='text-sm lg:text-xl'>{pageInfo.address}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-80 lg:w-fit mx-auto'>
                <div className='flex space-y-2 space-x-0 lg:space-y-0 lg:space-x-2 flex-col lg:flex-row'>
                    <input {...register('name')} type="text" placeholder="Name" className='contactInput' />
                    <input  {...register('email')} type="email" placeholder="Email" className='contactInput' />
                </div>
                <input  {...register('subject')} type="text" placeholder='Subject'  className='contactInput' />
                <textarea   {...register('message')} className='contactInput' placeholder='Message'></textarea>
                <button className='bg-[#F7AB0A] py-2 px-5 rounded-md text-black font-bold text-sm'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact