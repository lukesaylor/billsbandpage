import React from 'react';
import './App.css';
import Navigation from './Navbar';
import Home from './Home';
import Media from './Media';
import Contact from './Contact';
import About from './About';
import Privacy from './Privacy';
import 'tachyons';
import { HashRouter as Router, Route, Link } from "react-router-dom";

  
   



function App() {
  return (
    <Router>
      <body>
        <div>
        <Navigation/> 
        
          <Route path="/" exact render={ 
            () => {
              return (<Home/>)
            }
          }/>
          <Route path="/Media" exact render={
            () => {
              return (<Media/>)
            }          
          }/>
          <Route path="/Contact" exact render={
            () => {
              return (<Contact/>)
            }          
          }/>
          <Route path="/About" exact render={
            () => {
              return (<About/>)
            }
                      
          }/>
          <Route path="/Privacy" exact render={
            () => {
              return (<Privacy/>)
            }
                      
          }/>
          <div className="privacy"><Link to="/Privacy"  >Privacy Policy</Link></div>
        </div>
      </body>
    </Router>
     );
}

export default App;
