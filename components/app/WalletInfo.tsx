import React, { useState } from 'react'
import { getKeplr, useAccount, useActiveChain, useConnect, useDisconnect, getWallet, useBalances, useBalanceStaked, useCheckWallet} from "graz";
import { convertFromMicroDenom, formatWalletAddress } from "../../hooks/conversion";

import Balances from './Balances';

const WalletInfo = () => {
    const { connect, status } = useConnect();
    const { data: account, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const activeChain = useActiveChain();
    const address = account?.bech32Address;
    const { data, isLoading } = useBalances(address);
    const { data: coin } = useBalanceStaked(address);
    const { data: isSupported } = useCheckWallet();

    const [isBalanceShown, setIsBalanceShown] = useState(false);
    const handleBalanceShownClick = event => {
      setIsBalanceShown(true);
    };
  
    function handleConnect() {
      return isConnected ? disconnect() : connect();
    }

  return (
    <div className='space-y-8 h-screen w-full justify-center content-center text-center'>
        <div className='space-y-8'>
            {!isBalanceShown && (
                <>
                    <h1 className='text-4xl font-bold gradientText mt-0'>Your connected!</h1>
                    <p className='text-sm pt-4 max-w-lg m-auto text-left'>You can always disconnect by clicking the button that looks like this.</p>
                    <button
                        className='backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'
                        onClick={handleConnect}
                        >
                            {isConnected ? "Disconnect" : "Connect Wallet"}
                    </button>
                    <p className='text-sm pt-4 max-w-lg m-auto text-left'>Below is some information about your wallet. None of this information gets uploaded onto our website. Your wallet fills in the details directly on your browser. That is the magic of decentralization!</p>
                    {/**<div>
                        <div
                        className={isConnected ? "m-auto w-[200px] text-center bg-green-500 py-2 px-4 rounded-xl" : "m-auto w-[200px] text-center bg-red-500 py-2 px-4 rounded-xl"}
                        >
                            <p>{isConnected ? "Connected" : "Disconnected"}</p>
                        </div>
                    </div>*/}
                    <div className='flex space-y-2 space-x-2 justify-center'>
                        <div className='card-style p-4 px-6 m-2 rounded-xl'>
                            <h3 className='text-lg font-semibold'>Wallet Name</h3>
                            <p>This is the name you gave your wallet in Keplr.</p> 
                            <p className='gradientText font-bold text-2xl p-4'>{account?.name}</p>
                        </div>
                        <div className='card-style p-4 px-6 m-2 rounded-xl'>
                            <h3 className='text-lg font-semibold'>Connected Blockchain</h3>
                            <p>Your wallet can connect to any number of blockchain on Cosmos. This is the blockchain you are currently connected to:</p> 
                            <p className='gradientText font-bold text-2xl p-4 uppercase'>{activeChain?.chainId}</p>
                            <p>Cosmos Hub is the primary chain of Cosmos.</p> 
                        </div>
                    </div>
                    <div className='flex space-y-2 space-x-2 justify-center'>
                        <div className='card-style p-4 px-6 m-2 rounded-xl'>
                            <h3 className='text-lg font-semibold'>Wallet Address</h3>
                            <p>This is your full wallet address.<br />Your wallet will have a different address for each blockchain.</p> 
                            <p className='gradientText font-bold text-2xl p-4'>{account?.bech32Address}</p>
                            <p>Typically, you will see it shortened to look someething like this:</p>
                            <p className='gradientText font-bold text-2xl p-4'>{formatWalletAddress(account?.bech32Address)}</p>
                        </div>
                    </div>
                    <p>Next, we will look at the balances of your wallet.</p>
                    <button
                        className='backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'
                        onClick={handleBalanceShownClick}
                        >
                            View Balances
                    </button>
                </>
            )}

            {isBalanceShown && (
            <Balances />
            )}
        </div>
    </div>
  )
}

export default WalletInfo