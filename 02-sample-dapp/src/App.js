import React, {useState} from 'react'
import './App.css';
import {getWeb3, getAccount} from './eth/network'

const App = () => {

  const [ address, setAddress ] = useState(null)

  const onConnectWalletPress = async () => {
    const account = await getAccount()
    setAddress(account)
  }

  return (
    <div className="App">
      <h1>COUNTER</h1>
      <h2>wallet address: {address}</h2>
      <button onClick={onConnectWalletPress}>Connect Wallet</button>
    </div>
  );
}

export default App;
