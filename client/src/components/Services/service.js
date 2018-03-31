import React, { Component } from 'react';
import axios from 'axios';

class Service extends Component {
    state = {
        innerRouters: []
    }

    componentWillMount() {
        axios.get(`/api/slides`)
            .then(response => {
                this.setState({
                    innerRouters: response.data
                })
            })
    }

    render() {
        const { topicId } = this.props.match.params;

        return (
            <div className="innerRoutes">
                {
                    this.state.innerRouters.map((item, _id) => {
                        return (topicId.match(item._id) ?

                            <div key={item._id} className="service">
                                <div className="service__section">
                                    <p className="service__paragraph">{item.innerContent}</p>
                                    {
                                        item._id.match('5ab00fd7d75f4e0cac68056e' && '5ab0101cd75f4e0cac680570') ?
                                            <ul className="service__list">
                                                {item.listInner1.map((it, index) => {
                                                    return (
                                                        <li key={index} className="service__item">{it.item}</li>
                                                    )
                                                })}
                                            </ul> : null
                                    }
                                    <div className="service__picture">
                                        <img src={item.miniature1} className="service__img" alt="miniature1" />
                                    </div>
                                </div>

                                <h2 className="service__title">{item.titleInner1}</h2>


                                <p className="service__text">{item.innerContent2}</p>
                                <p className="service__text">{item.frontList}</p>
                                <div className="service__section">
                                    <ul className="service__list">
                                        {item.listInner2.map((it, index) => {
                                            return (
                                                <li key={index} className="service__item">{it.itemInner}</li>
                                            )
                                        })}
                                    </ul>
                                    <div className="service__picture">
                                        <img src={item.miniature2} className="service__img" alt="miniature2" />
                                    </div>
                                </div>

                                <p className="service__text">{item.postList1}</p>

                                <h2 className="service__title service__title--mod1">{item.titleInner2}</h2>

                                <p className="service__text">{item.innerContent3}</p>

                                {
                                    item._id.match('5ab0101cd75f4e0cac680570') ?
                                    null
                                    : 
                                    <div className="service__section">
                                    <ul className="service__list">
                                        {
                                            item.listInner3.map((it, index) => {
                                                return (
                                                    <li key={index} className="service__item">{it.itemInner}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    {
                                        item._id.match('5ab0101cd75f4e0cac680570') ?
                                        null : 
                                        <div className="service__picture">
                                            <img src={item.miniature3} className="service__img" alt="miniature3" />
                                        </div>
                                    }
                                    
                                </div>
                                }
                                
                                
                                {
                                    item._id.match('5ab0101cd75f4e0cac680570') ? 
                                    
                                        <div className="service__section">
                                            <div className="service__special">
                                                {
                                                    item.postList2.map((it, index) => {
                                                        return (
                                                            <p key={index} className="service__text">{it.itemInner}</p>
                                                        )
                                                    })
                                                }
                                            </div> 

                                             <div className="service__picture">
                                                <img src={item.miniature3} className="service__img" alt="miniature3" />
                                            </div>
                                        </div>
                                    
                                    : null
                                }

                                {
                                    item._id.match('5ab0101cd75f4e0cac680570') ?
                                    null : 
                                    <div className="service__section">
                                        {
                                            item.postList2.map((it, index) => {
                                                return (
                                                    <p key={index} className="service__text">{it.itemInner}</p>
                                                )
                                            })
                                        }
                                    </div>
                                }
                                

                                <h2 className="service__title service__title--mod1">{item.titleInner3}</h2>
                                <div className="service__section">
                                    {
                                        item.innerContent4.map((it, index) => {
                                            return (
                                                <p key={index} className="service__paragraph">{it.itemInner}</p>
                                            )
                                        })
                                    }
                                    {
                                        item.miniature4 ?
                                            <div className="service__picture">
                                                <img src={item.miniature4} className="service__img" alt="miniature4" />
                                            </div>
                                        : null
                                    }
                                </div>
                                {/*здесь нужна проверка для остальных id на наличие изображения */}
                                
                                {
                                    item._id.match('5aad420ceff00c4e1c20b43e') ? 
                                        <h2 className="service__title service__title--mod2">{item.titleInnerDop}</h2>
                                    : null
                                }
                                
                                <div className="service__section">
                                    <div className="service__paragraph service__paragraph--mod1">
                                        {
                                            item.innerContent5.map((it, index) => {
                                                return (
                                                    <p key={index}
                                                        className="service__text"
                                                    >{it.itemInner}</p>
                                                )
                                            })
                                        }
                                    </div>

                                    {
                                        item.miniature5 ?
                                            <div className="service__picture">
                                                <img src={item.miniature5} className="service__img" alt="miniature5" />
                                            </div>
                                            : null
                                    }

                                </div>
                                    {
                                        item._id.match('5aad420ceff00c4e1c20b43e') ?
                                            <h2 className="service__title service__title--mod2">{item.titleInner5}</h2>
                                        : null
                                    }
                                
                                <div>
                                    {
                                        item.innerContent6.map((it, index) => {
                                            return (
                                                <p key={index}
                                                    className="service__text"
                                                >{it.itemInner}</p>
                                            )
                                        })
                                    }
                                </div>

                                    {
                                        item._id.match('5aad420ceff00c4e1c20b43e') ?
                                            <h2 className="service__title service__title--mod2">{item.titleInner6}</h2>
                                        : null
                                    }
                                
                                <ul className="service__list">
                                    {
                                        item.innerContent7.map((it, index) => {
                                            return (
                                                <li key={index} className="service__item">
                                                    {it.itemInner}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                {
                                    item.innerContent8.map((it, index) => {
                                        return (
                                            <p key={index} className="service__text">{it.itemInner}</p>
                                        )
                                    })
                                }
                            </div>

                            : null
                        )
                    })
                }
            </div>
        );
    }
}

export default Service;