import React from 'react';
import {NavLink} from 'react-router-dom';

const FooterSubmenu = () => {
    return (
        <div className="footer-submenu">
            <ul className="footer__sub-list">
                <li className="footer__sub-item">
                    <NavLink exact to="/services/5aad420ceff00c4e1c20b43e" className="footer__sub-link">Проводка в квартире</NavLink>
                </li>
                <li className="footer__sub-item">
                    <NavLink exact to="/services/5aad4366eff00c4e1c20b43f" className="footer__sub-link">Молниезащита и заземление</NavLink>
                </li>
                <li className="footer__sub-item">
                    <NavLink exact to="/services/5ab00fd7d75f4e0cac68056e" className="footer__sub-link">Сборка и монтаж электрощита</NavLink>
                </li>
                <li className="footer__sub-item">
                    <NavLink exact to="/services/5ab01007d75f4e0cac68056f" className="footer__sub-link">Подключение УЗО и автоматов</NavLink>
                </li>
                <li className="footer__sub-item">
                    <NavLink exact to="/services/5ab0101cd75f4e0cac680570" className="footer__sub-link">Электрический теплый пол</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default FooterSubmenu;