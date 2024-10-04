import React from 'react'
import Image from 'next/image'
import AboutImage from '@/images/about/06.png'

export default function Partners() {
    return (
        <div className="container">
            <h3 className='capitalize text-2xl font-bold text-center'>our partners</h3>
            <br />
            <Image src={AboutImage} className='w-full h-[150px]' alt='AboutImage' />
        </div>
    )
}