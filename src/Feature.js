import React from 'react';

const Feature = ({features, setFeatureLink}) => {


    return(
        <div>

            {features.map((feature)=> {
                const {id, title, img, featureLink} = feature;

                return (
                    <div key={id} className='feature'>
                        <div className='icon'>
                            <img 
                            src={img} 
                            alt={title} 
                            className='icon'
                            height="50" 
                            width="50"
                            onClick = {() => setFeatureLink(featureLink)}
                            />

                            <p>{title}</p>

                        </div>

                    </div>
                );
            })}

        </div>
    );

};


export default Feature ;


