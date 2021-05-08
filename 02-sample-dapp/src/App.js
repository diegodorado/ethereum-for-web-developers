import React, {useState, useEffect} from 'react'
import './App.css';
import {getDeployedContract, getAccount, requestAccount} from './eth/network'

const CONTRACT_ADDRESS = '0x1D2561D18dD2fc204CcC8831026d28375065ed53'
const Counter = ({account}) => {

  const [contract, setContract ] = useState(null)
  const [value, setValue ] = useState(null)

  const fetchContractAsync = async () => {
    const contract = await getDeployedContract(account)
    setContract(contract)
    const value = await contract.methods.value().call()
    setValue(value)
  }

  useEffect( () => {
    fetchContractAsync()
  },[]) // run the effect only once

  const onButtonClick = () => {
    contract.methods.increase().send()
  }

  return (
          <>
            <h2>Connected!</h2>
            <h2>Wallet Address: {account}</h2>
            <h2>Contract value: {value ? value : 'Loading...'}</h2>
            <button onClick={onButtonClick}>Increase</button>
          </>
  )
}


const App = () => {

  // destructuring assignment
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)

  const fetchAccountAsync = async () => {
    const account = await getAccount()
    setAccount(account)
    setLoading(false)
  }

  useEffect( () => {
    fetchAccountAsync()
  },[]) // run the effect only once
  
  const onConnectWalletPress = async () => {
    try {
      const account = await requestAccount()
      setAccount(account)
    } catch (e) {
      /* handle error */
    }
  }

  return (
    <div className="App">
      <h1>Counter DApp</h1>
      {loading ? <h2>Loading...</h2>
        : !account 
        ? <button onClick={onConnectWalletPress}>Connect Wallet</button>
        : <Counter {...{account}} />
      }
    </div>
  )
}

export default App;
