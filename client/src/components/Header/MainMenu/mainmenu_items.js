import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import FontAwesome from 'react-fontawesome';
// import {connect} from 'react-redux';

class MainMenuItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            innerRouters: []
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.element = this.element.bind(this);
        this.showItems = this.showItems.bind(this);
    }

    items = [
        {
            type: 'main-menu__item',
            text: 'Главная',
            link: '/',
            activeClass: "main-menu__selected",
            restricted: false
        },
        {
            type: 'main-menu__item',
            text: 'Услуги',
            link: '/services',
            activeClass: "main-menu__selected-service",
            restricted: false
        },
        {
            type: 'main-menu__item',
            text: 'Цены',
            link: '/prices',
            activeClass: "main-menu__selected",
            restricted: false
        },
        // {
        //     type: 'main-menu__item',
        //     text: 'Наши работы',
        //     link: '/portfolio',
        //     activeClass: "main-menu__selected",
        //     restricted: false
        // },
        {
            type: 'main-menu__item',
            text: 'Статьи',
            link: '/articles',
            activeClass: "main-menu__selected",
            restricted: false
        },
        // {
        //     type: 'main-menu__item',
        //     text: 'Отзывы',
        //     link: '/reviews',
        //     activeClass: "main-menu__selected",
        //     restricted: false
        // },
        // {
        //     type: 'main-menu__item',
        //     text: 'Доска позора',
        //     link: '/fooldesk',
        //     activeClass: "main-menu__selected",
        //     restricted: false
        // },
        {
            type: 'main-menu__item',
            text: 'Админка',
            link: '/dashboard',
            activeClass: "main-menu__selected",
            restricted: false
        },
        {
            type: 'main-menu__item',
            text: 'Контакты',
            link: '/feedback',
            activeClass: "main-menu__selected",
            restricted: false
        }
    ];

    itemsService = [
        {
            type: 'main-submenu__item',
            text: 'Проводка в квартире',
            link: '/services/5aad420ceff00c4e1c20b43e',
            activeClass: "main-submenu__selected",
            restricted: false
        },
        {
            type: 'main-submenu__item',
            text: 'Молниезащита и заземление',
            link: '/services/5aad4366eff00c4e1c20b43f',
            activeClass: "main-submenu__selected",
            restricted: false
        },
        {
            type: 'main-submenu__item',
            text: 'Сборка и монтаж электрощита',
            link: '/services/5ab00fd7d75f4e0cac68056e',
            activeClass: "main-submenu__selected",
            restricted: false
        },
        {
            type: 'main-submenu__item',
            text: 'Подключение УЗО и автоматов',
            link: '/services/5ab01007d75f4e0cac68056f',
            activeClass: "main-submenu__selected",
            restricted: false
        },
        {
            type: 'main-submenu__item',
            text: 'Электрический теплый пол',
            link: '/services/5ab0101cd75f4e0cac680570',
            activeClass: "main-submenu__selected",
            restricted: false
        }
    ]

    showMenu(event) {
        event.preventDefault();
        
        this.setState({isOpened: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({isOpened: false}, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    element(item, i) {
        if (item.link.match('/services')) {
            let dropdown = this.state.isOpened ?
                <ul className="main-submenu" >
                    {
                        this.itemsService.map((item, i) => {
                            return (
                                <li key={i} className={item.type}>
                                <NavLink exact to={`${item.link}`}
                                        activeClassName={item.activeClass}
                                        className="main-submenu__link"
                                >
                                    {item.text}
                                </NavLink>
                            </li>
                            )
                                
                        }) 
                    }
                </ul> : null
            return (
                <li key={i} className={item.type} onClick={this.showMenu}> 
                    <a className={item.activeClass}>
                        {item.text}
                    </a><i className="fa fa-caret-down"></i>
                    {dropdown}
                </li>
            )
            
        } else {
            return (
                <li key={i} className={item.type}> 
                <NavLink exact to={item.link} 
                    activeClassName={item.activeClass}
                    className="main-menu__link"
                >
                    {item.text}
                    
                </NavLink>
            </li>
            )
        }
        
    }

    showItems = () => (
        this.items.map((item, i) => this.element(item, i))
    )

    render() {
        return (
        <ul className="main-menu">
            {this.showItems()}
        </ul>
        
        );
    }
};

export default MainMenuItems;