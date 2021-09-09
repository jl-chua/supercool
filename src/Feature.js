import React from 'react';

const Feature = ({features, setFeatureOnClick}) => {


    return(
        <div>

            {features.map((feature)=> {
                const {id, title, img, onClicked, itemQty} = feature;

                return (
                    <div key={id} className='feature'>
                        <div>
                            {/* <div style={{display:'flex'}} > */}

                                <img 
                                src={img} 
                                alt={title} 
                                className='icon'
                                height="50" 
                                width="50"
                                onClick = {() => setFeatureOnClick(onClicked)}
                                />

                                {/* <p style={{marginTop: '0', marginBottom: '1', backgroundColor: '', borderRadius:'50%' }}>
                                {itemQty}
                                </p> */}

                            {/* </div> */}
                        
                                <p className='icon-title'>{title}</p>

                        </div>

                    </div>
                );
            })}

        </div>
    );

};


export default Feature ;


