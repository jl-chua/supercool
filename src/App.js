import './App.css';
import React, {useState, useEffect} from "react";
import web3 from './web3';
import HAV from './harvest';
import Feature from './Feature';
import featureData from './featureData';
import Points from './Points';
import db from "./firebase";
import { collection, onSnapshot, query } from 'firebase/firestore';

console.log(web3.version);

function App() {

  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('-');
  const [show, setShow] = useState(false);

  const [features] = useState(featureData);
  const [featureOnClick, setFeatureOnClick] = useState("./images/main.png");
  const [player, setPlayer] = useState([{}]);

  const [water, fertilizer, spin, seed, insurance, soil] = features;

  let [gold, setGold] = useState(0);
  let [harvest, setHarvest] = useState(0);
  let [insuranceQty,setInsuranceQty] = useState(0); 
  const [feedBackMsg, setfeedBackMsg] = useState("");

  const getAddress = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
  }

  const getBalance = async () => {
    const balanceHavToken = await HAV.methods.balanceOf(account).call();
    setBalance(balanceHavToken);
  }

  useEffect(()=> {
    getAddress();
  }, []);
  

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setPlayer(
        querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, }))
      )
    }); return unsubscribe
  }, [])

  
  useEffect(() => {
    setGold(player[0].goldpoint)
    setHarvest(player[0].harvestpoint)
  }, [player])
  

  const tokenHandler = () => {
    setShow(true);
    getBalance();
  };

  const featureOnClickHandler = (link) => {
    setFeatureOnClick(link);
    setfeedBackMsg();
  };


  const hurricaneDamage = 200;
  const insurancePayout = insurance.benefit; 

  const hurricaneHandler = () => {
    setFeatureOnClick('./images/hurricane.png');
    setHarvest(prevHarvest => prevHarvest - hurricaneDamage);
    if (insuranceQty>0) {
      setGold(prevGold => prevGold + insurancePayout);
      setInsuranceQty(prevInsuranceQty => prevInsuranceQty - 1);
      setfeedBackMsg(`Lucky, you brought insurance. Payout is ${insurancePayout} GOLD.`)
    } else
    setfeedBackMsg(`You lost ${hurricaneDamage} harvest. NO payout as no insurance!`)
  };


  const insuranceCost = insurance.cost;
  const waterCost = water.cost;
  const waterBenefit = water.benefit;

  const sufficentGold = (itemCost) => {
    if (gold-itemCost>-1) {
      return true;
    }
  };

  const storyHandler = () => {
    if (story.props.src === "./images/insurance.png") {
      if (sufficentGold(insuranceCost)) {
        var confirmBuy = window.confirm("Spend " + insuranceCost + " Gold to buy 1 insurance?");
        if (confirmBuy === true) {
            setGold(prevGold => prevGold - insuranceCost);
            setInsuranceQty(prevInsuranceQty => prevInsuranceQty + 1);
        } else 
        return null;
      } else 
      window.alert("You have insufficent Gold!");
 
    } else if (story.props.src === "./images/water.png") {
      if (sufficentGold(waterCost)) {
        setHarvest(prevHarvest => prevHarvest + waterBenefit);
        setGold(prevGold => prevGold - waterCost)
      } else
      window.alert("You have insufficent Gold!")
    };
  };



  let story;

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
    
      <Points gold={gold}  harvest={harvest}/>

      <Feature setFeatureOnClick={featureOnClickHandler} features={features} insuranceQty={insuranceQty} />

      <div> 
        <p className='feedback-msg'>{feedBackMsg}</p>
      </div>      

      <div className='story'>
        {story = <img onClick={storyHandler} alt="story" src={featureOnClick} width="428" /> }
      </div>

      {/* {console.log(story.props.src)} */}
  
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
