import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="nav shadow-4">
            <span className='f2 center home-title' style={{cursor:'pointer'}}>
                {'Colin-Chiu\'s Zone'}
            </span>
            <span className='sign f3'>Sign Out</span>
        </div>
    );
}

export default Navigation;