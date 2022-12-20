import '../styles/globals.css'
import '../styles/font/font.css';
import { AppProps } from 'next/app';

//import { GrazProvider, mainnetChains } from 'graz';
import dynamic from 'next/dynamic';
const GrazProvider = dynamic(() => import('graz').then((module) => module.GrazProvider))

function MyApp({ Component, pageProps }: AppProps) {
   return (
    <GrazProvider
    // optional
    //grazOptions={{
    //  defaultChain: mainnetChains.cosmos,
    //}}
  >
      <Component {...pageProps} />
    </GrazProvider>
   );
}

export default MyApp