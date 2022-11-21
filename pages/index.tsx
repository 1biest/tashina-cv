import Head from 'next/head'
import { Hero, About, Lessons, Podcast, Mission, Logos, Experience } from '../components'

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
          <div className='justify-self-center max-w-6xl w-full m-0 lg:m-10 p-4 pb-20 pt-28 lg:pt-80 space-y-20 lg:space-y-40'>
            <Hero />
            <Logos />
            <Mission />
            <Lessons />
            <Experience />
            {/*<Podcast />*/}
            <About />
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
