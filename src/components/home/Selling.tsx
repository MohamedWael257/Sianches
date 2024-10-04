import React from 'react'
import Image from 'next/image'
import { MdOutlineArrowOutward } from 'react-icons/md'
import HomeImage from '@/images/home/06.png'

export default function Selling() {
    return (
        <section>
            <div className="container bg-[#f8f8f7] relative">
                <div className="lg:grid lg:grid-cols-[1fr_1.5fr] flex flex-col-reverse grid-cols-1 gap-6 lg:p-6 lg:px-16 px-4">
                    <div className=" relative pt-14">
                        <h3 className='capitalize mb-3 lg:text-4xl md:text-2xl font-bold '>Sell Your Property With SIANCHES</h3>
                        <br />
                        <button className='bg-[#2D2D2D] text-white capitalize lg:p-4 p-2 lg:px-10 px-6 rounded-lg lg:my-6'>
                            sell your unit <MdOutlineArrowOutward className='inline-block font-normal' color='white' size={25} />
                        </button>
                    </div>
                    <Image src={HomeImage} className='lg:w-[55%] -top-16 right-0 lg:h-[400px] lg:absolute' alt='AboutImage' />
                </div>
            </div>
        </section>
    )
}