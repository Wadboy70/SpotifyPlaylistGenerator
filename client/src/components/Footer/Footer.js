import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import github from '../../assets/github.svg';
import email from '../../assets/email.svg';
import './Footer.css';

const Footer =({

}) => {
    return (
        <footer className = 'toes'>
            <Router className = "siteMap">
                <Link to = '/'>Home</Link>
                <Link to = '/about'>About</Link>
            </Router>
            <Router className = "siteMap">
                <Link to = '/faq'>F.A.Q</Link>
                <Link to = '/privacy'>Privacy Policy</Link>
            </Router>
            <div className = "social">
                <a 
                href = 'https://github.com/wadboy70/spotifyplaylistgenerator'
                target = '_blank'>
                    <img src = {github}/>                    
                </a>
                <a href = 'mailto:s.oluwaleimu@gmail.com'>
                    <img src = {email}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;