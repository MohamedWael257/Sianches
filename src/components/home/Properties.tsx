import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import HomeImage1 from '@/images/home/03.png'
import HomeImage2 from '@/images/home/04.png'
import HomeImage3 from '@/images/home/05.png'
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';
export default function Properties() {
    const images = [
        { id: 1, src: HomeImage1, alt: 'Image 1', city: "New Cairo" },
        { id: 2, src: HomeImage2, alt: 'Image 2', city: "October" },
        { id: 3, src: HomeImage3, alt: 'Image 3', city: "Seaside" },
        { id: 4, src: HomeImage1, alt: 'Image 4', city: "New Cairo" },
        { id: 5, src: HomeImage2, alt: 'Image 5', city: "October" },
        { id: 6, src: HomeImage3, alt: 'Image 6', city: "Seaside" },
        { id: 7, src: HomeImage1, alt: 'Image 1', city: "New Cairo" },
        { id: 8, src: HomeImage2, alt: 'Image 2', city: "October" },
        { id: 9, src: HomeImage3, alt: 'Image 3', city: "Seaside" },
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
        }, 4000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="container relative">
            <div className="relative w-full overflow-hidden">
                <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                    {images.map((image) => (
                        <div key={image.id} className="lg:w-1/3 w-1/2 flex-shrink-0 p-2">
                            <Image src={image.src} alt={image.alt} className="w-full h-auto rounded-lg shadow-lg" />
                            <div className='mt-3 px-2 flex justify-between'>
                                <p className='font-semibold'>{image.city}</p>
                                <Link href={`properties/${image.id}`}>
                                    <FaArrowDown className='font-normal' size={25} />
                                </Link>
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