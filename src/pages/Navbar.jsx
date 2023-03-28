import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Logo from '../../images/Optisaver__.png'

const Navbar = () => {
  const { isConnected } = useAccount();
  
  // Replace "YOUR_RAINBOWKIT_URL_HERE" with the actual URL for the Rainbowkit website
  const rainbowkitUrl = encodeURIComponent("YOUR_RAINBOWKIT_URL_HERE");
  const wagmiConnectUrl = `https://www.wagmii.com/connect?returnUrl=${rainbowkitUrl}`;

  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      background: '#000000', 
      color: '#FFB60A', 
      padding: "1rem", 
      width: "100%", 
      position: "fixed", 
      top: 0, 
      left: 0,
      zIndex: 1,
    }}>
      <div>
        <a href="#">
          <img src={Logo} alt="Logo" style={{height:'100px' }} />
        </a>
      </div>
      <ul style={{ 
        display: "flex", 
        justifyContent: "flex-end", 
        alignItems: "center", 
        listStyle: "none", 
        marginRight:'2rem' 
      }}>
        <li ><a href="#Intro" style={{ color: "#ffd700", textDecoration: "none", margin: "0 1rem" }}>Save</a></li>
        <li><a href="#about" style={{ color: "#ffd700", textDecoration: "none", margin: "0 1rem" }}>About</a></li>
        <li><a href="#tips" style={{ color: "#ffd700", textDecoration: "none", margin: "0 1rem" }}>Tips</a></li>
        <li><ConnectButton /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
