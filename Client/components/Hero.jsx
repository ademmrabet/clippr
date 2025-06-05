import React from 'react'
import Image from 'next/image'
import Laptop from '@/public/images/landing_page/laptop.svg'


const Hero = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center p-6 pt-25 bg-cover bg-center bg-no-repeat bg-[url(/images/landing_page/background.png)] text-white">
      <div>
        <h2 className="font-Inter text-[35px]">Social Media Done for You</h2>
        <p className="font-Inter font-thin text-[25px]">Ads, Content, Growth handled</p>
      </div>
      <div className="bottom-0">
        <Image src={Laptop} alt="Laptop" width={650} height={650}/>
      </div>
    </div>
  )
}

export default Hero