import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/logo';
import FontAwesome from 'react-fontawesome';
import SideNav from '../Header/SideNav/sideNav';

const LogoForm = (props) => {
    const navBars = () => {
        return (
            <div>
                <FontAwesome name="bars"
                    onClick={props.onOpenNav}
                    style={{
                        color: '#fff',
                        padding: '1rem',
                        cursor: 'pointer'
                    }}
                />
            </div>
        )
    }
    return (
        <div className="logoForm">
            <div className="logoForm__container">
                <div className="sidenav"><SideNav {...props} /></div>
                <div className="headerOpt" style={{ position: 'absolute' }}>
                    <div>
                        {navBars()}
                    </div>
                </div>
                <Logo />
                <p className="logoForm__text">Услуги электрика в Ташкенте</p>
                <ul className="top-list">
                    <li className="top-list__item"><NavLink to="/register" exact className="top-list__link">Регистрация</NavLink></li>
                    <li className="top-list__item"><NavLink to="/login" exact className="top-list__link">Вход</NavLink></li>
                </ul>
            </div>

        </div>
    );
};

export default LogoForm;