import React, { useEffect } from 'react'
import { getKeplr, useAccount, useActiveChain, useConnect, useDisconnect, getWallet, useBalances, useBalanceStaked, useCheckWallet} from "graz";
import connectWallet from "./ConnectWallet";

const ConnectWallet = () => {
  const { connect, status } = useConnect();
  const { data: account, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  function handleConnect() {
    return isConnected ? disconnect() : connect();
  }

  return (
    <div className='space-y-8 h-screen w-full justify-center content-center text-center'>
        <div className='space-y-10'>
            <h1 className='text-3xl font-bold mt-0'>Connect to the App</h1>
            <p className='text-sm pt-4 max-w-lg m-auto text-left'>Wallets are made to connect with Web3 apps online. Either to make an NFT purchase on a marketplace, or lend your tokens for yield in DeFi, you will first start with connecting your wallet.</p>
            <p className='text-sm pt-4 max-w-lg m-auto text-right'>Click CONNECT WALLET below, and sign a transaction confirming the connection. Once you are connected, we will show you a guide!</p>
            <div className='pt-0 space-y-2'>
                <button
                    className='card-style backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'
                    onClick={handleConnect}
                  >
                      {isConnected ? "Disconnect" : "Connect Wallet"}
                </button>
            </div>
        </div>
    </div>
  )
}

export default ConnectWallet