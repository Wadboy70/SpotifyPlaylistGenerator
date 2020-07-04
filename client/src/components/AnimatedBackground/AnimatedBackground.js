import React from 'react';
import AnimatedBlock from '../AnimatedBlock/AnimatedBlock';
import '../../colors.css';
import  './AnimatedBackground.css';

const AnimatedBackground = ({
    children,
    color = 'blue',
    secondaryColor = 'lightBlue'
}) =>{
    return(
        <div className = "lwahkfsdj">
            <div className = {color + ' background'}>
                    <AnimatedBlock/>
            </div>
                {children}
        </div>
    );
}

export default AnimatedBackground;