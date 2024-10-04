import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import Image from 'next/image';
import Image2 from '@/images/home/02.png'
import Frame1 from '@/images/home/Frame.png'
import Frame2 from '@/images/home/Frame (1).png'
import Frame3 from '@/images/home/Frame (2).png'
import Frame4 from '@/images/home/Frame (3).png'

export default function About() {
    return (
        <div className="container">
            <div className="grid lg:grid-cols-[1fr_1.5fr] grid-cols-1 gap-6 p-6 relative">
                <Image src={Image2} className='w-[400px] h-full' alt='AboutImage' />
                <div className=" relative pt-14">
                    <h3 className='capitalize mb-3 text-4xl font-bold w-[80%]'>We Help You Realize Your Dream Property</h3>
                    <p>Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.
                        Fusce at dui tincidunt nulla semper venenatis at et magna.
                        Mauris turpis lorem, ultricies vel justo sed, ultrices auctor nisi.
                    </p>
                    <br />
                    <p>Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.
                        Fusce at dui tincidunt nulla semper.
                    </p>
                    <br />
                    <button className='bg-[#2D2D2D] text-white capitalize p-4 px-8 rounded-lg my-6'>
                        read more <MdOutlineArrowOutward className='inline-block font-normal' color='white' size={25} />
                    </button>
                </div>
            </div>
            <div className="icons grid lg:grid-cols-4 grid-cols-2 gap-10 p-6 px-16 mt-6">
                <div>
                    <Image src={Frame1} className='w-[50px] h-[50px] mx-auto' alt='Frame' />
                    <p className='text-center mt-2'>Property Management</p>
                </div>
                <div>
                    <Image src={Frame2} className='w-[50px] h-[50px] mx-auto' alt='Frame' />
                    <p className='text-center mt-2'>Great support</p>
                </div>
                <div>
                    <Image src={Frame3} className='w-[50px] h-[50px] mx-auto' alt='Frame' />
                    <p className='text-center mt-2'>Mortgage Services</p>
                </div>
                <div>
                    <Image src={Frame4} className='w-[50px] h-[50px] mx-auto' alt='Frame' />
                    <p className='text-center mt-2'>Great support

                    </p>
                </div>
            </div>
        </div>
    )
}