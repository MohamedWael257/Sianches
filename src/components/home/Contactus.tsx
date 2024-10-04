import React from 'react'
import { MdOutlinePhoneEnabled, MdOutlineMailOutline, MdOutlineArrowOutward } from 'react-icons/md'
import ContactImage from '@/images/home/11.png'
import Image from 'next/image'

export default function Contactus() {
    return (
        <section className="container grid lg:grid-cols-[1fr_1fr] grid-cols-1s gap-4">
            <div className='relative pt-8 lg:px-0 px-4'>
                <h2 className='lg:text-3xl md:text-2xl text-xl font-bold lg:w-[70%] mb-6 capitalize'>We'll help you find a place you'll love!</h2>
                <div className='flex items-center text-lg mb-2 lg:mb-0'>
                    <MdOutlinePhoneEnabled size={30} />
                    <div className='ml-3 text-[#313536]'>
                        <p>Phone Number</p>
                        <p>314-555-0123</p>
                    </div>
                </div>
                <div className='flex items-center text-lg mb-2 lg:mb-0'>
                    <MdOutlineMailOutline size={30} />
                    <div className='ml-3 text-[#313536]'>
                        <p>Email Address</p>
                        <p>SIANCHES@gmail.com </p>
                    </div>
                </div>
                <Image src={ContactImage} className='lg:block hidden w-[500px] h-[400px] relative top-20 right-24' alt='AboutImage' />
            </div>
            <div className='relative lg:pt-8 pt-4 lg:px-0 px-4'>
                <h2 className='lg:text-3xl text-2xl font-bold lg:w-[70%] mb-2 capitalize'>Contact us</h2>
                <p className=' text-[#313536]'>We will respond as soon as we receive your message.</p>
                <form className='w-full'>
                    <div className='input-box mb-6 inline-block w-full'>
                        <label className='flex capitalize items-center mt-1 text-lg font-medium'>Name</label>
                        <input className='w-full p-5 rounded-md bg-[#2d2d2d23] text-[var(--third-black)] placeholder:text-[var(--third-black)] placeholder:capitalize' type="text" id='fullname' name='fullname' placeholder='enter your fullname ' required />
                    </div>
                    <div className='input-box mb-6 inline-block w-full'>
                        <label className='flex capitalize items-center mt-1 text-lg font-medium'>Email address</label>
                        <input className='w-full p-5 rounded-md bg-[#2d2d2d23] text-[var(--third-black)] placeholder:text-[var(--third-black)] placeholder:capitalize' type="email" id='email' name='email' placeholder='enter your email address' required />
                    </div>
                    <div className='input-box mb-6 inline-block w-full'>
                        <label className='flex capitalize items-center mt-1 text-lg font-medium'>Phone Number</label>
                        <input className='w-full p-5 rounded-md bg-[#2d2d2d23] text-[var(--third-black)] placeholder:text-[var(--third-black)] placeholder:capitalize' type="text" id='phone' name='phone' placeholder='enter your  phone number' required />
                    </div>
                    <div className='input-box mb-6 inline-block w-full'>
                        <label className='flex capitalize items-center mt-1 text-lg font-medium'>message</label>
                        <input className='w-full p-5 rounded-md bg-[#2d2d2d23] text-[var(--third-black)] placeholder:text-[var(--third-black)] placeholder:capitalize' type="text" id='message' name='message' placeholder='enter your message ' required />
                    </div>
                    <button className='text-white bg-[#2D2D2D] capitalize p-4 rounded-lg xl:relative xl:left-[400px] left-[200px] lg:top-10'>
                        send message <MdOutlineArrowOutward className='inline-block font-normal' color='white' size={25} />
                    </button>
                </form>
            </div>
        </section>
    )
}