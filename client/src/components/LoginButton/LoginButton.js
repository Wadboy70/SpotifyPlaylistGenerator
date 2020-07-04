import React from 'react';
import './LoginButton.css';
import '../../colors.css'

const LoginButton = ({
    text = 'Button',
    fontColor = 'whiteFont',
    img = '',
    alt = '',
    color = 'white',
    op = ()=>{}
}) =>{
    return(
        <button 
        className = {`btn ${color}`}
        onClick = {op}
        >
            { img !== '' &&
              <span className = 'imgSpan'>
                    <img 
                    src = {img} 
                    alt = {alt}/>
                </span>
            }
            <span className = {`textSpan ${fontColor}`}>
                {text}
            </span>
        </button>
    );
}

export default LoginButton;