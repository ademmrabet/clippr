"use client"

import Link from 'next/link'
import React from 'react'
import LogoSvg from "@/public/images/logo/Logo.svg"
import Image from 'next/image'
import { motion } from "motion/react"

const Navbar = () => {
  return (
    <nav className="  fixed top-0 left-0 right-0 flex justify-between items-center p-[15px]  bg-transparent-sm z-[9999]">
          <div className=" flex w-[25%] justify-center items-center font-Inter font-bold">
            <h2 className='text-white text-[25px]'>Clippr</h2>
          </div>
          <div className='gap-[55px] hidden md:flex text-white text-[17px] font-light'>
            <Link href="/" className=" h-[50%] w-[50%]  hover:bg-gray-500 hover:bg-opacity-25 pl-2 pr-2 rounded-md" > Home </Link>
            <Link href="/about" className=" h-[50%] w-[50%]  hover:bg-gray-500 hover:bg-opacity-25 pl-2 pr-2 rounded-md"> About </Link>
            <Link href="/packs" className=" h-[50%] w-[50%]  hover:bg-gray-500 hover:bg-opacity-25 pl-2 pr-2 rounded-md"> Packs </Link>
            <Link href="/contact" className=" h-[50%] w-[50%]  hover:bg-gray-500 hover:bg-opacity-25 pl-2 pr-2 rounded-md"> Contact </Link>
          </div>
          <div className='flex items-center w-[25%]'>
            <motion.button className="px-6 py-2 rounded-md relative radial-gradient cursor-pointer"
              initial={{ "--x": "100%"}}
              animate={{"--x": "-100%"}}
              whileTap={{ scale: 0.97 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
              }}
            >
              <span className='text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask'>
                Get Started
              </span>
              <span 
                className='block absolute inset-0 rounded-md p-px linear-overlay'
              />
            </motion.button>
          </div>
      </nav>
  )
}

export default Navbar