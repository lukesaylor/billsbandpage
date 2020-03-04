import React from 'react';
import 'tachyons';
import './Home.css';
import aboutlogo from './aboutpagelogo.png';
 
//2476897149229397


 



function About () {
    return (


            <article className="mw8  center  br3 pa3 pa4-ns mv5 ba b--black-10">
                <div className="tc">
                    <img src={aboutlogo} className="h3" alt="the bills"/>
                    
                </div>
                    <p className="lh-copy measure center f4 black-70">
                    The Bills are a three-piece band based out of Ocean City, MD. Formed in 2016 by like minded musicians with bills to pay. 
                     With an amassed musical experience of 60+ years The Bills consists of Nathan Nasteff on bass, Lukas Saylor on guitar, and Benjamin Davis on drums.
                      Our Musical choices range from secure to obscure with the common goal of providing fresh yet familiar covers of songs you love but don't hear everyday.
                    </p>
                    
                    
            </article>
        

    )
}

export default About;