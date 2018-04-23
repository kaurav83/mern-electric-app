import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';
// import {authentication} from '../../../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SideNavItems extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return (
            <div>
                <ul className="sidenav-items">
                    <li className="sidenav-items__item">
                        <Link to="/" className="sidenav-items__link">
                            <FontAwesome name="home" style={{marginRight: ".5rem"}} />
                            Главная
                        </Link>
                    </li>
                    <li onClick={this.showMenu} className="sidenav-items__button">
                        <FontAwesome name="bolt" style={{marginRight: ".9rem"}} />
                        Услуги
                        <ReactCSSTransitionGroup
                            transitionName = 'menulinks'
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                        >
                        {
                            this.state.showMenu
                                ? (
                                    <ul className="submenu-sidenav"
                                        ref={(element) => {
                                            this.dropdownMenu = element;
                                        }}
                                    >
                                        <li className="submenu-sidenav__item">
                                            <Link to="/services/5aad420ceff00c4e1c20b43e" className="submenu-sidenav__link">
                                                <FontAwesome name="" />
                                                Проводка в квартире
                                            </Link>
                                        </li>
                                        <li className="submenu-sidenav__item">
                                            <Link to="/services/5aad4366eff00c4e1c20b43f" className="submenu-sidenav__link">
                                                <FontAwesome name="" />
                                                Молниезащита и заземление
                                            </Link>
                                        </li>
                                        <li className="submenu-sidenav__item">
                                            <Link to="/services/5ab00fd7d75f4e0cac68056e" className="submenu-sidenav__link">
                                                <FontAwesome name="" />
                                                Сборка и монтаж электрощита
                                            </Link>
                                        </li>
                                        <li className="submenu-sidenav__item">
                                            <Link to="/services/5ab01007d75f4e0cac68056f" className="submenu-sidenav__link">
                                                <FontAwesome name="" />
                                                Подключение УЗО и автоматов
                                            </Link>
                                        </li>
                                        <li className="submenu-sidenav__item">
                                            <Link to="/services/5ab0101cd75f4e0cac680570" className="submenu-sidenav__link">
                                                <FontAwesome name="" />
                                                Электрический теплый пол
                                            </Link>
                                        </li>
                                    </ul>
                                ) 
                                : (
                                    null
                                )
                        }

                        </ReactCSSTransitionGroup>
                    </li>
                    <li className="sidenav-items__item">
                        <Link to="/prices" className="sidenav-items__link">
                            <FontAwesome name="money" style={{marginRight: ".5rem"}} />
                            Цены
                    </Link>
                    </li>
                    <li className="sidenav-items__item">
                        <Link to="/articles" className="sidenav-items__link">
                            <FontAwesome name="th-list" style={{marginRight: ".5rem"}} />
                            Статьи
                    </Link>
                    </li>
                    <li className="sidenav-items__item">
                        <Link to="/feedback" className="sidenav-items__link">
                            <FontAwesome name="comment" style={{marginRight: ".5rem"}} />
                            Контакты
                    </Link>
                    </li>
                    {
                        this.props.user.login ?
                            this.props.user.login.isAuth ?
                                <ul>
                                    <li className="sidenav-items__item">
                                        <Link to="/user/logout" className="sidenav-items__link">
                                            <FontAwesome name="sign-out" style={{marginRight: ".5rem"}} />
                                            Выход
                                        </Link>
                                    </li>
                                </ul>
                            : 
                            <ul>
                                <li className="sidenav-items__item">
                                    <Link to="/register" className="sidenav-items__link">
                                        <FontAwesome name="pencil-square" style={{marginRight: ".5rem"}} />
                                        Регистрация
                                    </Link>
                                </li>
                                <li className="sidenav-items__item">
                                    <Link to="/login-user" className="sidenav-items__link">
                                        <FontAwesome name="sign-in" style={{marginRight: ".5rem"}} />
                                        Вход
                                    </Link>
                                </li>
                                <li className="sidenav-items__item">
                                    <Link to="/dashboard" className="sidenav-items__link">
                                        <FontAwesome name="pencil-square" style={{marginRight: ".5rem"}} />
                                        Админка
                                    </Link>
                                </li>
                            </ul>
                            :
                            <ul>
                                <li className="sidenav-items__item">
                                    <Link to="/register" className="sidenav-items__link">
                                        <FontAwesome name="pencil-square" style={{marginRight: ".5rem"}} />
                                        Регистрация
                                    </Link>
                                </li>
                                <li className="sidenav-items__item">
                                    <Link to="/login-user" className="sidenav-items__link">
                                        <FontAwesome name="sign-in" style={{marginRight: ".5rem"}} />
                                        Вход
                                    </Link>
                                </li>
                                <li className="sidenav-items__item">
                                    <Link to="/dashboard" className="sidenav-items__link">
                                        <FontAwesome name="pencil-square" style={{marginRight: ".5rem"}} />
                                        Админка
                                    </Link>
                                </li>
                            </ul>
                    }
                    
                    
                </ul>
            </div>

        );
    }

};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SideNavItems);