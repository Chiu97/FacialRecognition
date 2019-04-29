import React from 'react';
import './Navigation.css';

const Navigation = ({onLogout,onRouteChange}) => {
    return (
        <div className="nav shadow-4">
            <span className='f2 center home-title' style={{cursor:'pointer'}}>
                {'Colin-Chiu\'s Zone'}
            </span>
            {
                onLogout === false ? 
                <span className='sign f3' onClick={() => {onRouteChange('sign-in')}}>Sign Out</span>:
                <span></span>
            }
        </div>
    );
}

export default Navigation;