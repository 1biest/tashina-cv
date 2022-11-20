import React from 'react'
import LessonsCard from './lessons-card';
import data from "../data/lessons.json";

const lessons = () => {
  return (
    <>
        <div className='z-20'>
            <h3 className='text-2xl font-light text-center'>Tutorials</h3>
            <p className='text-sm font-extralight pt-4 text-center'>Everything you need to know to get started with Web3 in the Cosmoverse,<br /> the interconnected web of blockchains.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-4'>
                <LessonsCard data={data} />
            </div>
        </div>
    </>
  )
}

export default lessons