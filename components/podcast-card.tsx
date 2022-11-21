import React from 'react'

const PodcastCard = (props) => {
  return (
    <>
        {
        props.data.map (content =>(
            <div key={content.id} className='grid p-8 bg-gradient-to-br from-[rgba(30,40,60,0.5)] to-transparent backdrop-blur-2xl rounded-xl space-y-4'>
                <div className='pb-4 w-full'>
                    <img src={content.thumb} className="bg-cover h-40 m-auto bg-center bg-100"/>
                </div>
                <h3 className='text-xl font-semibold text-center'>{content.title}</h3>
                <p className='text-sm'>{content.desc}</p>
                <div className='flex justify-end'>
                  <button className='justify-self-end bg-gradient-to-tl from-[rgba(30,40,60,0.5)] to-transparent backdrop-blur-lg px-5 py-2 rounded-lg mt-5 uppercase font-bold text-xs tracking-widest cursor-pointer'>{content.link}</button>
                </div>
            </div>
        ))
        }
    </>
  );
}

export default PodcastCard;