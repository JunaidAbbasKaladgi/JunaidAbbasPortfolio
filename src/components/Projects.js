import React from 'react'

export const Projects = (props) => {
  return (
    <div>
          <div className=' bg-white  border-black border-2 rounded-lg  flex flex-col justify-center w-[40vh] h-[40vh] sm:w-[48vh] sm:h-[48vh] p-0 m-0 font-serif font-bold  text-center'>
            <div className='h-[36vh] rounded-lg flex justify-center items-center w-full bg-slate-300'>
            <img src={props.image} alt="" className='sm:h-[33vh] sm:w-[33vh] h-[28vh] w-[28vh]  rounded-lg ' />
            </div>
            <div className='h-[12vh]'>
              <ul className='flex flex-col gap-2'>
                <li> <p className='font-bold sm:text-xl text-[18px]'>{props.name}</p></li>
                <li><a href={props.url} className='bg-blue-700 text-white sm:p-2 p-1 rounded-lg'>View Demo</a></li>
              </ul>
             
              
            </div>
        </div>
    </div>
  )
}
