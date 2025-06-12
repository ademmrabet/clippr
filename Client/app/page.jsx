import Hero from '@/components/Hero'
import React from 'react'
import connectDB from '@/config/database'

const HomePage = async () => {
  await connectDB();
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center text-white min-h-screen'>
      <Hero/>
    </div>
  )
}

export default HomePage