import React from 'react';
import 'tachyons';
import './Home.css';
import billstranslogo from './billstranslogo.png';
 
//2476897149229397

 



function Home () {
    const accesstoken = "EAAjMuY65mVUBAOMeEQuiuMYYe03Hf44WZCgMjMESuPbRC17tCLp7115cjZBjIBlafEaKVmuD5Ss9cY6cNnSf4E5RSxYDCffWEsLB22vTs9q3U4X0tI2TUr1crbY7CHQwRgURHeQ33K7HwdQ54TmPGYHxo8gjuN03sQDkmCbsKeQaS9VRqqfZAHRza7rOv0ZD";
     
    var timeticks = Math.round((new Date()).getTime() / 1000);;

    FB.api(         // eslint-disable-line no-undef
        `/3bills/events?since=${timeticks}&access_token=${accesstoken}`,
        'GET',
        {"fields":"name,description,place,start_time,end_time"},
        function(response) {
             debugger;
             alert(JSON.stringify(response))
        }
      );
    

    return (


            <article className="mw8  center  br3 pa3 pa2-ns mv5 ba b--black-10">
                <div className="tc">
                    <img src={billstranslogo} className="translogo" alt="the bills"/>
                </div>
                
                     
                    
                    
                    
                    
            </article>
        

    )
}

export default Home;