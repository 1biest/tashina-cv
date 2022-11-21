import React from 'react'
import PodcastCard from './podcast-card';
import data from "../data/podcast.json";

const podcast = () => {
  return (
    <>
        <div className='z-20 relative'>
            <h3 className='text-2xl font-light  text-center'>Podcast</h3>
            <p className='text-sm pt-4 max-w-[100%] text-center'>Go in depth with us as we discuss what crypto and the cosmos is all about.<br/>The unique features and abilities of this new technology.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-4'> 
                <PodcastCard data={data} />
            </div>
        </div>
    </>
  )
}

export default podcast