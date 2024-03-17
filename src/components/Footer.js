import React from 'react'
import { AiFillLinkedin,AiFillGithub} from "react-icons/ai";

export const Footer = () => {
  return (
    <div> 
           <div className='sm:h-[13vh] h-[10vh] flex flex-row justify-center items-center gap-10 bg-black '>
            <a href=''><div className=' bg-gray-300 sm:h-[8vh] sm:w-[8vh] h-[6vh] w-[6vh] flex items-center justify-center rounded-full'><AiFillLinkedin size={'5vh'} style={{color:'black',}} /></div></a>
            <a href='https://github.com/JunaidAbbasKaladgi?tab=repositories'><div className='bg-gray-300 sm:h-[8vh] sm:w-[8vh] h-[6vh] w-[6vh] flex items-center justify-center rounded-full'><AiFillGithub size={'5vh'} style={{color:'black',}}/></div></a>
            </div>
            <div className="h-[5vh] bg-black text-center text-gray-500 font-bold font-serif">
            <p className=''>Copyright&copy;2024 All rights reserved</p>
            </div>
    </div>
  )
}
