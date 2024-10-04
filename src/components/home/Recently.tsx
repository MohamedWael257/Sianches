import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import HomeImage1 from '@/images/home/07.png'
import HomeImage2 from '@/images/home/08.png'
import HomeImage3 from '@/images/home/09.png'
import HomeImage4 from '@/images/home/Ellipse 2.png'
import HomeImage5 from '@/images/home/Group (1).png'
import HomeFrame from '@/images/home/Frame (4).png'
import HomeVector1 from '@/images/home/Vector.png'
import HomeVector2 from '@/images/home/Vector (1).png'

import { MdOutlineArrowOutward } from 'react-icons/md';
import Link from 'next/link';
import { CiHeart } from 'react-icons/ci';
export default function Recently() {

    const images = [
        { id: 1, src: HomeImage1, alt: 'Image 1', title: "TULWA for sale in west orascom ", location: 'Est St, 77 - Central Park South, NYC', bathrooms: 2, bedrooms: 3, area: 280, price: '524.000', priceMonthly: '96.500' },
        { id: 2, src: HomeImage2, alt: 'Image 2', title: "TULWA for sale in west orascom ", location: 'Est St, 77 - Central Park South, NYC', bathrooms: 2, bedrooms: 3, area: 280, price: '524.000', priceMonthly: '96.500' },
        { id: 3, src: HomeImage3, alt: 'Image 3', title: "TULWA for sale in west orascom ", location: 'Est St, 77 - Central Park South, NYC', bathrooms: 2, bedrooms: 3, area: 280, price: '524.000', priceMonthly: '96.500' },
        { id: 4, src: HomeImage1, alt: 'Image 4', title: "TULWA for sale in west orascom ", location: 'Est St, 77 - Central Park South, NYC', bathrooms: 2, bedrooms: 3, area: 280, price: '524.000', priceMonthly: '96.500' },
        { id: 5, src: HomeImage2, alt: 'Image 5', title: "TULWA for sale in west orascom ", location: 'Est St, 77 - Central Park South, NYC', bathrooms: 2, bedrooms: 3, area: 280, price: '524.000', priceMonthly: '96.500' },
        { id: 6, src: HomeImage3, alt: 'Image 6', title: "TULWA for sale in west orascom ", location: 'Est St, 77 - Central Park South, NYC', bathrooms: 2, bedrooms: 3, area: 280, price: '524.000', priceMonthly: '96.500' },
        { id: 7, src: HomeImage1, alt: 'Image 1', title: "TULWA for sale in west orascom ", location: 'Est St, 77 - Central Park South, NYC', bathrooms: 2, bedrooms: 3, area: 280, price: '524.000', priceMonthly: '96.500' },
        { id: 8, src: HomeImage2, alt: 'Image 2', title: "TULWA for sale in west orascom ", location: 'Est St, 77 - Central Park South, NYC', bathrooms: 2, bedrooms: 3, area: 280, price: '524.000', priceMonthly: '96.500' },
        { id: 9, src: HomeImage3, alt: 'Image 3', title: "TULWA for sale in west orascom ", location: 'Est St, 77 - Central Park South, NYC', bathrooms: 2, bedrooms: 3, area: 280, price: '524.000', priceMonthly: '96.500' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="container relative">
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                >
                    {images.map((image) => (
                        <div key={image.id} className="lg:w-1/3 md:w-1/2 w-full  flex-shrink-0 rounded-lg border border-[#8D999D] mr-2">
                            <div className='relative'>
                                <Image src={image.src} alt={image.alt} className="w-full h-auto rounded-lg shadow-lg" />
                                <Image src={HomeImage4} alt={'HomeImage'} className="w-12 h-12 rounded-full absolute top-3 left-3" />
                                <CiHeart className="w-12 h-12 rounded-full absolute top-3 right-3 bg-white text-red-500 p-1" size={35} />
                                <div className="cursor-pointer absolute bottom-3 right-3 rounded-lg bg-white flex justify-between items-center p-1" >
                                    <Image src={HomeImage5} alt={'HomeImage'} className="w-5 h-5 mr-2" />
                                    <p className='font-semibold'>Apartment</p>
                                </div>
                            </div>
                            <div className='mt-3 px-2'>
                                <p className='mb-2 font-semibold text-[#2d2d2d]'>{image.title}</p>
                                <p className='mb-2 font-normal text-[#8D999D]'>{image.location}</p>
                                <div className='mb-2 flex flex-col lg:flex-row lg:justify-between'>
                                    <p className='mb-2 font-normal flex'>
                                        <Image src={HomeFrame} alt={'HomeFrame'} className="w-5 h-5 mr-2" />
                                        {image.bathrooms} bathrooms
                                    </p>
                                    <p className='mb-2 font-normal flex'>
                                        <Image src={HomeVector1} alt={'HomeVector'} className="w-5 h-5 mr-2" />
                                        {image.bedrooms} bedrooms
                                    </p>
                                    <p className='mb-2 font-normal flex'>
                                        <Image src={HomeVector2} alt={'HomeVector'} className="w-5 h-5 mr-2" />
                                        {image.area} m
                                    </p>
                                </div>
                                <div className='mb-2 flex justify-between'>
                                    <div>
                                        <p className='text-[#2d2d2d] font-bold'>{image.price} EGB</p>
                                        <p className='text-[#8d999d]'>{image.priceMonthly} Monthly</p>
                                    </div>
                                    <Link href={`recently/${image.id}`}>
                                        <MdOutlineArrowOutward className='font-normal' size={25} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center mt-12'>
                <button className=" bottom-0 left-4  bg-gray-800 text-white w-10 h-10 rounded-full " onClick={prevSlide}>
                    &#10094;
                </button>
                <button className=" bottom-0 left-12  bg-gray-800 text-white w-5 h-5 translate-y-1 ml-3 mr-1 rounded-full " onClick={prevSlide}>
                </button>
                <button className=" bottom-0 right-12  bg-gray-800 text-white w-5 h-5 translate-y-1 mr-3 ml-1 rounded-full " onClick={nextSlide}>
                </button>
                <button className=" bottom-0 right-4  bg-gray-800 text-white w-10 h-10 rounded-full " onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>

    )
}