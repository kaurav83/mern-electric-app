import React, { Component } from 'react';
import axios from 'axios';

class ItemsService extends Component {
    state = {
        items: []
    }
    componentWillMount() {
        axios.get('/api/home')
            .then(response => {
                this.setState({
                    items: response.data
                })
            })
    }

    render() {
        return (
            <div className="itemsService">
                {
                    this.state.items.map((item, _id) => {
                        return(
                            <ul className="list-services" key={item._id}>
                                {
                                    item.itemsService.map((it, index) => {
                                        return (
                                            <li className="list-services__item" key={index}>
                                                <img src={it.icon} alt="icon" className="list-services__icon" />
                                                <div  className="list-services__text">{it.itemHome}</div> 
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }
            </div>
        );
    }
}

export default ItemsService;