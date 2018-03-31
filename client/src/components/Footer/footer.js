import React, { Component } from 'react';
import Logo from '../Logo/logo';
import FooterMeinmenu from './footer_meinmenu';
import FooterSubmenu from './footer_submenu';
import SocialNetwork from './social_network';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__layout">
                    <div className="footer__logo-block">
                        <Logo />
                        <p className="footer__text">Электромонтажные работы в Ташкенте и в Ташкентской области</p>
                    </div>
                    <div>
                        <h3 className="footer__title">Главное меню</h3>
                        <FooterMeinmenu />
                    </div>
                    <div>
                        <h3 className="footer__title">Наши услуги</h3>
                        <FooterSubmenu />
                    </div>
                    <div>
                        <h3 className="footer__title">Мы в соцсетях</h3>
                        <SocialNetwork />
                    </div>
                </div>
                <p className="footer__copyright">© 2018 «Electrification».</p>
            </div>
        );
    }
}

export default Footer;