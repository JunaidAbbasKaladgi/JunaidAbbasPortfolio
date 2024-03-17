import React from 'react'

export const Contact = (props) => {
  return (
    <div>
          <div className='bg-white shadow-2xl rounded-lg sm:w-[45vh] h-[40vh] w-[40vh] py-6  text-center'>
            <ul className='flex flex-col justify-center text-center items-center'>
            <li><div className='h-[15vh] rounded-full w-[15vh]  bg-blue-700 flex items-center justify-center'>{props.icons}</div></li>
            <li><p className='font-bold text-xl'>{props.name}</p></li><br />
            <li><p className='font-bold text-gray-600'>{props.text}</p></li>
            </ul>
        </div>
    </div>
  )
}
