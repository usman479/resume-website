import React from 'react'

export default function 
() {
  return (
    <div className='flex flex-col space-y-2'>
        <h2 className='text-6xl'>Hi!</h2>
        <h2 className='text-6xl'>I'm usman</h2>
        <p className='text-lg font-thin text-gray-500'>web developer</p>
        <button className='self-start uppercase text-xs tracking-widest font-thin border border-black px-5 py-3 flex items-center space-x-1'>
            <span className='pt-1'> download cv </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
            </svg>
        </button>
    </div>
  )
}
