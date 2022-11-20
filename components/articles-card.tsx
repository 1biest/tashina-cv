import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const PodcastCard = (props) => {

  return (
    <>
        {props.data.map (content =>(
            <div key={content.id} className='p-8 px-4 lg:px-8 bg-gradient-to-tl from-[rgba(180,190,200,0.6)] to-[rgba(230,240,250,0.2)] backdrop-blur-2xl rounded-xl space-y-8 flex flex-col'>
                <h3 className='text-4xl py-4 font-semibold text-left gradientText'>{content.title}</h3>
                <p className='text-md'>{content.desc}</p>
                <div className='flex self-end'>
                <Link href="/articles">
                    <button
                      className='bg-gradient-to-tl from-[rgba(180,190,200,0.6)] to-[rgba(230,240,250,0.2)] backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'>Read articles</button>
                </Link>
                </div>
            </div>
        ))
        }
    </>
  );
}

export default PodcastCard;