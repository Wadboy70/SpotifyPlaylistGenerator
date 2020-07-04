import React, { useEffect, useRef} from 'react';
import {TweenMax} from 'gsap';
import './AnimatedBlock.css';

const AnimatedBlock = () =>{
    let block = useRef(null);
    let blockCopy = useRef(null);
    useEffect(()=>{
        TweenMax.to(blockCopy,{y: '200%',duration: 10,repeat:-1,ease:'linear'});
        TweenMax.to(block,{y: '200%',duration: 10,repeat:-1,ease:'linear'}).delay(5);
    },[])
    return(
        <>
        <div className = 'blockContainer'
        ref = {el => block = el}>
            {
                (()=>{
                    let blocks = [];
                    for(let i = 0; i < 5; i++){
                        blocks.push(
                            <div className = 'animatedBlock lightBlue'></div>
                        );
                    }
                    console.log(blocks);
                    return blocks;
                })()
            }
        </div>
        <div className = 'blockContainer blockContainer2'
        ref = {el => blockCopy = el}>
            {
                (()=>{
                    let blocks = [];
                    for(let i = 0; i < 5; i++){
                        blocks.push(
                            <div className = 'animatedBlock lightBlue'></div>
                        );
                    }
                    console.log(blocks);
                    return blocks;
                })()
            }
        </div>
        </>
    );
}

export default AnimatedBlock;