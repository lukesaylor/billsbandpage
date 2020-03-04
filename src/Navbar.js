import React from 'react';
import './Navbar.css';
import billslogo from './billslogo.png';
import media from './media.png';
import contact from './contact.png';
import about from './about.png';
import fbicon from './fbicon.png';
import youtubeicon from './youtubeicon.png';
import { Link } from "react-router-dom";


function Navigation () {
    return (
      
        <div className="topnav">
            
            <Link to="/Media" className="buttons"><img src={media} alt="media"/></Link>
            <Link to="/Contact" className="buttons"><img src={contact} alt="contact"/></Link>
            <Link to="/About" className="buttons"><img src={about} alt="about"/></Link>
            <Link to="/" classname="homelogo"><img src={billslogo} alt="the bills" /></Link>
            <a className="facebook" href="http://www.facebook.com/3bills/"><img className="facebook" src={fbicon} alt="medialinks" /></a>
            <img className="youtube" src={youtubeicon} alt="youtube" />

        </div>
    
    )
}

export default Navigation;