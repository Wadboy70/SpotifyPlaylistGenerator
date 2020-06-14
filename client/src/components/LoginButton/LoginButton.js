import React from 'react';
import './LoginButton.css';
import '../../colors.css'

const LoginButton = ({
    text = 'Button',
    img = '',
    alt = '',
    color = 'white'
}) =>{
    return(
        <button className = {`btn ${color}`}>
            { img !== '' &&
              <span className = 'imgSpan'>
                    <img 
                    src = {img} 
                    alt = {alt}/>
                </span>
            }
            <span className = 'textSpan'>
                {text}
            </span>
        </button>
    );
}

export default LoginButton;