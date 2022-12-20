import React from 'react'

const Staking = () => {
  return (
    <div className='space-y-8 h-screen w-full justify-center content-center text-center'>
        <div className='flex flex-col space-y-8'>
            <div className='card-style rounded-xl flex space-y-2 space-x-6 py-4 justify-center content-center items-center'>
                <div className=''>
                    <h3 className='text-sm font-semibold'>Wallet Name</h3>
                    <p className='gradientText font-bold text-md p-2'>{account?.name}</p>
                </div>
                <div className=''>
                    <h3 className='text-sm font-semibold'>Connected Blockchain</h3>
                    <p className='gradientText font-bold text-md p-2 uppercase'>{activeChain?.chainId}</p>
                </div>
                <div className=''>
                    <h3 className='text-sm font-semibold'>Wallet Address</h3>
                    <p className='gradientText font-bold text-md p-2'>{formatWalletAddress(account?.bech32Address)}</p>
                </div>
                <div>
                    <button
                        className='backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'
                        onClick={handleConnect}
                        >
                            {isConnected ? "Disconnect" : "Connect Wallet"}
                    </button>
                </div>
            </div>
            <div className='flex space-x-2 justify-center'>
                <div className='card-style p-4 px-6 rounded-xl'>
                    <h3 className='text-lg font-semibold'>Balances</h3>
                    {isLoading ? (
                    <>
                    </>
                    ) : (
                    <>
                        <ul>
                        {data?.map((coin) => (
                            <li key={coin.denom}>
                                <p className='gradientText font-bold uppercase text-2xl p-4'>{Number(coin?.amount)/ 1e6} {convertFromMicroDenom(coin?.denom)}</p>
                            </li>
                        ))}
                        </ul>
                    </>
                    )}
                </div>
                <div className='card-style p-4 px-6 rounded-xl'>
                    <h3 className='text-lg font-semibold'>Staked Balance</h3> 
                    <p>This is how much <string className="uppercase font-bold">{convertFromMicroDenom(coin?.denom)}</string> you are currently staking on <string className="uppercase font-bold">{activeChain?.chainId}</string>.</p> 
                    <span className='gradientText font-bold uppercase text-2xl p-4'>
                        {Number(coin?.amount)/ 1e6} {convertFromMicroDenom(coin?.denom)}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Staking