"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import useScrollspy from '@/hooks/useScrollspy'
import SidebarNav from '@/components/SidebarNav'
import Hero from '@/components/Hero'

export default function Home() {


  return (
    <>
      <div className="flex relative">
        <aside className='fixed md:block h-screen md:sticky top-0'>
          <SidebarNav />
        </aside>
        <main className='flex-grow'>
          <div className='flex bg-slate-300 items-center w-full h-screen bg-[url("/images/hero1.jpg")] bg-cover px-[1.1rem] ' id='home'>
            <Hero />
          </div>
          <div className='flex flex-col w-full h-auto md:h-screen px-[1.1rem] ' id='about'>
            <h2 className='uppercase'>about us</h2>
            <h2 className='uppercase'>who am i?</h2>
            <p><span className='font-bold'>Hi I'm Muhammad Usman</span> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <div className='PARENT flex md:justify-between flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10'>
              <div className='flex-none md:flex-1 shadow-2xl p-8 flex flex-col space-y-4 border-b-2 border-blue-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" className="w-8 h-w-8 text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <span> UI/UX </span>
              </div>
              <div className='flex-none md:flex-1 shadow-2xl p-8 flex flex-col space-y-4 border-b-2 border-red-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span> Web Design </span>
              </div>
              <div className='flex-none md:flex-1 shadow-2xl p-8 flex flex-col space-y-4 border-b-2 border-purple-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <span> Application </span>
              </div>
              <div className='flex-none md:flex-1 shadow-2xl p-8 flex flex-col space-y-4 border-b-2 border-yellow-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
                <span> Software </span>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center bg-red-300 w-full h-screen' id='services'>
            <p>
              SERVICES
            </p>
          </div>
          <div className='flex justify-center items-center bg-blue-300 w-full h-screen' id='skills'>
            <p>
              SKILLS
            </p>
          </div>
        </main>
      </div>

      {/* <div className='flex justify-start'>
          <div className='overflow-scroll fixed'>
          </div>
        <div className='flex-grow'>
        </div>
      </div> */}
    </>
  )
}
