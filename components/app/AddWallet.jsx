import React from 'react'
import Image from 'next/image'

import KeplrImg from "assets/keplr-wallet.png"
import KeplrLogo from "assets/keplr-logo.png"

const AddWallet = () => {
const handleClick = () => {
    window.open("https://www.keplr.app/download");

};
  return (
    <div className='space-y-8 h-screen w-full justify-center content-center text-center'>
        <div className='space-y-10'>
            <h1 className='text-3xl font-bold mt-0'>First, you will need a wallet</h1>
            <p className='text-sm pt-4 max-w-lg m-auto text-left'>To hold assets and connect to Web3 applications, you will need a wallet added to your browser. We recommend Keplr, the most popular wallet for Cosmos.</p>
            <p className='text-sm pt-4 max-w-lg m-auto text-right'>Click the link below to go to the official site. Install the extension, follow the steps, and come back here when you are done. Also, be sure to backup that recovery phrase safely!</p>
            <div className='pt-0 space-y-2'>
                <h1 className='text-xl font-bold mt-0'>Official download link</h1>
                <p>|</p>
                <button
                    className='card-style backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'
                    onClick={handleClick}
                >
                    <h1 className='text-xl font-bold mt-2'>Download</h1>
                    <div className=''><Image height="80px" width="200px" src={KeplrLogo} /></div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddWallet