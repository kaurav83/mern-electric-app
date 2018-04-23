import React, { Component } from 'react';
import Logo from '../Logo/logo';
import FooterMeinmenu from './footer_meinmenu';
import FooterSubmenu from './footer_submenu';
import SocialNetwork from './social_network';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class Footer extends Component {
    constructor() {
        super();

        this.state = {
            showList: false,
            showListSub: false
        }
        this.showList = this.showList.bind(this);
        this.closeList = this.closeList.bind(this);

        this.showListSub = this.showListSub.bind(this);
        this.closeListSub = this.closeListSub.bind(this);
    }

    showList(event) {
        event.preventDefault();

        this.setState({showList: true}, () => {
            document.addEventListener('click', this.closeList);
        });
    }

    closeList(event) {
        if (!this.dropdownList.contains(event.target)) {
            this.setState({showList: false}, () => {
                document.removeEventListener('click', this.closeList);
            });
        }
    }

    showListSub(event) {
        event.preventDefault();

        this.setState({showListSub: true}, () => {
            document.addEventListener('click', this.closeListSub);
        });
    }

    closeListSub(event) {
        if (!this.dropdownList.contains(event.target)) {
            this.setState({showListSub: false}, () => {
                document.removeEventListener('click', this.closeListSub);
            });
        }
    }

    render() {
        return (
            <div className="footer">
                <div className="footer__layout">
                    <div className="footer__logo-block">
                        <Logo />
                        <p className="footer__text">Электромонтажные работы в Ташкенте и в Ташкентской области</p>
                    </div>
                    <div className="footer__desktop">
                        <h3 className="footer__title">Главное меню</h3>
                        <FooterMeinmenu />
                    </div>
                    <div className="footer__mobile">
                        <h3 className="footer__title" onClick={this.showList}>Главное меню</h3>
                        <ReactCSSTransitionGroup
                            transitionName = 'menulinks'
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                        >
                            
                                {
                                this.state.showList
                                ? (
                                    <div
                                        ref={(element) => {
                                            this.dropdownList = element;
                                        }}
                                    >
                                        <FooterMeinmenu />
                                    </div>
                                ) : (null)
                            }
                            
                        </ReactCSSTransitionGroup>
                        
                    </div>

                    <div className="footer__desktop">
                        <h3 className="footer__title">Наши услуги</h3>
                        <FooterSubmenu />
                    </div>
                    <div className="footer__mobile">
                        <h3 className="footer__title" onClick={this.showListSub}>Наши услуги</h3>
                        <ReactCSSTransitionGroup
                            transitionName = 'menulinks'
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}
                        >
                        {
                            this.state.showListSub
                            ? (
                                <div
                                    ref={(element) => {
                                        this.dropdownList = element;
                                    }}
                                >
                                    <FooterSubmenu />
                                </div>
                            ) : (null)
                        }
                        </ReactCSSTransitionGroup>
                    </div>

                    <div className="social-container">
                        <h3 className="footer__title socials-title">Мы в соцсетях</h3>
                        <SocialNetwork />
                    </div>
                </div>
                <p className="footer__copyright">© 2018 «Electrification».</p>
            </div>
        );
    }
}

export default Footer;