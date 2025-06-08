import React from 'react'
import Image from 'next/image'
import Laptop from '@/public/images/landing_page/laptop.svg'


const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-6 pt-[180px] text-white">
      {/* Text Container */}
      <div className="text-center mb-5">
        <h2 className="font-Inter font-semibold text-[40px] pb-5">Social Media Done for You</h2>
        <p className="font-Inter font-thin text-[22px]">Ads, Content, Growth handled</p>
      </div>
      {/* Image Container */}
      <div className="w-full flex justify-center mb-10">
        <Image
          src={Laptop}
          alt="Laptop with social media content"
          className="w-[550px] h-auto"
        />
      </div>
    </div>
  )
}

export default Hero