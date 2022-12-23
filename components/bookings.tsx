import React from 'react'
import Image from 'next/image'

import tashinaVideoCall from "assets/photos/tashina-zoom.png"
import Link from 'next/link'

const bookings = () => {
  return (
    <>
        <div className='z-20 relative'>
            <div className='flex items-center justify-between mt-10 px-4 card-style backdrop-blur-2xl rounded-xl'>
                <div className='w-full pl-4'>
                    <h3 className='text-3xl font-semibold text-center md:text-left gradientText'>Book Introductory Meeting</h3>
                    <p className='text-md text-left'>Book a meeting with Tashina to discuss the potential of bringing blockchain to your application or mission.</p>
                    <div className='flex justify-end mt-5'>
                      <Link href="https://calendly.com/tashinajackson" passHref={true}>
                        <a target="_blank" rel="noopener noreferrer">
                          <button className='card-style backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'>Book Meeting</button>
                        </a>
                      </Link>
                    </div>
                </div>
                <div className='col-span-1 scale-[100%] p-8'>
                    <Image className="rounded-xl" src={tashinaVideoCall} />
                </div>
            </div>
        </div>
    </>
  )
}

export default bookings