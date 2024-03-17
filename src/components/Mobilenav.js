import React from 'react'

export const Mobilenav = (props) => {
        const scrollToSection = (elementRef) => {
          window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
          });
          props.toggleNavbar();
        }
        
  return (
    <div>
        <div className=' mobile-nav w-[100%] bg-slate-300 flex z-auto font-serif font-bold   rounded-lg    justify-center'>
        <ul className=''>
              <li onClick={()=>scrollToSection(props.HomeRef)} className='hover:text-red-500 text-xl cursor-pointer'>Home</li>
              <li onClick={()=>scrollToSection(props.AboutRef)}  className='hover:text-red-500 text-xl cursor-pointer'>About</li>
              <li onClick={()=>scrollToSection(props.SkillsRef)} className='hover:text-red-500 text-xl cursor-pointer'>Skills</li>
              <li className='hover:text-red-500 text-xl cursor-pointer'>Projects</li>
              <li onClick={()=>scrollToSection(props.ContactRef)} className='hover:text-red-500 text-xl cursor-pointer'>Contact</li>
         </ul>
        </div>
    </div>
  )
}
