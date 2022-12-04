import '../styles/globals.css'
import '../styles/font/font.css';
import { GrazProvider, mainnetChains } from "graz";

function MyApp({ Component, pageProps }) {
   return (
    <GrazProvider
    // optional
    grazOptions={{
      defaultChain: mainnetChains.cosmoshub,
    }}
  >
      <Component {...pageProps} />
    </GrazProvider>
   )
}

export default MyApp
