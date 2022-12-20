import React from 'react'
import { getKeplr, useAccount, useActiveChain, useConnect, useDisconnect, getWallet, useBalances, useBalanceStaked, useCheckWallet, useBalance} from "graz";
import { convertFromMicroDenom, formatWalletAddress } from "../../hooks/conversion";
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';

const Balances = () => {
    const { connect, status } = useConnect();
    const { data: account, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const activeChain = useActiveChain();
    const address = account?.bech32Address;
    const { data, isLoading } = useBalances(address);
    const { data: coin } = useBalanceStaked(address);
    const { data: isSupported } = useCheckWallet();
  
    function handleConnect() {
        return isConnected ? disconnect() : connect();
    }
    
    const { data: atomBalance, refetch } = useBalance("atom");
    console.log(atomBalance)

    window.addEventListener('load', () => {
        new RampInstantSDK({
            hostAppName: 'Tashina',
            hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
            fiatCurrency: "USD",
            swapAsset: "ATOM",
            variant: 'embedded-desktop',
            containerNode: document.getElementById('ramp-container'),
        }).show();
    });

    return (
        <div className='w-full justify-center content-center text-center'>
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
                <div className='flex space-x-8 justify-center'>
                    <div className='card-style p-4 px-6 rounded-xl'>
                        <h3 className='text-lg font-semibold'>Balances</h3>
                        <p>This is what you have available in your wallet on the <span className="uppercase font-bold">{activeChain?.chainId}</span> blockchain.</p> 
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
                        {Number(atomBalance?.amount) === 0 ? (
                            <>
                                <h3 className='text-lg font-semibold gradientText'>You have ATOM!</h3>
                                <p>With your balance of ATOM, you can now stake!</p>
                                <p>Next, we will go to the staking page, where we will explain how staking works and how to get started.</p>
                                <p>Feel free to add more to your wallet using Ramp below while you are here.</p>
                                <div className='py-4'>
                                    <a  target="_blank">
                                        <button className='backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'>
                                            <span>Staking</span>
                                        </button>
                                    </a>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className='text-2xl font-semibold gradientText'>No Balance!</h3>
                                <p>You need ATOM to stake!</p>
                                <p>We recommend using Ramp to purchase digital assets. Use Ramp below to add ATOM to your wallet.</p>
                            </>
                        )} 
                    </div>
                </div>
                <div className='flex space-x-2 justify-center'>
                    <div className='card-style p-4 px-6 rounded-xl'>
                        <h3 className='text-lg font-semibold'>Ramp</h3>
                        <p>Ramp is the easiest way to onboard into crypto. Using Google Pay or Apple Pay is the most convenient way for Canadians to onboard.<br />Your wallet address and has already been added into the form. Input how much you would like to transfer, and click next.</p>
                        <div className='py-4'>
                            <a  target="_blank" href="https://ramp.network/buy/?userAddress={account?.bech32Address}?defaultAsset=ATOM_ATOM" rel="noopener noreferrer">
                                <button className='backdrop-blur-lg px-5 py-2 rounded-lg uppercase font-bold text-xs tracking-widest cursor-pointer'>
                                    <span>Ramp</span>
                                </button>
                            </a>
                        </div>
                        <div id='ramp-container' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Balances