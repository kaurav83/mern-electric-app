import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/logo';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
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

    const showItems = () => {
        return (
            props.user.login ?
                props.user.login.isAuth ?

                    <ul className="top-list">
                        <li className="top-list__item">
                            <NavLink to="/user/logout" exact className="top-list__link">
                                Выход
                            </NavLink>
                        </li>
                        <li className="top-list__item">
                            <span className="top-list__link top-list__link--modif">
                                {props.user.login.name} {props.user.login.lastname}
                            </span>
                        </li>
                    </ul>
                    :
                    <ul className="top-list">
                        <li className="top-list__item">
                            <NavLink to="/register" exact className="top-list__link"
                            >Регистрация
                            </NavLink>
                        </li>
                        <li className="top-list__item">
                            <NavLink to="/login-user" exact className="top-list__link">
                                Вход
                            </NavLink>
                        </li>
                    </ul>
                : null
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
                {showItems()}

                {
                    props.user.login ?
                        props.user.login.isAuth ?
                            <div className="logoForm__name">
                                <span className="logoForm__name-user">
                                    {props.user.login.name} {props.user.login.lastname}
                                </span>
                            </div>
                            : null
                        : null
                }

            </div>

        </div>
    );
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LogoForm);