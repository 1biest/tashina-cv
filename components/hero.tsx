import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll";

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
        <div className='max-w-[50%] z-20 relative'>
            <Socials />
            <h3 className='text-2xl font-light gradientText'>Blockchain Specialist</h3>
            <h1 className='text-5xl font-bold'>Tashina Jackson</h1>
            <p className='text-sm font-extralight pt-4'>Tashina is a Web3 coach motivating buisness and society to embrace decentralization for an open and accessible future for all.</p>
            <Link to="about"
                  smooth={true}
                  offset={-70}
                  duration={2000}>
              <button className='bg-gradient-to-tl from-[rgba(30,40,60,0.5)] to-transparent backdrop-blur-lg px-5 py-2 rounded-lg mt-5 uppercase font-bold text-xs tracking-widest cursor-pointer'>Learn more</button>
            </Link>
        </div>
    </>
  )
}

export default hero