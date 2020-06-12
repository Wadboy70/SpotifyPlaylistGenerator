import React from 'react';
import Title from '../Title/Title';
import './Stage.css';

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
        </div>
    );
}

export default Stage;