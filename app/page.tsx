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
          <div className='flex bg-slate-300 items-center w-full h-screen bg-[url("/images/hero1.jpg")] bg-cover px-[1.1rem] bg-fixed' id='home'>
            <Hero />
          </div>
          <div className='flex flex-col w-full h-auto lg:h-screen px-[1.1rem] space-y-10 md:justify-center my-6 mt-10' id='about'>
            <div className='space-y-3'>
              <h2 className='uppercase text-gray-400 text-sm my-4 tracking-widest'>about us</h2>
              <h2 className='uppercase text-2xl font-semibold tracking-widest'>who am i?</h2>
            </div>
            <p className='text-gray-400 tracking-wide'><span className='text-black font-bold'>Hi I'm Muhammad Usman</span> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
            <p className='text-gray-400 tracking-wide'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <div className='PARENT flex lg:justify-between flex-col lg:flex-row space-y-10 lg:space-y-0 lg:gap-x-4'>
              <div className='flex-none  lg:flex-1  my-box-shadow p-5 flex flex-col space-y-4 border-b-2 flex-shrink-0  border-blue-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" className="w-8 h-w-8 text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <span> UI/UX </span>
              </div>
              <div className='flex-none lg:flex-1  my-box-shadow p-5 flex flex-col space-y-4 border-b-2 flex-shrink-0  border-red-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span> Web Design </span>
              </div>
              <div className='flex-none lg:flex-1  my-box-shadow p-5 flex flex-col space-y-4 border-b-2 flex-shrink-0  border-purple-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <span> Application </span>
              </div>
              <div className='flex-none lg:flex-1  my-box-shadow p-5 flex flex-col space-y-4 border-b-2 flex-shrink-0  border-yellow-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
                <span> Software </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full px-[1.1rem]" id="services">
            <div>
              <p className="uppercase text-gray-400 text-sm my-4 tracking-widest">
                What i do ?
              </p>
              <h3 className="uppercase text-2xl font-semibold tracking-widest">
                Here are some of my expertise
              </h3>

              <div className="flex justify-between flex-wrap mt-10 pt-20 lg:gap-x-2">
                <div className="flex-grow lg:flex-grow-0 relative lg:basis-[30%] bg-white py-10 px-10 mb-24 my-box-shadow border-b-2 border-blue-500 rounded-sm -z-50">
                  <div className="mx-auto h-0 w-32 bg-blue-200">
                    <div className="text-blue-500 text-[10rem] absolute -top-[120px]">
                      &#x2B22;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 text-white absolute top-24 left-11"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg text-black my-8 text-center leading-relaxed font-semibold uppercase">
                    Innovative ideas
                  </h3>
                  <p className="text-base text-gray-400 mb-4 text-center leading-relaxed">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
                <div className="flex-grow lg:flex-grow-0 relative lg:basis-[30%] bg-white py-10 px-10 mb-24 my-box-shadow border-b-2 border-red-500 rounded-sm -z-50">
                  <div className="mx-auto h-0 w-32 bg-red-200">
                    <div className="text-red-500 text-[10rem] absolute -top-[120px]">
                      &#x2B22;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 text-white absolute top-24 left-11"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg text-black my-8 text-center leading-relaxed font-semibold uppercase">
                    Software
                  </h3>
                  <p className="text-base text-gray-400 text-center leading-relaxed">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
                <div className="flex-grow lg:flex-grow-0 relative lg:basis-[30%] bg-white py-10 px-10 mb-24 my-box-shadow border-b-2 border-yellow-500 rounded-sm -z-50">
                  <div className="mx-auto h-0 w-32 bg-yellow-200">
                    <div className="text-yellow-500 text-[10rem] absolute -top-[120px]">
                      &#x2B22;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 text-white absolute top-24 left-11"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg text-black my-8 text-center leading-relaxed font-semibold uppercase">
                    Application
                  </h3>
                  <p className="text-base text-gray-400 text-center leading-relaxed">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
                <div className="flex-grow lg:flex-grow-0 relative lg:basis-[30%] bg-white py-10 px-10 mb-24 my-box-shadow border-b-2 border-purple-600 rounded-sm -z-50">
                  <div className="mx-auto h-0 w-32 bg-purple-200">
                    <div className="text-purple-600 text-[10rem] absolute -top-[120px]">
                      &#x2B22;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 text-white absolute top-24 left-11"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg text-black my-8 text-center leading-relaxed font-semibold uppercase">
                    Graphic Design
                  </h3>
                  <p className="text-base text-gray-400 text-center leading-relaxed">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
                <div className="flex-grow lg:flex-grow-0 relative lg:basis-[30%] bg-white py-10 px-10 mb-24 my-box-shadow border-b-2 border-teal-500 rounded-sm -z-50">
                  <div className="mx-auto h-0 w-32 bg-green-200">
                    <div className="text-teal-500 text-[10rem] absolute -top-[120px]">
                      &#x2B22;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 text-white absolute top-24 left-11"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg text-black my-8 text-center leading-relaxed font-semibold uppercase">
                    Software
                  </h3>
                  <p className="text-base text-gray-400 text-center leading-relaxed">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
                <div className="flex-grow lg:flex-grow-0 relative lg:basis-[30%] bg-white py-10 px-10 mb-24 my-box-shadow border-b-2 border-blue-700 rounded-sm -z-50">
                  <div className="mx-auto h-0 w-32 bg-blue-400">
                    <div className="text-blue-700 text-[10rem] absolute -top-[120px]">
                      &#x2B22;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 text-white absolute top-24 left-11"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg text-black my-8 text-center leading-relaxed font-semibold uppercase">
                    Application
                  </h3>
                  <p className="text-base text-gray-400 text-center leading-relaxed">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col  w-full px-[1.1rem] justify-center  my-10' id='skills'>
          <div
            className="flex justify-center items-center w-full"
            id="skills"
          >
            <div className="bg-[url('/images/unsplash1.jpeg')] bg-fixed h-full lg:h-72 w-full bg-cover bg-center text-center py-6 flex items-center justify-evenly flex-col lg:flex-row">
              <div className='my-6 lg:my-auto'>
                <p className="text-5xl text-white font-extrabold mb-4">309</p>
                <p className="uppercase text-base text-white leading-relaxed tracking-widest">
                  cups of coffee
                </p>
              </div>
              <div className='my-6 lg:my-auto'>
                <p className="text-5xl text-white font-extrabold mb-4">356</p>
                <p className="uppercase text-base text-white leading-relaxed tracking-widest">
                  projects
                </p>
              </div>
              <div className='my-6 lg:my-auto'>
                <p className="text-5xl text-white font-extrabold mb-4">30</p>
                <p className="uppercase text-base text-white leading-relaxed tracking-widest">
                  clients
                </p>
              </div>
              <div className='my-6 lg:my-auto'>
                <p className="text-5xl text-white font-extrabold mb-4">10</p>
                <p className="uppercase text-base text-white leading-relaxed tracking-widest">
                  partners
                </p>
              </div>
            </div>
          </div>
            <div className=' my-10'>
                <h2 className='uppercase text-gray-400 text-sm my-4 tracking-widest'>my speciality</h2>
                <h2 className='uppercase text-2xl font-semibold tracking-widest'>my skills</h2>
            </div>
            <p className='light-text my-10 tracking-wide'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
            <div className='space-y-4'>
              <div className='flex gap-x-10 flex-col sm:flex-row gap-y-6'>
                <div className='flex-1'>
                  <h2 className=''>HTML</h2>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 flex relative h-1.5 items-center -z-50 -z-50">
                    <div className="bg-blue-600 text-xs h-1.5 text-blue-100 text-center p-0.5 leading-none rounded-full w-[90%] font-bold "></div>
                    <div className='-ml-2 bg-blue-600 rounded-full h-3 w-3 before:content-["90%"] before:absolute before:bottom-3 before:text-xs before:text-blue-600 before:font-bold'></div>
                  </div>
                </div>
                <div className='flex-1'>
                  <h2 className=''>CSS</h2>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 flex relative h-1.5 items-center -z-50">
                    <div className="bg-red-600 text-xs h-1.5 text-blue-100 text-center p-0.5 leading-none rounded-full w-[70%] font-bold "></div>
                    <div className='-ml-2 bg-red-600 rounded-full h-3 w-3 before:content-["70%"] before:absolute before:bottom-3 before:text-xs before:text-red-600 before:font-bold'></div>
                  </div>
                </div>
              </div>
              <div className='flex gap-x-10 flex-col sm:flex-row gap-y-6'>
                <div className='flex-1'>
                  <h2 className=''>Javascript</h2>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 flex relative h-1.5 items-center -z-50">
                    <div className="bg-yellow-400 text-xs h-1.5 text-blue-100 text-center p-0.5 leading-none rounded-full w-[70%] font-bold "></div>
                    <div className='-ml-2 bg-yellow-400 rounded-full h-3 w-3 before:content-["70%"] before:absolute before:bottom-3 before:text-xs before:text-yellow-400 before:font-bold'></div>
                  </div>
                </div>
                <div className='flex-1'>
                  <h2 className=''>Typescript</h2>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 flex relative h-1.5 items-center -z-50">
                    <div className="bg-purple-600 text-xs h-1.5 text-blue-100 text-center p-0.5 leading-none rounded-full w-[60%] font-bold "></div>
                    <div className='-ml-2 bg-purple-600 rounded-full h-3 w-3 before:content-["60%"] before:absolute before:bottom-3 before:text-xs before:text-purple-600 before:font-bold'></div>
                  </div>
                </div>
              </div>
              <div className='flex gap-x-10 flex-col sm:flex-row gap-y-6'>
                <div className='flex-1'>
                  <h2 className=''>React js</h2>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 flex relative h-1.5 items-center -z-50">
                    <div className="bg-teal-600 text-xs h-1.5 text-blue-100 text-center p-0.5 leading-none rounded-full w-[65%] font-bold "></div>
                    <div className='-ml-2 bg-teal-600 rounded-full h-3 w-3 before:content-["65%"] before:absolute before:bottom-3 before:text-xs before:text-teal-600 before:font-bold'></div>
                  </div>
                </div>
                <div className='flex-1'>
                  <h2 className=''>Next js</h2>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 flex relative h-1.5 items-center -z-50">
                    <div className="bg-blue-900 text-xs h-1.5 text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%] font-bold "></div>
                    <div className='-ml-2 bg-blue-900 rounded-full h-3 w-3 before:content-["50%"] before:absolute before:bottom-3 before:text-xs before:text-blue-900 before:font-bold'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='flex bg-red-300 w-full h-screen' id='experience'>
          <div className='space-y-3'>
                <h2 className='uppercase text-sm light-text'>my work</h2>
                <h2 className='uppercase text-2xl'>recent work</h2>
            </div>
          </div> */}
          <div className=" w-full px-[1.1rem] my-16" id="contact">
            <p className="uppercase text-gray-400 text-sm my-4 tracking-widest">
              Get in touch
            </p>
            <h3 className="uppercase text-2xl font-semibold tracking-widest">Contact</h3>
            <div className="flex flex-col md:flex-row justify-between mt-20">
              <div className="basis-[35%] mr-20 -mt-6">
                <div className="flex items-center my-8">
                  <div className="bg-gray-100 p-7 mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <a href="/" className="text-blue-500">
                    muusman479@gmail.com
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <div className="bg-gray-100 p-7 mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <a href="/" className="text-blue-500">
                    198 West 21th Street, Suite 721 New York NY 10016
                  </a>
                </div>
                <div className="flex items-center my-8">
                  <div className="bg-gray-100 p-7 mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <a href="/" className="text-blue-500">
                    +92308169436
                  </a>
                </div>
              </div>

              <div className="flex-grow">
                <form action="">
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="focus:outline-none text-base bg-gray-200 border-2 border-transparent px-4 py-4 my-2 w-full"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name=""
                      id=""
                      className="focus:outline-none text-base bg-gray-200 border-2 border-transparent px-4 py-4 my-2 w-full"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="focus:outline-none text-base bg-gray-200 border-2 border-transparent px-4 py-4 my-2 w-full"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols={40}
                      rows={5}
                      className="focus:outline-none text-base bg-gray-200 border-2 border-transparent px-4 py-4 my-2 w-full"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="uppercase bg-blue-500 text-white text-xs py-2 px-4"> Send message</button>
                  </div>
                </form>
              </div>
            </div>
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
