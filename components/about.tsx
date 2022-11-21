import React from 'react'
import Image from 'next/image'

import Socials from "./socials"

import Tashina1 from "assets/photos/20210701_175905.jpg"
import Tashina2 from "assets/photos/20210117_120141_HDR.jpg"
import Tashina3 from "assets/photos/20210810_193004.jpg"
import Tashina4 from "assets/photos/20210824_181202.jpg"
import Tashina5 from "assets/photos/20220119_141046.jpg"
import Tashina6 from "assets/photos/20220930_181856.jpg"


const about = () => {
  return (
    <>
        <div id='about' className='w-full z-20 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-x-6'>
            <div className=''>
                <h3 className='text-4xl font-light gradientText'>About Tashina</h3>
                <p className='text-sm pt-4'>Tashina is a Web3 coach motivating individuals and professionals to get involved with decentralized systems.</p>
                <p className='text-sm pt-4'>Residing in Canada, Tashina spends time hiking the rocky mountains and traveling to new inspiring destinations.</p>
                <p className='text-sm pt-4'>Say hi! Reach out over social media and lets work togeher in making Web3 inclusive for everyone.</p>
                <Socials />
                <div className='mt-4 rounded-xl backdrop-blur-2xl'>
                    <Image src={Tashina4} className='rounded-xl grayscale contrast-[110%] opacity-80 grayscale hover:grayscale-0 transition duration-500' />
                </div>
            </div>
            <div className="lg:pt-10 contrast-[110%] opacity-80">
                <div className='py-2'>
                    <Image src={Tashina1} className='rounded-xl grayscale hover:grayscale-0 transition duration-500' />
                </div>
                <div className='py-2'>
                    <Image src={Tashina5} className='rounded-xl grayscale hover:grayscale-0 transition duration-500' />
                </div>
                <div className='py-2'>
                    <Image src={Tashina2} className='rounded-xl grayscale hover:grayscale-0 transition duration-500' />
                </div>
            </div>
            <div className="lg:pt-40 contrast-[110%] opacity-80">
                <div className='py-2'>
                    <Image src={Tashina3} className='rounded-xl grayscale hover:grayscale-0 transition duration-500' />
                </div>
                <div className='py-2'>
                    <Image src={Tashina6} className='rounded-xl grayscale hover:grayscale-0 transition duration-500' />
                </div>
            </div>
        </div>
    </>
  )
}

export default about