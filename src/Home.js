import React from 'react';
import 'tachyons';
import './Home.css';
import billstranslogo from './billstranslogo.png';
 
//2476897149229397

 



function Home () {
    return (


            <article className="mw8  center  br3 pa3 pa2-ns mv5 ba b--black-10">
                <div className="tc">
                    <img src={billstranslogo} className="translogo" alt="the bills"/>
                    
                </div>
                    <p className=" measure-wide center f4 black-70">
                    
                    </p>
                    
                    
            </article>
        

    )
}

export default Home;