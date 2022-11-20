import React from 'react'
import Image from 'next/image'

import EthereumLogo from "assets/Ethereum.svg"
import CosmosLogo from "assets/Cosmos.svg"
import OsmosisLogo from "assets/Osmosis.svg"
import JunoLogo from "assets/Juno.svg"
import BitcoinLogo from "assets/Bitcoin.svg"

const logos = () => {
  return (
    <div className='flex justify-center space-x-20 items-center'>
        <Image src={BitcoinLogo} height="22px" width="200px" className='place-self-center opacity-50' />
        <Image src={EthereumLogo} height="40px" width="200px" className='place-self-center' />
        <Image src={CosmosLogo} height="120px" width="200px" className='place-self-center' />
        <Image src={OsmosisLogo} height="100px" width="200px" className='place-self-center' />
        <Image src={JunoLogo} height="60px" width="200px" className='place-self-center invert opacity-10 translate-y-1' />
    </div>
  )
}

export default logos