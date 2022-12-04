import Head from 'next/head'
import { Hero, About, Lessons, Podcast, Mission, Logos, Experience, Articles } from '../components'
import data from "../data/articles.json";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='z-10'>
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
                    <Link href="app">
                        <button
                        className='card-style backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'>Tutorials</button>
                    </Link>
                </div>
                <h1 className='text-2xl font-bold mt-12'>Articles</h1>
                <p className='text-sm pt-4'>Dig deeper into the engineering and philosophy of web3.</p>
            </div>
            <>
                {data.map (content =>(
                    <div key={content.id} id="{divid}" className='p-8 px-4 lg:px-8 pb-16 card-style backdrop-blur-2xl rounded-xl space-y-8 flex flex-col'>
                        <h3 className='text-4xl py-4 font-semibold text-left gradientText'>{content.title}</h3>
                        <p className='text-lg'>{content.desc}</p>
                        <p className='text-lg'>{content.p1}</p>
                        <p className='text-lg'>{content.p2}</p>
                        <p className='text-lg'>{content.p3}</p>
                    </div>
                ))
                }
            </>
          </div>
          <>
            <div className='absolute -z-10 w-[400%] md:w-full min-h-full mix-blend-darken grayscale-[50%]'>
              <video autoPlay loop muted className="absolute -z-10 scale-[300%] md:scale-[180%] -right-[200px] md:left-0 md:translate-x-[200px] translate-y-[1400px] md:translate-y-[300px]">
                <source src='/tashina-cv-bg-light.mp4' type="video/mp4" />
              </video>
            </div>
            <div className='absolute -z-10 w-[400%] sm:w-full min-h-full mix-blend-darken grayscale-[50%}'>
              <video autoPlay loop muted className="absolute -z-10 scale-[180%] -right-[200px] md:left-0 translate-x-[100px] md:translate-x-[200px] translate-y-[2800px] md:translate-y-[2300px]">
                <source src='/tashina-cv-bg-light.mp4' type="video/mp4" />
              </video>
            </div>
            <div className='absolute -z-10 w-[400%] sm:w-full min-h-full mix-blend-darken grayscale-[50%] translate-x-200'>
              <video autoPlay loop muted className="absolute rotate-180 -z-10 scale-[180%] translate-x-200 md:translate-x-[600px] translate-y-[6000px] md:translate-y-[3200px]">
                <source src='/tashina-cv-bg-light.mp4' type="video/mp4" />
              </video>
            </div>
          </>
        </div>
      </div>
    </>
  )
}