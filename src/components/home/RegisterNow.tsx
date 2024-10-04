import React from 'react'
import Image from 'next/image'
import { MdOutlineArrowOutward } from 'react-icons/md'
import HomeImage from '@/images/home/10.png'
import { useRouter } from 'next/navigation'


export default function RegisterNow() {
    const router = useRouter()
    return (
        <section>
            <div className="container bg-[#f8f8f7] relative">
                <div className="grid lg:grid-cols-[1.3fr_1fr] grid-cols-1 gap-6  lg:px-16 px-4 lg:h-[250px]">
                    <Image src={HomeImage} className='lg:w-[500px] lg:h-[400px] lg:relative -top-28 left-0' alt='AboutImage' />
                    <div className="relative">
                        <h3 className='capitalize mb-3 lg:text-4xl md:text-2xl text-xl  font-bold '>Become an ambassador</h3>
                        <br />
                        <button onClick={() => router.push('/register')} className='bg-[#2D2D2D] text-white capitalize p-4 px-10 rounded-lg lg:my-6'>
                            Register Now <MdOutlineArrowOutward className='inline-block font-normal' color='white' size={25} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}