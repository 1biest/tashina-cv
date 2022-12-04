import React from 'react'
import Image from 'next/image'

const mission = () => {
  return (
    <>
        <div className='z-20 relative'>
            <h3 className='text-2xl font-light text-center'>Blockchain Specialist</h3>
            <p className='text-sm pt-4 max-w-[70%] m-auto text-center'>Blockchain has already started to transform our world.<br /> These ideas are evolving the way we work and play online.</p>
            <div className='grid grid-cols-1 md:grid-cols-4 items-center justify-between mt-10 px-4 md:px-20 card-style backdrop-blur-2xl rounded-xl'>
                <div className='col-span-1'>
                    <h1 className='text-center pt-8 md:pt-0 text-6xl lg:text-[140px] font-semibold opacity-30'>1</h1>
                </div>
                <div className='p-8 px-4 lg:px-8 space-y-4 col-span-3'>
                    <h3 className='text-3xl font-semibold text-center md:text-left gradientText'>Self Sovereign</h3>
                    <p className='text-md text-left'>True ownership of your assets. Nothing stands between you and your digital posessions on the blockchian. You have full control to manage your wealth.</p>
                </div>
            </div>
            <div className='md:-translate-x-20 grid grid-cols-1 md:grid-cols-4 items-center justify-between mt-10 px-4 md:px-20 card-style backdrop-blur-2xl rounded-xl'>
                <div className='p-8 px-4 lg:px-8 space-y-4 col-span-3 order-last md:order-first'>
                    <h3 className='text-3xl font-semibold text-center md:text-left md:text-right gradientText'>Decentralized</h3>
                    <p className='text-md text-left md:text-right'>Crypto is for the people, by the people. No corporation or central entity has control of your intellectual property. Everyone collectively owns the network. It doesn&apos;t matter who you are, or where you are from, everyone is welcome!</p>
                </div>
                <div className='col-span-1'>
                    <h1 className='text-center pt-8 md:pt-0 text-6xl lg:text-[140px] font-semibold opacity-30'>2</h1>
                </div>
            </div>
            <div className='md:translate-x-20 grid grid-cols-1 md:grid-cols-4 items-center justify-between mt-10 px-4 md:px-20 card-style backdrop-blur-2xl rounded-xl'>
                <div className='col-span-1'>
                    <h1 className='text-center pt-8 md:pt-0 text-6xl lg:text-[140px] font-semibold opacity-30'>3</h1>
                </div>
                <div className='p-8 px-4 lg:px-8 space-y-4 col-span-3'>
                    <h3 className='text-3xl font-semibold text-center md:text-left gradientText'>Censorship Resistant</h3>
                    <p className='text-md text-left'>This technology is censorship resistant. Nobody has the authority to alter your right to be a part of this new world. It is accessible to all, including you, so lets get started!</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default mission