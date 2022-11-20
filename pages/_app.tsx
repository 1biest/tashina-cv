import '../styles/globals.css'
import '../styles/font/font.css';

import { WalletProvider } from '@cosmos-kit/react';
import { chains, assets } from 'chain-registry';
import { wallets } from '@cosmos-kit/keplr';

import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider
      chains={chains}
      assetLists={assets}
      wallets={wallets}
    >
      <GoogleAnalytics trackPageViews />
      <Analytics />
      <Component {...pageProps} />

    </WalletProvider>
  );
}

export default MyApp
