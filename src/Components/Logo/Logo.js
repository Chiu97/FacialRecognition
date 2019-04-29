import React from 'react';
import './logo.css';

const Logo = () => {
    return (
        <div className='logoPic center'>
            <img src={require("./panda-chiu.png")} alt='panda' className="icon"></img>
        </div>
    )
}

export default Logo;