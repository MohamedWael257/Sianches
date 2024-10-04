'use client'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname()
  return (
    <>
      {
        !(pathname == '/register' || pathname == '/login') &&
        <footer className=" bg-[#f8f8f7] lg:p-16 p-2 lg:px-28 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className='w-full'>
              <h3 className='capitalize lg:text-2xl text-xl font-semibold'>Subscribe to newsletter</h3>
              <p>Sign up to receive the latest news</p>
            </div>
            <div className='w-full grid  sm:grid-cols-[2fr_1fr] grid-cols-1'>
              <input type="text" placeholder='Enter your email address' className='bg-white lg:p-0 p-4 lg:px-0 px-3' />
              <button className='bg-[#2D2D2D] text-white lg:p-0 p-4'>Subscribe</button>
            </div>
          </div>
          <br /><br />
          <hr /><hr />
          <br /><br />
          <div className='grid grid-cols-1 lg:grid-cols-[2.5fr_1fr_1fr] gap-8'>
            <div>
              <h2 className='uppercase text-3xl tracking-[15px] lg:mb-0 mb-4'>Sianches</h2>
              <p>Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.
                Fusce at dui tincidunt nulla semper.
              </p>
              <br />
              <div className="icons flex items-center">
                <p className='mr-3'>Follow us on</p>
                <FaFacebookF className='mr-3' size={25} />
                <FaInstagram className='mr-3' size={25} />
                <FaYoutube className='mr-3' size={25} />
                <RiTwitterXFill className='mr-3' size={25} />
              </div>
            </div>
            <ul className='text-start capitalize text-lg font-normal cursor-pointer'>
              <h2 className='font-semibold mb-2'>main links</h2>
              <li className='mb-2 font-normal'>
                <Link href="/">home</Link>
              </li>
              <li className='mb-2 font-normal'>
                <Link href="/projects">our projects</Link>
              </li>
              <li className='mb-2 font-normal'>
                <Link href="/services">services</Link>
              </li>
              <li className='mb-2' font-normal>
                <Link href="/contactus">contact us</Link>
              </li>
            </ul>
            <ul className='text-start capitalize text-lg font-normal cursor-pointer'>
              <h2 className='font-semibold mb-2'>quick links</h2>
              <li className='mb-2' font-normal>
                <Link href="/privacypolicy">Privacy policy</Link>
              </li>
              <li className='mb-2' font-normal>
                <Link href="/Termsofuse">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <br /><br />
          <hr /><hr />
          <br /><br />
          <p className='text-center'>All Copyrights are reserved by SIANCHES @2024</p>
        </footer>
      }
    </>
  )
}