import React, {useState} from 'react'
import './App.css';
import {getWeb3, getAccount, getBalance} from './eth/network'

const App = () => {

  // destructuring assignment
  const [account, setAccount] = useState(null)
  const [balance, setBalance] = useState(null)

  const onConnectWalletPress = async () => {
    const account = await getAccount()
    const balance = await getBalance(account)
    setAccount(account)
    setBalance(balance)
  }

  return (
    <div className="App">
      <h1>COUNTER</h1>
      <h2>Wallet Address: {account}</h2>
      <h2>Balance: {balance}</h2>
      <button onClick={onConnectWalletPress}>Connect Wallet</button>
    </div>
  );
}

export default App;
