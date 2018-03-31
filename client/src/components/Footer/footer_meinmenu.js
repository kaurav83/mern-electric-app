import React from 'react';
import {NavLink} from 'react-router-dom';

const FooterMeinmenu = () => {
    return (
        <div className="footer-menu">
            <ul className="footer__main-list">
                <li className="footer__main-item">
                    <NavLink exact to="/" className="footer__main-link">Главная</NavLink>
                </li>
                <li className="footer__main-item">
                    <NavLink exact to="/prices" className="footer__main-link">Цены</NavLink>
                </li>
                <li className="footer__main-item">
                    <NavLink exact to="/articles" className="footer__main-link">Статьи</NavLink>
                </li>
                <li className="footer__main-item">
                    <NavLink exact to="/feedback" className="footer__main-link">Контакты</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default FooterMeinmenu;