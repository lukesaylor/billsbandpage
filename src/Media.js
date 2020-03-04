import React from 'react';
import 'tachyons';
import './Home.css';
import medialogo from './mediapagelogo.png';
 
//2476897149229397


 



function Media () {
    return (


            <article className="mw8  center  br3 pa3 pa4-ns mv5 ba b--black-10">
                <div className="tc">
                    <img src={medialogo} className="h3" alt="media"/>
                    
                </div>
                    <p className="lh-copy measure center f6 black-70">
                     MEdia
                    </p>
                    
                    
            </article>
        

    )
}

export default Media;