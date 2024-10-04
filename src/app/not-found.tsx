import '@/styles/Home.css'
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';

export default function notfound() {
    return (
        <div className="hero-image lg:h-[85vh] h-[80vh] relative z-[3333] text-white">
            <div className="absolute lg:w-[35%] lg:top-[12%] top-[40%] lg:left-[50%] sm:left-[20%] left-[10%] lg:translate-x-[-50%] lg:translate-y-[80%]">
                <h2 className='md:text-8xl text-3xl font-bold text-center mb-6'>404</h2>
                <h2 className='md:text-6xl text-3xl font-bold text-center mb-6'>Page Not Found</h2>
                <button className='block bg-white text-black capitalize p-4 w-[280px] m-[0px_auto]'>
                    <Link href="/">Home </Link>
                    <MdOutlineArrowOutward className='inline-block font-normal' color='black' size={25} />
                </button>
            </div>
        </div>
    );
}
