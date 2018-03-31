import React, { Component } from 'react';
import axios from 'axios';

class ListAdvantage extends Component {
    state = {
        listAdvantages: []
    }

    componentWillMount() {
        axios.get('/api/home')
            .then(response => {
                this.setState({
                    listAdvantages: response.data
                })
            })
    }

    render() {
        return (
            <div className="listAdvantages">
                {
                    this.state.listAdvantages.map((item, _id) => {
                        return (
                            <div key={item._id}>
                                <h3 className="listAdvantages__title">Наши приемущества</h3>
                                <div className="listAdvantages__wrap">
                                    <ul className="listAdvantages__list">
                                        {
                                            item.listSection.map((it, index) => {
                                                return(
                                                    <li className="listAdvantages__item" key={index}>{it.listItem}</li>
                                                )
                                                
                                            })
                                        }
                                    </ul>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ListAdvantage;