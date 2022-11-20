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
        <div className='md:max-w-[50%] ml-0 sm:ml-20 z-20 relative'>
            <Socials />
            <h3 className='text-2xl font-light gradientText'>Blockchain Specialist</h3>
            <h1 className='text-5xl font-bold'>Tashina Jackson</h1>
            <p className='text-sm pt-4'>Tashina is a blockchain protocol specialist motivating professionals to embrace decentralization for an open and accessible future.</p>
            <div className='flex flex-col sm:flex-row sm:space-x-4'>
              <Link href="/app">
                <button className='bg-gradient-to-tl from-[rgba(180,190,200,0.6)] to-[rgba(230,240,250,0.2)] backdrop-blur-lg px-5 py-2 rounded-lg mt-5 uppercase font-bold text-xs tracking-widest cursor-pointer'>Tutorial</button>
              </Link>
              <Link href="/articles">
                <button className='bg-gradient-to-tl from-[rgba(180,190,200,0.6)] to-[rgba(230,240,250,0.2)] backdrop-blur-lg px-5 py-2 rounded-lg mt-5 uppercase font-bold text-xs tracking-widest cursor-pointer'>Articles</button>
              </Link>
              <ScrollLink to="about"
                    smooth={true}
                    offset={-70}
                    duration={2000}>
                <button className='w-full bg-gradient-to-tl from-[rgba(180,190,200,0.6)] to-[rgba(230,240,250,0.2)] backdrop-blur-lg px-5 py-2 rounded-lg mt-5 uppercase font-bold text-xs tracking-widest cursor-pointer'>About Me</button>
              </ScrollLink>
            </div>
        </div>
    </>
  )
}

export default hero