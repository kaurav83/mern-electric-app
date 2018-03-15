import React from 'react';
import {NavLink} from 'react-router-dom';
// import Home from '../Home/home';

const Logo = () => {
    return (
        <div className="logo">
            <NavLink to="/" exact >
                <img className="logo__img" src={require("../../images/logo.png")} alt="logo"/>
            </NavLink>
            
            <NavLink to="/" exact className="logo__text">
                Electrification
            </NavLink>
        </div>
    );
};

export default Logo;