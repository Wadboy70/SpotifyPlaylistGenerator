import React from 'react';
import './Title.css';
// import '../../App.css';

const Title = ({
    text = "",
    color = "blackFont",
    type = "title"
}) =>{
    return(
        <div className = "title">
            { 
                (type === "title") &&
                <h1 className = {color}>
                    {text}
                </h1>
            }
            { 
                (type === "subtitle") &&
                <h2 className = {color}>
                    {text}
                </h2>
            }
        </div>
    );
}

export default Title;