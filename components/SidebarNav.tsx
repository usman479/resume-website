import React from 'react'
import Image from 'next/image'
import profilePhoto from "../public/images/profile-pic.jpeg"
import Link from 'next/link'
import { useState } from 'react'
import useScrollspy from '@/hooks/useScrollspy'

const SidebarNav = () => {

  const [isNavOpen,setIsNavOpen] = useState(false);
  console.log(isNavOpen);

  const ids = ["home","about","services","skills"];
  const activeId = useScrollspy(ids,100);
  

  return (
    <>
    <div className='flex gap-x-2 relative'>
    <div className="HAMBURGER-ICON block space-y-2 group cursor-pointer order-last my-7 fixed top-0 left-[20px] md:hidden" onClick={() => setIsNavOpen(prev => !prev)}>
        <span className="block h-0.5 w-8  bg-black"></span>
        <span className="block h-0.5 w-8  bg-black group-hover:my-3  transition-all duration-100"></span>
        <span className="block h-0.5 w-8  bg-black"></span>
    </div>

    
    <div className={!isNavOpen ? "translate-x-[-100%] duration-500 md:translate-x-[0%]": "translate-x-[0%] duration-500 md:translate-x-[0%]"}>
    <section className='w-72 bg-gray-100 flex flex-col items-center h-screen justify-center relative'>
        <div className='CROSS-ICON block absolute top-0 right-0 group cursor-pointer md:hidden' onClick={() => setIsNavOpen(prev => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-w-12 group-hover:text-gray-400 duration-150">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </div>

        <div className=''>
            <Image src={profilePhoto} alt="profile picture" className='rounded-full w-[150px] h-[150px] object-cover'/>
        </div>
        <h1 className='text-2xl uppercase mt-5'>Muhammad Usman</h1>
        <h2 className='uppercase text-xs mt-3'><a href="#" className='text-blue-400'>Full Stack Developer</a> in Pakistan</h2>
        <ul className='gap-y-4 flex flex-col text-xs items-center my-10'>
            <li className={`uppercase cursor-pointer underline-item ${activeId == "home" ? "active-nav" : ""}`}>Home</li>
            <li className={`uppercase cursor-pointer underline-item ${activeId == "about" ? "active-nav" : ""}`}>About</li>
            <li className={`uppercase cursor-pointer underline-item ${activeId == "services" ? "active-nav" : ""}`}>Services</li>
            <li className={`uppercase cursor-pointer underline-item ${activeId == "skills" ? "active-nav" : ""}`}>Skills</li>
            <li className={`uppercase cursor-pointer underline-item ${activeId == "education" ? "active-nav" : ""}`}>Education</li>
            <li className={`uppercase cursor-pointer underline-item ${activeId == "experience" ? "active-nav" : ""}`}>Experience</li>
            <li className={`uppercase cursor-pointer underline-item ${activeId == "work" ? "active-nav" : ""}`}>Work</li>
            <li className={`uppercase cursor-pointer underline-item ${activeId == "blog" ? "active-nav" : ""}`}>Blog</li>
            <li className={`uppercase cursor-pointer underline-item ${activeId == "contact" ? "active-nav" : ""}`}>Contact</li>
        </ul>
    </section>
    </div>
    </div>
    </>
  )
}

export default SidebarNav