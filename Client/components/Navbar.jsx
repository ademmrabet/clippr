import Link from 'next/link'
import React from 'react'
import LogoSvg from "@/public/images/logo/Logo.svg"
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="  fixed top-0 left-0 right-0 flex justify-between items-center p-[15px]  bg-transparent-sm z-[9999]">
          <div className="w-[250px] justify-center items-center pl-[25px]">
            <Image src={LogoSvg} alt="Clippr Logo" width={100} height={50} className="w-24 h-auto" />
          </div>
          <div className='gap-9 hidden md:flex text-white text-[17px] font-light'>
            <Link href="/" className=" h-[50%] w-[50%]  hover:bg-gray-500 hover:opacity-25 pl-2 pr-2 rounded-md" > Home </Link>
            <Link href="/about"> About </Link>
            <Link href="/contact"> Packs </Link>
            <Link href="/login"> Contact </Link>
          </div>
          <div className='flex items-center'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2"> Get Started </button>
          </div>
      </nav>
  )
}

export default Navbar