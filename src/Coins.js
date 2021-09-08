import React from 'react';

const Coins = ({gold, harvest}) => {

    return(
    
        <div className='coin-container'>
            <img className='coin-icon' alt="gold" src ="./images/icon_gold.png" />
            <img className='coin-icon' alt="harvest" src ="./images/icon_harvest.png" />
            <div style={{justifyContent: 'space-evenly', display: 'flex', color: 'grey'}}>
                <div>{gold}</div>
                <div>{harvest}</div>
            </div>       
        </div> 
    );
};

export default Coins;

