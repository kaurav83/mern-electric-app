import React, { Component } from 'react';
import MainMenu from './MainMenu/mainmenu';
import LogoForm from '../LogoForm/logoform';

class Header extends Component {
    state = {
        showNav: false
    }

    toggleSidenav = (action) => {
        this.setState({
            showNav: action
        })
    }
    
    render() {
        return (
            <header className="header">
                <LogoForm
                    props={this.props}
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSidenav(false)}
                    onOpenNav={() => this.toggleSidenav(true)}
                />
                <MainMenu />
            </header>
        );
    }
}

export default Header;