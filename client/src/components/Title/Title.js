import React from 'react';
import './Title.css';
import { Link } from 'react-router-dom';
// import '../../App.css';

const Title = ({
    text = "",
    color = "blackFont",
    type = "title",
    link = ""
}) =>{
    return(
        <Link to = {link}>
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
        </Link>
    );
}

export default Title;