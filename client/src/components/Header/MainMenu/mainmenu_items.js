import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import FontAwesome from 'react-fontawesome';
// import {connect} from 'react-redux';
// import Services from '../../Services/services';

class MainMenuItems extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false}

        this.toggleState = this.toggleState.bind(this);
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
        {
            type: 'main-menu__item',
            text: 'Наши работы',
            link: '/portfolio',
            activeClass: "main-menu__selected",
            restricted: false
        },
        {
            type: 'main-menu__item',
            text: 'Статьи',
            link: '/articles',
            activeClass: "main-menu__selected",
            restricted: false
        },
        {
            type: 'main-menu__item',
            text: 'Отзывы',
            link: '/reviews',
            activeClass: "main-menu__selected",
            restricted: false
        },
        {
            type: 'main-menu__item',
            text: 'Доска позора',
            link: '/fooldesk',
            activeClass: "main-menu__selected",
            restricted: false
        },
        {
            type: 'main-menu__item',
            text: 'О нас',
            link: '/about',
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
            link: '/services/installation-apartment',
            activeClass: "main-submenu__selected",
            restricted: false
        },
        {
            type: 'main-submenu__item',
            text: 'Проводка в доме',
            link: '/services/installation-house',
            activeClass: "main-submenu__selected",
            restricted: false
        },
        {
            type: 'main-submenu__item',
            text: 'Молниезащита и заземление',
            link: '/services/lightning-protection',
            activeClass: "main-submenu__selected",
            restricted: false
        },
        {
            type: 'main-submenu__item',
            text: 'Сборка электрощита',
            link: '/services/billboard',
            activeClass: "main-submenu__selected",
            restricted: false
        },
        {
            type: 'main-submenu__item',
            text: 'Подключение автоматов УЗО',
            link: '/services/connection-machines',
            activeClass: "main-submenu__selected",
            restricted: false
        }
    ]

    toggleState() {
        this.setState({isOpened: !this.state.isOpened})
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
                <li key={i} className={item.type} onClick={this.toggleState}> 
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

// function mapStateToProps(state) {
//     return {
//         user: state.user
//     };
// }

// export default connect(mapStateToProps)(MainMenuItems);
export default MainMenuItems;