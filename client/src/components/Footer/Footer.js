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
                <Link>Home</Link>
                <Link>About</Link>
            </Router>
            <Router className = "siteMap">
                <Link>F.A.Q</Link>
                <Link>Privacy Policy</Link>
            </Router>
            <Router className = "social">
                <Link>
                    <img src = {github}/>                    
                </Link>
                <Link>
                    <img src = {email}/>
                </Link>
            </Router>
        </footer>
    );
}

export default Footer;