import React, {  useState,useRef } from 'react'
import  { ReactTyped }  from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown,faLocationDot,faPhone,faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { About } from './About';
import { GiHamburgerMenu } from 'react-icons/gi'
import  {Mobilenav}  from './Mobilenav'
import { Skills } from './Skills';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Education } from './Education';
import { Projects } from './Projects';
import QuizMaster from './QuizMaster.png'
import InventoryManagement from './Inventory Management.png'
import Youtubeclone from './Youtube clone.png'

export const Home = () => {
  let [open, setOpen] = useState(false);
   
  const HomeRef=useRef()
  const AboutRef=useRef()
  const SkillsRef=useRef()
  const ProjectsRef=useRef()
  const ContactRef=useRef()
  const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  const toggleNavbar=()=>{
    setOpen(!open)
  }  
  return (
    <div>
      <nav ref={HomeRef}  className='bg-white items-center h-[6vh] sm:h-[6vh] lg:h-[10vh] desk-nav lg:py-4 fixed shadow-lg w-[100%]   lg:flex font-serif' >
        <div className='  items-center font-bold lg:px-10 justify-center lg:justify-normal flex '>
          <p className='text-4xl lg:text-5xl '>Portfolio</p>
          </div>
        <div className=' text-3xl lg:ml-20 mt-[-5vh] ml-[2vh]' >
        <a href="#" className='lg:hidden' onClick={(e)=>{e.preventDefault(); setOpen(!open)}}><GiHamburgerMenu></GiHamburgerMenu></a>
        </div>
        {open ? <div className='desk-nav'><Mobilenav    HomeRef={HomeRef}
    AboutRef={AboutRef}
    SkillsRef={SkillsRef}
    ContactRef={ContactRef}
    toggleNavbar={toggleNavbar} /></div> : null}
        <ul className=' lg:flex lg:items-center hidden flex flex-col lg:w-auto lg:flex-row m-3 gap-y-2 lg:z-auto  items-center justify-center  text-xl  lg:space-x-16 font-bold'>
              <li onClick={()=>scrollToSection(HomeRef)} className=' text-xl cursor-pointer group'>Home<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#002d5b]"></span></li>
              <li onClick={()=>scrollToSection(AboutRef)}  className=' text-xl cursor-pointer group'>About<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#002d5b]"></span></li>
              <li onClick={()=>scrollToSection(SkillsRef)} className=' text-xl cursor-pointer group'>Skills<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#002d5b]"></span></li>
              <li onClick={()=>scrollToSection(ProjectsRef)} className=' text-xl cursor-pointer group'>Projects<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#002d5b]"></span></li>
              <li onClick={()=>scrollToSection(ContactRef)} className=' text-xl cursor-pointer group'>Contact<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#002d5b]"></span></li>
         </ul>
      </nav>
      <div className='bg-slate-200 h-[82vh] sm:h-[100vh] flex-col gap-[5vh]  flex items-center justify-center text-center  max-w-[100%] md:w-[100%] font-serif  '>
        <ul className='flex flex-col gap-2'>
        <li><span className='text-[#002d5b] text-xl md:text-2xl font-bold '>Hey! I AM </span></li>
        <li><span className='text-black font-bold md:text-5xl text-3xl'>JUNAID ABBAS</span></li>
          <li><p className='text-2xl   md:text-4xl font-bold text-black '>I'm a <span className='md:text-4xl text-2xl font-bold text-[#002d5b]'>
            <ReactTyped
             strings={[
              'Frontend Developer',
              'Backend Developer',
             ]}
             typeSpeed={150}
             backSpeed={100}
             loop/>
            </span></p></li>
        </ul><br />
        <div className='animate-bounce rounded-full bg-transparent w-10 h-10  bg-black'>
        <FontAwesomeIcon className=' w-[70%] h-[70%] md:w-[100%] md:h-[100%]' style={{color:'#1a3960',}} icon={faArrowDown} />
        </div>
      </div>
      <div ref={AboutRef}><About/></div>
      <Education/>
      <div ref={SkillsRef} className=" md:h-[60vh] text-center  p-8 bg-white font-serif py-14   ">
        <p className='font-bold text-3xl'>My Skills</p><br />
        <div className='grid lg:grid-rows-2 sm:grid-rows-3 grid-rows-6 justify-center   sm:gap-x-20 sm:gap-y-8 gap-y-4 grid-flow-col'>
      <Skills name="HTML" percent="90%"/>
      <Skills name="React" percent="75%"/>
      <Skills name="CSS" percent="90%"/>
      <Skills name="Python" percent="80%"/>
      <Skills name="Javascript" percent="85%"/>
      <Skills name="Django" percent="70%"/>
         </div>
       </div>
       <div ref={ProjectsRef} className="md:h-[65vh] flex flex-col items-center bg-slate-200 py-5  justify-center  text-center  font-serif ">
       <p className='font-bold text-3xl'>Projects</p><br />
       <div className='flex flex-col gap-4 md:flex-row md:gap-10 justify-center'>
       <Projects name="YouTube-Clone (React JS and Tailwind)" image={Youtubeclone} url="https://youtube-g2sj.onrender.com/"/>
       <Projects name="Inventory Management (Django)" image={InventoryManagement} url="https://github.com/JunaidAbbasKaladgi/Inventory_ManagementProject" />
       <Projects name="QuizMaster (React JS)" image={QuizMaster} url="https://quiz-master-jade.vercel.app/" />
       </div>
       </div>
       <div ref={ContactRef} className="md:h-[65vh] flex flex-col items-center py-5  justify-center  text-center  font-serif ">
       <p className='font-bold text-3xl'>Contact Me</p><br />
       <div className='flex flex-col gap-4 md:flex-row md:gap-10    justify-center'>
       <Contact name="Address" text="Naubag Near Bus Stand Vijyapura,Karnataka,India 586101" icons=<FontAwesomeIcon icon={faLocationDot} style={{color:'#ffff',height:35,}} />/>
       <Contact name="Contact Number" text="+919686906851" icons=<FontAwesomeIcon icon={faPhone} style={{color:'#ffff',height:35,}} />/>
       <Contact name="Email Address" text="junaidabbaskaladgi@gmail.com" icons=<FontAwesomeIcon icon={faEnvelope} style={{color:'#ffff',height:35,}} />/>
       </div>
       </div>
       <Footer/>
   </div>
  )
}