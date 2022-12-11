import React from 'react'
import { getKeplr, useAccount, useActiveChain, useConnect, useDisconnect, getWallet, useBalances, useBalanceStaked, useCheckWallet} from "graz";

const WalletInfo = () => {
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
  return (
    <div className='space-y-8 h-screen w-full justify-center content-center text-center'>
        <div className='space-y-8'>
            <h1 className='text-3xl font-bold mt-0'>Your connected!</h1>
            <p className='text-sm pt-4 max-w-lg m-auto text-left'>You can always disconnect by clicking the button that looks like this.</p>
            <button
                className='backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'
                onClick={handleConnect}
                >
                    {isConnected ? "Disconnect" : "Connect Wallet"}
            </button>
            <p className='text-sm pt-4 max-w-lg m-auto text-left'>Below we have some information about your wallet. We do not have any of this information. Your wallet fills in the details directly just for you. That is the magic of decentralization!</p>
            {/**<div>
                <div
                className={isConnected ? "m-auto w-[200px] text-center bg-green-500 py-2 px-4 rounded-xl" : "m-auto w-[200px] text-center bg-red-500 py-2 px-4 rounded-xl"}
                >
                    <p>{isConnected ? "Connected" : "Disconnected"}</p>
                </div>
            </div>*/}
            <div className='space-y-1'>
                <p>Blockchain: {activeChain?.chainId}</p>
                <p>Your wallet name: {account?.name}</p>
                <p>Wallet address: {account?.bech32Address}</p>
                {isLoading ? (
                <>
                </>
                ) : (
                <>
                    <p>Balances:</p>
                    <ul>
                    {data?.map((coin) => (
                        <li key={coin.denom}>
                        <p>{coin.amount} {coin.denom}</p>
                        </li>
                    ))}
                    </ul>
                </>
                )}
            </div>
        </div>
    </div>
  )
}

export default WalletInfo