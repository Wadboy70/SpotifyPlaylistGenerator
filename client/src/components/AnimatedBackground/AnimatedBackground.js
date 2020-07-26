import React, { useRef, useEffect } from 'react';
import {TweenMax} from 'gsap';
import '../../colors.css';
import  './AnimatedBackground.css';

const AnimatedBackground = ({
    color = 'blue',
    secondaryColor = 'lightBlue'
    
}) =>{
    const ANIMATION_LENGTH = 8;
    let blockLocations = [
        {x:'-10vw', y:'-10%', ref: useRef(null), innerRef: useRef(null)},
        {x:'15vw', y:'135%', ref: useRef(null), innerRef: useRef(null)},
        {x:'70vw', y:'10%', ref: useRef(null), innerRef: useRef(null)}
    ];
    useEffect(()=>{
        blockLocations.forEach((block,index)=>{
            //Block locations and animations
            TweenMax.set(block.ref,{x:block.x,y:block.y});
            TweenMax.to(block.ref,ANIMATION_LENGTH,{rotation:360,transformOrigin:"10% 0px",ease:"linear",repeat:-1})
            TweenMax.to(block.innerRef,ANIMATION_LENGTH,{rotation:-360, transformOrigin:"0% 0px",ease:"linear",repeat:-1},0)
        });
    });
    return(
        <div className = {`${color} background`}>
            <div className = "container">
                {
                    //mapping info from block location array to the inner and outer block container
                    blockLocations.map((block, index)=>(
                        <div ref = {e => block.ref = e}
                            key = {index}
                            className = 'blockContainer'
                        >
                            <div
                            ref = {e => block.innerRef = e}
                            className = {`${secondaryColor}  backingBlock`}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AnimatedBackground;