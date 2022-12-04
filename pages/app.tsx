import { ChangeEvent, Component, MouseEvent, useEffect } from "react"
import Head from 'next/head'
import { Hero, About, Lessons, Podcast, Mission, Logos, Experience, Articles } from '../components'
import data from "../data/articles.json";
import Link from 'next/link';
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

  useEffect 


  return (
    <div className='z-10 overflow-hidden min-h-screen'>
      <div className='relative justify-center max-w-6xl w-full m-10 p-4 pb-80 pt-0 mx-auto'>
        <Head>
          <title>Tashina Jackson</title>
          <meta name="description" content="Tashina is a Web3 coach motivating blockchain developers to design with sustainably and inclusivity for an open and accessible future for all." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AppHeading />
        <div className="mt-40 space-x-10 flex flex-col justify-center space-y-20">
          
          {isConnected ? (<WalletInfo />) : (isSupported ? (<ConnectWallet />) : (<AddWallet />))}

        </div>
      </div>
    </div>
  )
}