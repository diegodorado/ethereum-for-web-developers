import Web3 from 'web3'
import Artifacts from '../contracts/Artifacts.json'

let _web3
const getWeb3 = () => {
  if(!_web3) {
    _web3 = new Web3(Web3.givenProvider)
  }
  return _web3
}

const getAccount = async () =>{
  const web3 = getWeb3();
  const accounts = await web3.eth.getAccounts()
  return accounts.length > 0  ?  accounts[0] : null
}

const requestAccount = async () =>{
  const web3 = getWeb3();
  const accounts = await web3.eth.requestAccounts()
  return accounts.length > 0  ?  accounts[0] : null
}

const getBalance = async (address) =>{
  const web3 = getWeb3();
  const balance = await web3.eth.getBalance(address)
  return balance
}


const Counter = ( web3, address, options = {} ) => {
  const name = "contracts/Counter.sol:Counter"
  const {abi} = Artifacts.contracts[name]
  return new web3.eth.Contract(abi, address, options )
}

const getDeployedContract = async (from) => {
 const web3 = getWeb3();
 const addr = "0x1D2561D18dD2fc204CcC8831026d28375065ed53";
 return Counter(web3, addr, { from });
}

export {getWeb3, getAccount, requestAccount, getBalance, getDeployedContract}
