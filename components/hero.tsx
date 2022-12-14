import React from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from "react-scroll";
import Link from 'next/link';

import Socials from "./socials"

import TwitterIcon from "assets/twitter-svgrepo-com.svg"
import FacebookIcon from "assets/facebook-svgrepo-com.svg"
import InstagramIcon from "assets/instagram-svgrepo-com.svg"
import LinkedinIcon from "assets/linkedin-svgrepo-com.svg"
import TiktokIcon from "assets/tiktok-svgrepo-com.svg"
import TelegramIcon from "assets/telegram-svgrepo-com.svg"
import YoutubeIcon from "assets/youtube-svgrepo-com.svg"

const hero = () => {
  return (
    <>
        <div className='px-0 sm:px-10 lg:pl-0 grid grid-cols-1 z-20 relative'>
          <div className='text-center grid justify-center justify-items-center'>
            <Socials />
            <h3 className='text-4xl font-light gradientText'>Blockchain Specialist</h3>
            <h1 className='text-6xl font-bold'>Tashina Jackson</h1>
            <p className='w-1/2 justify-self-center pt-4'>Tashina is a blockchain protocol specialist motivating professionals to embrace decentralization for an open and accessible future.</p>
            <div className='flex flex-col mx-auto sm:mx-0 sm:flex-row sm:space-x-4 mt-5'>
              <Link href="/articles">
                <button className='card-style backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'>Articles</button>
              </Link>
            </div>
            <div className='pt-6'>
              <Link href="/app">
                <button className='btn-style backdrop-blur-lg px-10 py-4 rounded-lg uppercase font-bold text-xl tracking-widest cursor-pointer'>Learn Web3</button>
              </Link>

            </div>
          </div>
          <div className='rounded-xl mt-6 p-5 w-full grid grid-cols-1'>
          </div>
        </div>
    </>
  )
}

export default hero