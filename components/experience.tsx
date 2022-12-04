import React from 'react'
import Image from 'next/image'

import SandboxImg from "assets/sandbox-land.png"
import StakefishImg from "assets/stakefish-icon.png"

const experience = () => {
  return (
    <>
        <div className='z-20 relative'>
            <h3 className='text-2xl font-light text-center'>Experience</h3>
            <p className='text-sm pt-4 max-w-[70%] m-auto text-center'>Just some of the rewarding experiences Tashina has participated in with blockchain and Proof of Stake.</p>
            <div className='md:-translate-x-20 grid grid-cols-1 md:grid-cols-4 items-center justify-between mt-10 px-4 md:px-20 card-style backdrop-blur-2xl rounded-xl'>
                <div className='col-span-1 scale-[70%] grayscale contrast-[200%]'>
                    <Image src={SandboxImg} />
                </div>
                <div className='p-8 px-4 lg:px-8 space-y-4 col-span-3'>
                    <h3 className='text-3xl font-semibold text-left gradientText'>The Sandbox</h3>
                    <p className='text-md text-left'>As a proud Sandbox land holder, Tashina has invested in virtual real estate on one of the most promising platforms of the metaverse.</p>
                </div>
            </div>
            <div className='md:translate-x-20 grid grid-cols-1 md:grid-cols-4 items-center justify-between mt-10 px-4 md:px-20 card-style backdrop-blur-2xl rounded-xl'>
                <div className='p-8 px-4 lg:px-8 space-y-4 col-span-3'>
                    <h3 className='text-3xl font-semibold text-right gradientText'>stakefish</h3>
                    <p className='text-md text-right'>stakefish is one of the leading validators for proof of stake blockchains. As part of the marketing team, Tashina created influential and inspiring content promoting blockchains.</p>
                </div>
                <div className='col-span-1 scale-[60%] grayscale contrast-[200%]'>
                    <Image src={StakefishImg} />
                </div>
            </div>
        </div>
    </>
  )
}

export default experience