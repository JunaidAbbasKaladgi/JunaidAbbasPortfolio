import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"

export const Skills = (props) => {
  return (
    <div>
        <div className=' mx-w-[45vh] items-center text-[#002d5b] flex justify-center h-[10vh]'>
            <ul className='flex text-left flex-col gap-3'>
            <li><p className='font-bold sm:text-xl text-[16px]'>{props.name}</p></li>
            <li><div className='sm:w-[42vh] w-[38vh] h-[8px] '><ProgressBar completed={props.percent} bgColor='#002d5b'></ProgressBar></div></li>
            </ul>
        </div>
    </div>
  )
}
