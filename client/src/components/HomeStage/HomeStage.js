import React, { useEffect, useRef } from 'react';
import {TweenMax} from 'gsap';
import { promptLogin } from '../../spotify/spotify.functions.js';

import Title from '../Title/Title';
import LoginButton from '../LoginButton/LoginButton';

import spotify from '../../assets/spotify.svg';
import './HomeStage.css';

const HomeStage = () => {
    let title = useRef(null);

    useEffect(()=>{
        TweenMax.from(title, {y:'5%',duration:.5,opacity:0})
    },[]);

    return(
        //now i need to figure out how to get the access token and refresh token to the backend
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
                op = {promptLogin}
            />
        </div>
    );
};

export default HomeStage;