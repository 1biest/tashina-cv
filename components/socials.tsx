import React from 'react'
import Image from 'next/image'

import TwitterIcon from "assets/twitter-svgrepo-com.svg"
import InstagramIcon from "assets/instagram-svgrepo-com.svg"
import LinkedinIcon from "assets/linkedin-svgrepo-com.svg"
import TiktokIcon from "assets/tiktok-svgrepo-com.svg"
import TelegramIcon from "assets/telegram-svgrepo-com.svg"
import YoutubeIcon from "assets/youtube-svgrepo-com.svg"

const Socials = () => {
    return (
        <div className='flex pb-4 space-x-2'>
            <a  target="_blank" href="https://t.me/TashinaJackson" rel="noopener noreferrer">
                <button className='card-style to-transparent backdrop-blur-lg px-2 pt-2 pb-1 rounded-lg mt-5 uppercase font-bold text-xs tracking-widest cursor-pointer'>
                    <Image src={TelegramIcon} height="20px" width="20px" className='place-self-center' />
                </button>
            </a>
            <a  target="_blank" href="https://www.linkedin.com/in/tashina-jackson/" rel="noopener noreferrer">
                <button className='card-style to-transparent backdrop-blur-lg px-2 pt-2 pb-1 rounded-lg mt-5 uppercase font-bold text-xs tracking-widest cursor-pointer'>
                    <Image src={LinkedinIcon} height="20px" width="20px" className='place-self-center' />
                </button>
            </a>
            <a  target="_blank" href="https://twitter.com/TashinaJackson_" rel="noopener noreferrer">
                <button className='card-style to-transparent backdrop-blur-lg px-2 pt-2 pb-1 rounded-lg mt-5 uppercase font-bold text-xs tracking-widest cursor-pointer'>
                    <Image src={TwitterIcon} height="20px" width="20px" className='place-self-center' />
                </button>
            </a>
            <a  target="_blank" href="https://www.tiktok.com/@tashina.jackson" rel="noopener noreferrer">
                <button className='card-style to-transparent backdrop-blur-lg px-2 pt-2 pb-1 rounded-lg mt-5 uppercase font-bold text-xs tracking-widest cursor-pointer'>
                    <Image src={TiktokIcon} height="20px" width="20px" className='place-self-center' />
                </button>
            </a>
            <a  target="_blank" href="https://www.youtube.com/channel/UCXQX--R7v87Zkr2MFQTX0_w?sub_confirmation=1" rel="noopener noreferrer">
                <button className='card-style to-transparent backdrop-blur-lg px-2 pt-2 pb-1 rounded-lg mt-5 uppercase font-bold text-xs tracking-widest cursor-pointer'>
                    <Image src={YoutubeIcon} height="20px" width="20px" className='place-self-center' />
                </button>
            </a>
            <a  target="_blank" href="https://www.instagram.com/tashina.jackson1/" rel="noopener noreferrer">
                <button className='card-style to-transparent backdrop-blur-lg px-2 pt-2 pb-1 rounded-lg mt-5 uppercase font-bold text-xs tracking-widest cursor-pointer'>
                    <Image src={InstagramIcon} height="20px" width="20px" className='place-self-center' />
                </button>
            </a>
        </div>
    );
}

export default Socials;