import React from 'react';
import 'tachyons';
import './Home.css';
import contactlogo from './contactpagelogo.png';
 
//2476897149229397


 



function Contact () {
    return (


            <article className="mw8  center  br3 pa3 pa4-ns mv5 ba b--black-10">
                <div className="tc">
                    <img src={contactlogo} className="h3" alt="the bills"/>
                    
                </div>
                    <h1 className="lh-copy measure  tc center f3 black-70">
                     The Bills can be contacted for booking or general inquiries at:
                     </h1>
                     <ul className="center pa5 f4">
                         <li>Email: <br></br>BandofBills@Gmail.com</li>
                         <li>Facebook:<br></br> @3bills or www.facebook.com/3bills</li>
                         <li>Phone/Text: <br></br>1-302-339-2012</li>
                     </ul>
                    
                    
            </article>
        

    )
}

export default Contact;