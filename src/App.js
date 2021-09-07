import './App.css';
import React, {useState, useEffect} from "react";
import web3 from './web3';
import harvest from './harvest';
import Feature from './Feature';
import featureData from './featureData';
import Coins from './Coins'
//import Story from './Story';

console.log(web3.version);

function App() {

  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('-');
  const [show, setShow] = useState(false);

  const [features] = useState(featureData);
  const [featureLink, setFeatureLink] = useState("./images/main.png");
 
  
  const getAddress = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
  }

  const getBalance = async () => {
    const balanceRes = await harvest.methods.balanceOf(account).call();
    setBalance(balanceRes);
  }

  useEffect(()=> {
    getAddress();
  }, []);
  
 
  const tokenHandler = () => {
    setShow(true);
    getBalance();
  };

 //console.log(account);

  const setFeatureLinkHandler = (link) => {
    setFeatureLink(link);
   };


  return (
    <div className="App">

      <p style={{color: "grey"}}> Account: </p>
      {show?<p>{account}</p>:null}
      <p> <span style={{color: "grey"}}> Balance: </span> {balance} <span style={{color: "grey"}}> HAV </span> </p>

      <div className='user-container'>
        <img className='user-icon' alt="profile" src ="./images/Brad1.png" height="50" width="50"/>
      <button className='user-icon' onClick = {tokenHandler} >Harvest Tokens</button>
    </div>
    
    <Coins/>

    <Feature setFeatureLink={setFeatureLinkHandler} features={features} />

    {/* <Story featureLink={featureLink}></Story> */}

    <div>
      <img alt="story" src={featureLink} width="428" />
    </div>
  
    </div>
  );
}

export default App;
