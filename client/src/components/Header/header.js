import React, { Component } from 'react';
import MainMenu from './MainMenu/mainmenu';
import LogoForm from '../LogoForm/logoform';

class Header extends Component {
    
    render() {
        return (
            <header className="header">
                <LogoForm />
                <MainMenu />
            </header>
        );
    }
}

export default Header;