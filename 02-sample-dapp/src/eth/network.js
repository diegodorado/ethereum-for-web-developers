import Web3 from 'web3'
//import Artifacts from '../contracts/Artifacts.json'

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
  return accounts[0]
}

export {getWeb3, getAccount}

/*
const Counter = ( web3, address, options = {} ) => {
  const name = "contracts/Counter.sol:Counter"
  const {abi} = Artifacts.contracts[name]
  return new web3.eth.Contract(abi, address, options )
}

const getDeployed = async () => {
 const web3 = getWeb3();
 const data = await web3.eth.requestAccounts()

 const accounts = await web3.eth.getAccounts()
 const from = accounts[0]
 console.log(from,web3.eth.defaultAccount)

 const addr = "0x1D2561D18dD2fc204CcC8831026d28375065ed53";
 return Counter(web3, addr, { from });
}

*/
