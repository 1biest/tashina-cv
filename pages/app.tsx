import Head from 'next/head'
import { Hero, About, Lessons, Podcast, Mission, Logos, Experience, Articles } from '../components'
import data from "../data/articles.json";
import Link from 'next/link';


export default function Home() {
  return (
    <div className='z-10 overflow-hidden min-h-screen'>
      <div className='relative flex justify-center'>
        <Head>
          <title>Tashina Jackson</title>
          <meta name="description" content="Tashina is a Web3 coach motivating blockchain developers to design with sustainably and inclusivity for an open and accessible future for all." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='justify-self-center max-w-6xl w-full m-10 p-1 pb-80 pt-8 space-y-20'>
          <div className='md:max-w-[50%] z-20 relative'>
              <div className='space-x-4'>
                  <Link href="/">
                      <button
                      className='bg-gradient-to-tl from-[rgba(180,190,200,0.6)] to-[rgba(230,240,250,0.2)] backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'>Homepage</button>
                  </Link>
                  <Link href="articles">
                      <button
                      className='bg-gradient-to-tl from-[rgba(180,190,200,0.6)] to-[rgba(230,240,250,0.2)] backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'>Articles</button>
                  </Link>
              </div>
              <h1 className='text-5xl font-bold mt-12'>Learning Web3</h1>
              <p className='text-sm pt-4'>Guided introduction to staking on Cosmos with the Keplr wallet.</p>
              <div className='mt-40'>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}