import React from 'react'
import Link from 'next/link';
import { getKeplr, useAccount, useActiveChain, useConnect, useDisconnect, getWallet, useBalances, useBalanceStaked, useCheckWallet} from "graz";

const AppHeading = () => {
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
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 content-center align-center'>
      <div className=''>
          <Link href="/">
            <div className='cursor-pointer px-8'>
              <h3 className='text-xl text-center font-light gradientText'>Blockchain Specialist</h3>
              <h1 className='text-2xl font-bold text-center'>Tashina Jackson</h1>
            </div>
          </Link>
          {/**<div className='mt-4'>
              <Link href="articles">
                  <button
                  className='card-style backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'>Articles</button>
              </Link>
          </div>*/}
      </div>
      <div>
        <h1 className='text-xl font-bold mt-0'>Learning Web3 on Cosmos</h1>
        <p className='text-sm pt-1'>Guided introduction to staking on Cosmos with the Keplr wallet.</p>
      </div>
    </div>
    </>
  )
}

export default AppHeading