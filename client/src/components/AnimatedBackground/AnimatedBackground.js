import React from 'react';
import '../../colors.css';
import  './AnimatedBackground.css';

const AnimatedBackground = ({
    children,
    color = 'blue',
    secondaryColor = 'lightBlue'
}) =>{
    return(
        <div className = {color + ' background'}>
            {children}
        </div>
    );
}

export default AnimatedBackground;