import React from 'react'

type Params = {
    color:string,
    width:number,
    title:string
}

export default function ProgressBar({color,width,title}:Params) {
  return (
    <>
    <h2>HTML</h2>
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 flex relative h-1.5 items-center">
        <div className={`${color} text-xs h-1.5 text-blue-100 text-center p-0.5 leading-none rounded-full w-[${width}%] font-bold`}></div>
        <div className={`-ml-2 bg-blue-600 rounded-full h-3 w-3 before:content-["${width}%"] before:absolute before:bottom-4 before:text-xs before:${color} before:font-bold`}></div>
    </div>
    </>
  )
}
