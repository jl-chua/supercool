import './App.css';
import React, {useState, useEffect} from "react";
import web3 from './web3';
import har from './harvest';
import Feature from './Feature';
import featureData from './featureData';
import Coins from './Coins';

console.log(web3.version);

function App() {

  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('-');
  const [show, setShow] = useState(false);

  const [features] = useState(featureData);
  const [featureOnClick, setFeatureOnClick] = useState("./images/main.png");

  let [gold, setGold] = useState(100);
  let [harvest, setHarvest] = useState(500);
  let [insuranceQty,setInsuranceQty] = useState(0); 
  
  const getAddress = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
  }

  const getBalance = async () => {
    const balanceHavToken = await har.methods.balanceOf(account).call();
    setBalance(balanceHavToken);
  }

  useEffect(()=> {
    getAddress();
  }, []);
  
 
  const tokenHandler = () => {
    setShow(true);
    getBalance();
  };

  const featureOnClickHandler = (link) => {
    setFeatureOnClick(link);
   };


let hurricaneDamage = 200;

  const hurricaneHandler = () => {
    setFeatureOnClick('./images/hurricane.png');
    setHarvest(harvest - hurricaneDamage);
    if (insuranceQty>0) {
      setGold(gold + 150);
      setInsuranceQty(insuranceQty - 1);
    }
  };


let insuranceCost = 5;
const waterCost = 20;
const waterBenefit =20;

   const storyHandler = () => {
    if (story.props.src === "./images/insurance.png") {
      if (gold>0 && gold-insuranceCost>-1) {
        var confirmBuy = window.confirm("Spend " + insuranceCost + " Gold to buy 1 insurance?");
        if (confirmBuy === true) {
            setGold(gold -= insuranceCost);
            setInsuranceQty(insuranceQty + 1)
        } else 
        return null;
      } else 
      window.alert("You have insufficent Gold!");
 
    } else if (story.props.src === "./images/water.png") {
      if (gold>0 && gold-waterCost>-1) {
        setHarvest(harvest + waterBenefit);
        setGold(gold - waterCost);
      } else 
      window.alert("You have insufficent Gold!")
    };
   };

let story;

  console.log(gold," ", insuranceQty, " ", harvest);

  return (
  <div className="App-container">

    <div className="App">

      <p style={{color: "grey"}}> Account: </p>
      {show ? <p>{account}</p> : null}
      <p> <span style={{color: "grey"}}> Balance: </span> {balance} <span style={{color: "grey"}}> HAV </span> </p>

      <div className='user-container'>
        <img className='user-icon' alt="profile" src ="./images/Brad1.png" height="50" width="50"/>
        <button className='user-icon' onClick = {tokenHandler} >Harvest Tokens</button>
      </div>
    
      <Coins gold={gold} harvest={harvest}/>

      <Feature setFeatureOnClick={featureOnClickHandler} features={features} />

      <div>
        {story = <img onClick={storyHandler} alt="story" src={featureOnClick} width="428" /> }
      </div>

      {console.log(story.props.src)}
  
    </div>

    <div className="dev-zone">
      <p>developer zone only</p>
      <br/>
      <button onClick={hurricaneHandler} >hurricane</button>
      <br/>
      <br/>
      This area is to simulate a hurricane
    </div>

  </div>
  );
}

export default App;
