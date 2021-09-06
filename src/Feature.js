import React from 'react';

const Feature = ({features}) => {

    let link;

    const onClickHandler = () => {
        link = "abc"
    };

    return(
        <div>

            {features.map((feature)=> {
                const {id, title, img} = feature;

                return (
                    <div key={id} className='feature'>
                        <div className='icon'>
                            <img 
                            src={img} 
                            alt={title} 
                            className='icon'
                            height="50" 
                            width="50"
                            onClick = {onClickHandler}
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


