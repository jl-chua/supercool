import './App.css';
import React, {useState, useEffect} from "react";
import web3 from './web3';
import superCool from './superCool';
import Feature from './Feature';
import featureData from './featureData';
//import Story from './Story';

console.log(web3.version);

function App() {

  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('0');

  const [features] = useState(featureData);
  const [featureLink, setFeatureLink] = useState("./images/main.png");
 
  
  const getAddress = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
  }

  const getBalance = async () => {
    const balanceRes = await superCool.methods.balanceOf(account).call();
    setBalance(balanceRes);
  }

  useEffect(()=> {
    getAddress();
  }, []);
  
  const tokenHandler = () => {
    getBalance();
  };
  
 //console.log(account);


  const setFeatureLinkHandler = () => {
    setFeatureLink("./images/insurance.png")
   }

  return (
    <div className="App">

    <p>Account: {account} </p>
    <p>Balance: {balance} SPC</p>

    <button onClick = {tokenHandler} >Tokens</button>

    <Feature setFeatureLink={()=> setFeatureLinkHandler()} features={features} ></Feature>
    {/* <Story featureLink={featureLink}></Story> */}


    <div>
      <img alt="story" src={featureLink} width="428" />
    </div>
  


    </div>
  );
}

export default App;
