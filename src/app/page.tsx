'use client'
import '@/styles/Home.css'
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('../components/header/Header'));
const Footer = dynamic(() => import('../components/footer/Footer'));
const HeroImage = dynamic(() => import('@/components/home/Hero-image'));
const About = dynamic(() => import('@/components/home/About'));
const Properties = dynamic(() => import('@/components/home/Properties'));
const Selling = dynamic(() => import('@/components/home/Selling'));
const Recently = dynamic(() => import('@/components/home/Recently'));
const RegisterNow = dynamic(() => import('@/components/home/RegisterNow'));
const Partners = dynamic(() => import('@/components/home/Partners'));
const Contactus = dynamic(() => import('@/components/home/Contactus'));

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <section className="home">
        <HeroImage />
        <About />
        <Properties />
        <Selling />
        <Recently />
        <br /><br /><br /><br />
        <RegisterNow />
        <Partners />
        <Contactus />
      </section>
      {/* <Footer /> */}
    </>
  );
}
