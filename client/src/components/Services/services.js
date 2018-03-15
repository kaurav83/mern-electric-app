// import React from 'react';
// import { NavLink } from "react-router-dom";
// // import Service from './service';

// const Services = (props) => {
//     console.log(props, 'services.js')
//     const url = props.match.url;
//     const items = [
//         {
//             type: 'main-menu__item',
//             text: 'Проводка в квартире',
//             link: '/installation-apartment',
//             activeClass: "selected",
//             restricted: false
//         },
//         {
//             type: 'main-menu__item',
//             text: 'Проводка в доме',
//             link: '/installation-house',
//             activeClass: "selected",
//             restricted: false
//         },
//         {
//             type: 'main-menu__item',
//             text: 'Молниезащита и заземление',
//             link: '/lightning-protection',
//             activeClass: "selected",
//             restricted: false
//         },
//         {
//             type: 'main-menu__item',
//             text: 'Сборка электрощита',
//             link: '/billboard',
//             activeClass: "selected",
//             restricted: false
//         },
//         {
//             type: 'main-menu__item',
//             text: 'Подключение автоматов УЗО',
//             link: '/connection-machines',
//             activeClass: "selected",
//             restricted: false
//         }
//     ]

//     const element = (item, i) => (
//         <li key={i} className={item.type}> 
//             <NavLink exact to={`${url}${item.link}`} activeClassName={item.activeClass}>
//                 {item.text}
//             </NavLink>
//         </li>
//     )


//     const showItemsInner = () => (
//         items.map((item, i) => element(item, i))
//     )

//     return (
//         <div>
//             <ul>
//                 {showItemsInner()}
//             </ul>
//         </div>
        
        
//     );
// };

// export default Services;