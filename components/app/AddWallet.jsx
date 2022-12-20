import React from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'

import KeplrImg from "assets/keplr-wallet.png"
import KeplrLogo from "assets/keplr-logo.png"

const AddWallet = () => {
const handleClick = () => {
    window.open("https://www.keplr.app/download");

};
  return (
    <div className='space-y-8 h-screen w-full justify-center content-center text-center'>
        <div className='space-y-10'>
            <h1 className='text-3xl font-bold mt-0'>First, you will need a wallet</h1>
            <p className='text-sm pt-4 max-w-lg m-auto text-left'>To hold assets and connect to Web3 applications, you will need a wallet added to your browser. We recommend Keplr, the most popular wallet for Cosmos.</p>
            <div className='card-style rounded-2xl py-8'>
                <Tab.Group>
                    <Tab.List>
                        <Tab className='p-2 px-3 mx-2 my-2 rounded-xl'>Install Keplr</Tab>
                        <Tab className='p-2 px-3 mx-2 my-2 rounded-xl'>Open Extension</Tab>
                        <Tab className='p-2 px-3 mx-2 my-2 rounded-xl'>Create Account</Tab>
                        <Tab className='p-2 px-3 mx-2 my-2 rounded-xl'>Recovery Phrase</Tab>
                        <Tab className='p-2 px-3 mx-2 my-2 rounded-xl'>Input Recovery Phrase</Tab>
                        <Tab className='p-2 px-3 mx-2 my-2 rounded-xl'>Success!</Tab>
                    </Tab.List>
                    <Tab.Panels className="my-4">
                        <Tab.Panel>
                            <p>Install the extension on Chrome or Firefox.</p>
                            <div className='m-4'>
                                <Image
                                width={900}
                                height={300}
                                src="/tutorials/keplr-add-chrome.png" />
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='px-8'>
                                <p className='pb-2'>Keplr has been added to your browser as an extension.<br />To manage your extension, click on the puzzle piece in the top right of your browser.<br />You can even pin an extension on your browser for easy access!<br />Click on the Keplr logo to open your wallet.</p>
                            </div>
                            <div className='flex space-x-4 m-4'>
                                <div>
                                    <Image
                                    width={470}
                                    height={300}
                                    src="/tutorials/keplr-pin-extension.png" />
                                </div>
                                <div>
                                    <Image
                                    width={500}
                                    height={300}
                                    src="/tutorials/keplr-extension.png" />
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='px-8'>
                                <p className='pb-2'>Lets set up your account.<br />Click Create new account to start the process.<br />You can sign in with Google for a quick setup and easy access, but the tradeoff is that if your Google account is compromised, so is your wallet.<br />The safest way is to create a new account with a new recovery phrase.<br />There are also options to import an existing account, and also from a Ledger hardware wallet.</p>
                            </div>
                            <div className='m-4'>
                                <Image
                                width={800}
                                height={900}
                                src="/tutorials/keplr-new-account.png" />
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='px-8'>
                                <p className='pb-4'>Your recovery phrase, also known as a Mnemonic Seed, gives full access to your wallet.<br />You need to have this saved securely or you may loose your funds forever. I recommend keeping a copy in your safe, and in a secure offsite location, such as a safety deposit box.</p>
                                <p className='pb-2'>You will also need to setup a password. This will be needed to open your browser extension wallet and submit transactions. If you forget your password, you will have to recover your account from your Recovery Phrase.</p>
                            </div>
                            <div className='m-4'>
                                <Image
                                width={500}
                                height={900}
                                src="/tutorials/keplr-recovery-phrase.png" />
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='px-8'>
                                <p className='pb-2'>To prove that you have accurately recorded your recovery phrase,<br />you will now be asked to re-enter it before you can continue.</p>
                            </div>
                            <div className='m-4'>
                                <Image
                                width={600}
                                height={900}
                                src="/tutorials/keplr-input-recovery-phrase.png" />
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='px-8'>
                                <p className='pb-2'>Congratulations! You have created your wallet! <br />You can now come back here to continue your journey into Staking on Cosmos.</p>
                            </div>
                            <div className='m-4'>
                                <Image
                                width={600}
                                height={450}
                                src="/tutorials/keplr-done.png" />
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <p className='text-sm pt-4 max-w-lg m-auto text-left'>Click the link below to go to the official site. Install the extension, follow the steps, and come back here when you are done. Also, be sure to backup that recovery phrase safely!</p>
            <div className='pt-0 space-y-2'>
                <h1 className='text-xl font-bold mt-0'>Official download link</h1>
                <p>|</p>
                <button
                    className='backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'
                    onClick={handleClick}
                >
                    <h1 className='text-xl font-bold mt-2'>Install</h1>
                    <div className=''><Image height="80px" width="200px" src={KeplrLogo} /></div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddWallet