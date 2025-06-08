"use client";

import React from 'react'
import { useRef, useEffect, useState } from 'react';


const Packs = () => {

  const [plan, setPlan] = useState('monthly');

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center text-white min-h-screen p-4'>
      {/* Text Section */}
      <div className='flex flex-col items-center justify-center text-center p-4 pt-[180px]'>
        <h2 className='text-[24px] font-Inter font-semibold'>Choose a plan that's perfect for you</h2>
        <p className='text-[14px] font-Inter'>Explore our flexible pricing options designed to fit every budget</p>
      </div>
      {/* Monthly/yearly toggle */}
      <div className='flex items-center justify-center mt-4'>
        <div className='flex items-center bg-gray-500 bg-opacity-25 rounded-md '>
          <button 
            className={`flex items-center justify-center w-[75px] h-[35px] rounded-md text-[13px] font-Inter font-semibold transition-all duration-200 ease-in-out ${
              plan === 'monthly' 
                ? 'bg-white text-black' 
                : 'text-white hover:text-gray-300'
            }`} 
            onClick={() => setPlan('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`flex items-center justify-center w-[75px] h-[33px] rounded-md text-[13px] font-Inter font-semibold transition-all duration-200 ease-in-out ${
              plan === 'annually' 
                ? 'bg-white text-black' 
                : 'text-white hover:text-gray-300'
            }`} 
            onClick={() => setPlan('annually')}
          >
            Annually
          </button>
        </div>
        {/* Backdrop */}
        <div 
          style={{
            width: plan === 'monthly' ? '75px' : '75px',
            left: plan === 'monthly' ? '0px' : '75px',
          }}
          className=''
          ></div>
      </div>
      {/* Pricing Cards Section */}
       <div className='flex flex-row items-center justify-center gap-6 m-6'>
        {/* Starter Card */}
        <div className='bg-gray-950 w-[350px] h-[500px] rounded-md p-4 flex flex-col'>
          <div className='p-2'>
            <h3 className='text-[25px] font-Inter font-semibold'>Starter</h3>
            <p className='text-[14px] text-gray-400'>Professionals who need a consistent presence.</p>
            <div className='text-[29px] font-Inter font-semibold'>$299/month</div>
          </div>
          <svg height="50" width="300" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="10" x2="350" y2="10" style={{stroke:'#FFFFFF',width:1}} />
          </svg>
          {/* Features List */}
          <ul className='text-[18px] text-gray-400 mt-4 list-disc p-2'>
            <li>1 platform (FB or Meta) </li>
            <li>8 posts/Month (designed + written)</li>
            <li>2 reels/month</li>
            <li>Basic community management (Comment replies, inbox monitoring)</li>
            <li>1 ad campaign/month (up to $100 in ad spend, strategy + setup)</li>
            <li>Monthly performance report</li>
          </ul>
        </div>

        {/* Growth Card */}
        <div className='bg-gray-950 w-[350px] h-[500px] rounded-md p-4 flex flex-col'>
          <div className='p-2'>
            <h3 className='text-[25px] font-Inter font-semibold'>Growth</h3>
            <p className='text-[14px] text-gray-400'>Small businesses and brands looking to grow</p>
            <div className='text-[29px] font-Inter font-semibold'>$499/month</div>
          </div>
          <svg height="50" width="300" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="10" x2="350" y2="10" style={{stroke:'#FFFFFF',width:1}} />
          </svg>
          {/* Features List */}
          <ul className='text-[14px] text-gray-400 mt-4 list-disc p-2'>
            <li>2 Platforms (IG + FB or IG + TikTok)</li>
            <li>12 custom posts/month (Branded, designed, scheduled)</li>
            <li>4 short-form Reels/month</li>
            <li>Community Management (DMs, comments)</li>
            <li>2 Ad Campaigns/month (strategy, setup, basic targeting)</li>
            <li>Bi-Weekly Performance Reports</li>
            <li><span>BONUS</span> : Free Media Rebranding</li>
            <li>Instagram Grid Layout refresh (highlights, covers, feed planning)</li>
            <li>Profile bio + CTA Optimization</li>
            <li>light brand identity refresh (Color Scheme + tone of Voice)</li>
          </ul>
        </div>
        {/* Pro Card */}
        <div className='bg-gray-950 w-[350px] h-[500px] rounded-md p-4 flex flex-col'>
          <div className='p-2'>
            <h3 className='text-[25px] font-Inter font-semibold'>Pro</h3>
            <p className='text-[14px] text-gray-400'>Agencies and brands looking to scale</p>
            <div className='text-[29px] font-Inter font-semibold'>$899/month</div>
          </div>
          <svg height="50" width="300" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="10" x2="350" y2="10" style={{stroke:'#FFFFFF',width:1}} />
          </svg>
          {/* Features List */}
          <ul className='text-[15px] text-gray-400 mt-4 list-disc p-2'>
            <li>Up to 3 Platforms managed</li>
            <li>20 posts/month + 8 reels/month</li>
            <li>Weekly Strategy Calls + reporting</li>
            <li>Funnel-based ad campaign design</li>
            <li>Trend + competitor research</li>
            <li>Full Inbox & Comment engagement</li>
            <li><span>FREE</span> full Brand identity Refresh</li>
            <li>Logo Redesign</li>
            <li>Color palette & fonts</li>
            <li>Branded highlight covers</li>
            <li>Profile layout Mockup</li>
            <li>Done-for-you templates for stories/reels</li>
            <li>Branding guide PDF</li>
          </ul>
        </div>
      </div>
  </div>
  )
}

export default Packs