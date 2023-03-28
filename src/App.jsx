import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import 'bulma/css/bulma.min.css';

import { Account } from './components'
import Navbar    from './pages/Navbar'
import Form from './pages/Form'
import Header from './Header'
import Footer from './Footer';
import About from './pages/About';
import Intro from './pages/Intro'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'SaverSmart',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})



export function App() {
  const { isConnected } = useAccount()
  return (
    <>
    
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <div style={{backgroundColor:'#000000'}}>
      {/* <h1>wagmi + RainbowKit + Vite</h1> */}
      <Navbar/>
      <Header/>
      <Intro/>

      {/* <ConnectButton /> */}
      <About/>

      <Form/>
      
      <Footer/>
      {/* <ConnectButton />
      {isConnected && <Account />} */}
      </div>
      </RainbowKitProvider>
    </WagmiConfig>
    </>
  )
}
