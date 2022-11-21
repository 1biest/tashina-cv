import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import Tutorial1 from 'assets/thumbnails/tutorial-1-keplr.png'

const PodcastCard = (props) => {

  return (
    <>
        {
        props.data.map (content =>(
          <div key={content.id} className='p-8 px-4 lg:px-8 bg-gradient-to-br from-[rgba(180,190,200,0.6)] to-[rgba(230,240,250,0.2)] backdrop-blur-2xl rounded-xl space-y-4'>
          <div className='pb-4 w-full flex justify-center invert'>
              <Image height='100px' width='100px' src={content.thumb} className="rounded-lg"/>
          </div>
              <h3 className='text-xl font-semibold text-center gradientText'>{content.title}</h3>
              <p className='text-sm'>{content.desc}</p>
              <div className='flex justify-end'>
                <Link href="/app">
                  <button
                    className='justify-self-end bg-gradient-to-tl from-[rgba(180,190,200,0.6)] to-[rgba(230,240,250,0.2)] backdrop-blur-lg  px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'>Learn How</button>
                </Link>
              </div>
          </div>
        ))
        }
    </>
  );
}

export default PodcastCard;