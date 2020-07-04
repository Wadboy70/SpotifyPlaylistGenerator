import React, { useEffect, useRef } from 'react';
import Title from '../Title/Title';
import LoginButton from '../LoginButton/LoginButton';
import './HomeStage.css';
import spotify from '../../assets/spotify.svg';
import {TweenMax} from 'gsap';

const Stage = () => {
    let title = useRef(null);
    useEffect(()=>{
        TweenMax.from(title, {y:'5%',duration:.5,opacity:0})
    },[]);
    return(
        <div className = "stage" ref = {e => title = e}>
            <div className = "siteTitle">
                <Title
                    text = "Playlist Generator"
                    color = "whiteFont"
                    link = "/"
                />
                <Title
                    text = "Yada Yada"
                    color = "whiteFont"
                    type = "subtitle"
                />
            </div>
            <LoginButton
                text = 'Log In to Spotify'
                img = {spotify}
                alt = "spotify logo"
                color = 'lightBlue'
                hoverColor = 'white'
            />
        </div>
    );
}

export default Stage;