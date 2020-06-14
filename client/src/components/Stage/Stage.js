import React from 'react';
import Title from '../Title/Title';
import LoginButton from '../LoginButton/LoginButton';
import './Stage.css';
import spotify from '../../assets/spotify.svg';

const Stage = () => {
    return(
        <div className = "stage">
            <div className = "siteTitle">
                <Title
                    text = "Playlist Generator"
                    color = "whiteFont"
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