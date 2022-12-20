import { ChangeEvent, Component, MouseEvent, useEffect, useState } from "react"
import Head from 'next/head'
import { getKeplr, useAccount, useActiveChain, useConnect, useDisconnect, getWallet, useBalances, useBalanceStaked, useCheckWallet} from "graz";

import ConnectWallet from "../components/app/ConnectWallet";
import AppHeading from "../components/app/AppHeading";
import WalletInfo from "../components/app/WalletInfo";
import AddWallet from "../components/app/AddWallet"

export default function Home() {
  const { connect, status } = useConnect();
  const { data: account, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const activeChain = useActiveChain();
  const address = account?.bech32Address;
  const { data, isLoading } = useBalances(address);
  const { data: isSupported } = useCheckWallet();

  function handleConnect() {
    return isConnected ? disconnect() : connect();
  }

  useEffect(() => {
    if (!isConnected) return;
    console.log("connected")

  });


  return (
    <div className='z-10'>
      <>
        <div className='min-h-full hue-rotate-[60deg] blur-3xl'>
          <video autoPlay loop muted className="absolute scale-[100%]">
            <source src='/tashina-cv-bg.mp4' type="video/mp4" />
          </video>
        </div>
      </>
      <div className='relative flex justify-center'>
        <Head>
          <title>Tashina Jackson</title>
          <meta name="description" content="Tashina is a Web3 coach motivating blockchain developers to design with sustainably and inclusivity for an open and accessible future for all." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='justify-self-center max-w-6xl w-full m-10 p-1 pb-80 pt-8 space-y-20'>
          <AppHeading />

          {isConnected ? (<WalletInfo />) : (isSupported ? (<ConnectWallet />) : (<AddWallet />))}

        </div>
      </div>
    </div>
  )
}