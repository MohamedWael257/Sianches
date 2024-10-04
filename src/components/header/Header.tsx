'use client'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { GrLanguage } from 'react-icons/gr'
import { CiHeart } from "react-icons/ci";
import { MdOutlineArrowOutward, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';
import { AuthContextType } from '@/interfaces/Userinterface';
import { FaBars } from 'react-icons/fa';
import HeaderVector from '@/images/Vector(2).png'
import Image from 'next/image';
export default function Header() {
    const { currentUser } = useContext(AuthContext) as AuthContextType
    const pathname = usePathname()
    const [sidenav, setSidenav] = useState<boolean>(false)
    const [active, setActive] = useState(false)

    const showsidenav = () => {
        setSidenav(!sidenav);
    }
    return (
        <>
            {
                !(pathname == '/register' || pathname == '/login') &&
                <header className='xl:absolute fixed top-0 left-0 z-[9999] w-full  xl:px-[5rem] px-0 py-5 text-white xl:bg-transparent bg-[#2D2D2D]'>
                    <div className="relative  grid xl:grid-cols-[1fr_4fr]  grid-cols-[2fr_1fr] items-center w-full xl:px-10 px-4 " >
                        <div className="logo">
                            <p className='uppercase xl:text-2xl text-xl tracking-[15px]'>Sianches</p>
                        </div>
                        <button onClick={showsidenav} className={`xl:hidden flex justify-end text-white text-5xl font-semibold cursor-pointer`}>
                            <FaBars />
                        </button>
                        <nav>
                            <ul className={`${sidenav ? "h-[550px]" : "h-0"} bg-[#2D2D2D] xl:bg-transparent overflow-hidden xl:overflow-visible transition-[.6s_height_ease] flex xl:flex-row xl:h-fit xl:relative w-full absolute  top-[67px] xl:top-0 left-0 z-[999999] flex-col justify-evenly xl:items-center  capitalize text-3xl xl:px-0 px-4 xl:text-xl font-normal cursor-pointer`}>
                                <li className={`${pathname === '/' ? 'active' : ''}`}>
                                    <Link href="/">home</Link>
                                    <Image className='hidden xl:inline-block' src={HeaderVector} alt='HeaderVector' />
                                </li>
                                <li>
                                    <Link href="/about">about us</Link>
                                    <Image className='hidden xl:inline-block' src={HeaderVector} alt='HeaderVector' />
                                </li>
                                <li>
                                    <Link href="/services">services</Link>
                                    <Image className='hidden xl:inline-block' src={HeaderVector} alt='HeaderVector' />
                                </li>
                                <li>
                                    <Link href="/properties">properties</Link>
                                    <Image className='hidden xl:inline-block' src={HeaderVector} alt='HeaderVector' />
                                </li>
                                <li>
                                    <div className="dropdown relative" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                                        <button className='dropdown-btn text-lg capitalize text-white transition-[0.3s_color]' onClick={() => setActive(!active)}>
                                            <span className='capitalize xl:text-xl text-3xl'> our partners</span>
                                            <span className=' inline-block'>
                                                <MdOutlineKeyboardArrowDown className='inline-block' size={20} />
                                            </span>
                                        </button>
                                        <div className={`${active ? 'dropdown-menu active' : 'dropdown-menu'} `}>
                                            <Link className={`${pathname == '/buy' ? 'text-black' : 'text-white'}  text-center border-b border-white text-[1.4rem] mb-[10px] capitalize`} href="/buy">buy</Link>
                                            <Link className={`${pathname == '/sell' ? 'text-black' : 'text-white'} text-center border-b border-white text-[1.4rem] mb-[10px] capitalize`} href="/sell">sell</Link>
                                            <Link className={`${pathname == '/rent' ? 'text-black' : 'text-white'} text-center border-b border-white text-[1.4rem] mb-[10px] capitalize`} href="/rent">rent</Link>
                                        </div>
                                    </div>
                                    {/* <Link href="/ourpartners">our partners</Link> */}
                                    {/* <MdOutlineKeyboardArrowDown className='inline-block' size={20} /> */}
                                </li>
                                <li>
                                    <Link href="/contactus">contact us</Link>
                                    <Image className='hidden xl:inline-block' src={HeaderVector} alt='HeaderVector' />
                                </li>
                                <li>
                                    <GrLanguage className='mx-2 inline-block' size={25} />
                                    <button className='mr-2'>Ar</button>
                                    {/* <span className='mx-2'>|</span> */}
                                    {/* </li> */}
                                    {/* <li> */}
                                    <CiHeart className='inline-block' size={35} />
                                </li>
                                {currentUser ?
                                    <li className=''>
                                        <div>
                                            <img className='w-[80px] h-[80px] rounded-full' src={currentUser?.avatar} alt='avatar' />
                                        </div>
                                    </li>
                                    : <li className='bg-white text-black capitalize p-2 text-base'>
                                        <Link href="/login">become an ambassador <MdOutlineArrowOutward className='inline-block font-normal' color='black' size={25} />  </Link>
                                    </li>
                                }
                            </ul>
                        </nav>
                    </div>

                </header>
            }
        </>
    )
}