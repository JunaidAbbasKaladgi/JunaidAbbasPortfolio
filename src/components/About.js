import React from 'react'
import profile from './profile.jpg'

export const About = () => {
  return (
    <div>
         <div   className=' font-serif flex flex-col md:flex-row gap-10 md:h-[80vh] justify-center items-center'>
          <div className='bg-black sm:w-[50vh] sm:h-[70vh] w-[40vh] h-[50vh] rounded-md  '>
          <img src={profile} alt="" className='w-[100%]  h-[100%]' />
          </div>
              <div className=' text-center md:text-left  max-w-[70vh] h-[60vh]'>
                <p className='sm:text-4xl text-3xl font-bold'>About Me</p><br />
                <ul className='flex flex-col gap-3'>
                <li><p className='sm:text-xl text-[18px] font-bold'>Name:<span className='text-gray-500'>Junaid Abbas Kaladgi</span></p></li>
                <li><p className='sm:text-xl text-[18px] font-bold'>Date of Birth:<span className='text-gray-500'>October 11,2001</span></p></li>
                <li><p className='sm:text-xl text-[18px] font-bold'>Address:<span className='text-gray-500'>Naubag Near Bus Stand Vijayapura,Karnataka,India.</span></p></li>
                <li><p className='sm:text-xl text-[18px] font-bold'>Zip Code:<span className='text-gray-500'>586101</span></p></li>
                <li><p className='sm:text-xl text-[18px] font-bold'>Email:<span className='text-gray-500'>junaidabbaskaladgi@gmail.com</span></p></li>
                <li><p className='sm:text-xl text-[18px] font-bold'>Phone:<span className='text-gray-500'>+919686906851</span></p></li>
                <li><button className='bg-blue-500 text-white rounded sm:p-2 p-1 font-bold'><a href="JunaidAbbas(Resume)[1].docx" download='JunaidAbbas(Resume)[1]'>DOWNLOAD CV</a></button></li>
                </ul>
              </div>
      </div>
    </div>
  )
}
