import React from 'react';
import {Link} from 'react-router-dom';
import github from '../../assets/github.svg';
import email from '../../assets/email.svg';
import './Footer.css';

const Footer =() => {
    return (
        <footer className = 'toes'>
            <div className = "siteMap">
                <Link to = '/'>Home</Link>
                <Link to = '/about'>About</Link>
            </div>
            <div className = "siteMap">
                <Link to = '/faq'>F.A.Q</Link>
                <Link to = '/privacy'>Privacy Policy</Link>
            </div>
            <div className = "social">
                <a 
                href = 'https://github.com/wadboy70/spotifyplaylistgenerator'
                target = '_blank'
                rel="noopener noreferrer"
                >
                    <img src = {github} alt = 'github'/>                    
                </a>
                <a href = 'mailto:s.oluwaleimu@gmail.com'>
                    <img src = {email} alt = 'email'/>
                </a>
            </div>
            <p className = "blueFont">© Lorem 2020</p>
        </footer>
    );
}

export default Footer;