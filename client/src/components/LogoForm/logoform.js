import React from 'react';
import { NavLink } from 'react-router-dom';
// import Register from '../Register/register';
import Logo from '../Logo/logo';

const LogoForm = () => {
    return (
        <div className="logoForm">
            <div className="logoForm__container">
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