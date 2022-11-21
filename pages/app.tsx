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
          <div className='lg:max-w-[50%] z-20 relative'>
                <Link href="/">
                  <div className='cursor-pointer'>
                    <h3 className='text-2xl font-light gradientText'>Blockchain Specialist</h3>
                    <h1 className='text-5xl font-bold'>Tashina Jackson</h1>
                  </div>
                </Link>
              <div className='flex space-x-4 mt-4'>
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
          <>
            <div className='absolute -z-10 w-[400%] md:w-full min-h-full mix-blend-darken'>
              <video autoPlay loop muted className="opacity-50 absolute -z-10 scale-[300%] md:scale-[180%] -right-[200px] md:left-0 md:translate-x-[200px] translate-y-[1400px] md:translate-y-[300px]">
                <source src='/tashina-cv-bg-light.mp4' type="video/mp4" />
              </video>
            </div>
          </>
      </div>
    </div>
  )
}