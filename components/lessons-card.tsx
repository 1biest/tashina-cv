import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'

import Tutorial1 from 'assets/thumbnails/tutorial-1-keplr.png'

const PodcastCard = (props) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
        {
        props.data.map (content =>(
            <div key={content.id} className='p-8 bg-gradient-to-br from-[rgba(30,40,60,0.5)] to-transparent backdrop-blur-2xl rounded-xl space-y-4'>
            <div className='pb-4 w-full flex justify-center invert'>
                <Image height='100px' width='100px' src={content.thumb} className="rounded-lg"/>
            </div>
                <h3 className='text-xl font-semibold text-center gradientText'>{content.title}</h3>
                <p className='text-sm font-extralight'>{content.desc}</p>
                <div className='flex justify-end'>
                  <button
                    onClick={openModal}
                    className='justify-self-end bg-gradient-to-tl from-[rgba(30,40,60,0.5)] to-transparent backdrop-blur-lg  px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'>View Video</button>
                </div>
            </div>
        ))
        }



      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-gradient-to-br from-[rgba(30,40,60,0.5)] to-transparent backdrop-blur-2xl rounded-xl p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Create a Wallet
                  </Dialog.Title>
                  <div className="mt-2 w-[800px]">
                    <p className="text-sm text-gray-500">
                    First thing you need to get started is your own wallet.
                    </p>
                        <video autoPlay loop muted className="py-6">
                          <source src='/tutorials/01 - install keplr.mp4' type="video/mp4" />
                        </video>
                  </div>

                  <div className='flex justify-right'>
                    <button
                      type="button"
                      className='justify-self-end bg-gradient-to-tl from-[rgba(30,40,60,0.5)] to-transparent backdrop-blur-lg  px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'
                      onClick={closeModal}
                    >
                      exit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default PodcastCard;