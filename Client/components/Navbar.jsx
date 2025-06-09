"use client"

import Link from 'next/link'
import React from 'react'
import LogoSvg from "@/public/images/logo/Logo.svg"
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, useTime, useTransform } from "motion/react"
import { useState, useEffect } from 'react'

const Navbar = () => {

  const time = useTime();

  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #097dff, #575aff, #cb80ff, #f88bff, #ffa8f7)`;
  })


  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 20){
      setHidden(true);
    }else{
      setHidden(false);
    }
  })

  return (
    <motion.nav
      variants={{
        visible:{ y:0},
        hidden:{ y:"-100%" }
      }} 
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="  fixed top-0 left-0 right-0 flex justify-between items-center p-[15px]  bg-transparent-sm z-[9999]">
          <div className=" flex w-[25%] justify-center items-center font-Inter font-bold">
            <h2 className='text-white text-[25px]'>Clippr</h2>
          </div>
          <div className=' items-center gap-[55px] hidden md:flex text-white text-[17px] font-light border-white border-[1px] rounded-full p-2'>
            <Link href="/" className=" h-[50%] w-[50%]  hover:bg-gray-500 hover:bg-opacity-25 pl-2 pr-2 rounded-md" > Home </Link>
            <Link href="/about" className=" h-[50%] w-[50%]  hover:bg-gray-500 hover:bg-opacity-25 pl-2 pr-2 rounded-md"> About </Link>
            <Link href="/packs" className=" h-[50%] w-[50%]  hover:bg-gray-500 hover:bg-opacity-25 pl-2 pr-2 rounded-md"> Packs </Link>
            <Link href="/contact" className=" h-[50%] w-[50%]  hover:bg-gray-500 hover:bg-opacity-25 pl-2 pr-2 rounded-md"> Contact </Link>
          </div>
          <div className='flex items-center w-[25%]'>
           <div className='relative'>
            <button 
            className='relative bg-black text-white font-Inter font-light px-3 py-2 rounded-md hover:bg-neutral-900 transition-colors duration-200 z-10 cursor-pointer'
            onClick={() => alert("Button Clicked!")}>Get Started</button>
            <motion.div className='absolute -inset-[1px] rounded-md'
            style={{
              background : rotatingBg
            }}/>
           </div>
          </div>
      </motion.nav>
  )
}

export default Navbar