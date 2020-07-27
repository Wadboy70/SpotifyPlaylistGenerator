import React from 'react';

import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';

import './Dashboard.css';

const Dashboard = () => {
    return(
        <AnimatedBackground
            color = 'pink'
            secondaryColor = 'lightPink'
        >
            Hello  
        </AnimatedBackground>
    );
}

export default Dashboard;