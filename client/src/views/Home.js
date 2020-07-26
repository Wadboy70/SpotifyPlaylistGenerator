import React from 'react';
import HomeStage from '../components/HomeStage/HomeStage';
import AnimatedBackground from '../components/AnimatedBackground/AnimatedBackground.js';
const Home = () =>{
    return(
        <>
            <AnimatedBackground
            color = 'blue'
            secondaryColor = 'lightBlue'
            />
            <HomeStage/>
        </>
    );
}

export default Home;