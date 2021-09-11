import React from 'react';

const Feature = ({features, setFeatureOnClick, insuranceQty}) => {

    let picture;

    return(
        <div>

            {features.map((feature)=> {
                const {id, title, img, onClicked} = feature;
                
                return (
                    <div key={id} className='feature'>
                        <div>
                      
                            <div>
                                {picture = <img 
                                src={img} 
                                alt={title} 
                                className='icon'
                                height="50" 
                                width="50"
                                onClick = {() => setFeatureOnClick(onClicked)}
                                />}
                            </div>

                            <div style={{display:'flex'}}>
                                <p className='icon-title'>{title}</p>   
                                <div style={{marginTop: '0', marginBottom: '2', borderRadius:'50%', color: 'blue', }}>
                                    {(insuranceQty===0) ? null : (picture.props.alt === 'insurance') ? insuranceQty : null}  
                                </div>    
                            </div>

                        </div>

                    </div>
                )
            })}

        </div>
    );

};


export default Feature ;




