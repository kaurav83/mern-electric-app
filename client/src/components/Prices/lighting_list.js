import React, { Component } from 'react';
import axios from 'axios';
import LightingItem from './lighting_item';

class LightingList extends Component {
    state = {
        lighting: []
    }

    componentWillMount() {
        axios.get('/api/getLighting')
            .then(response => {
                this.setState({
                    lighting: response.data
                })
            })
    }

    render() {
        const light = this.state;
        return (
            <div className="price-block">
                <table className="table-price">
                    <caption className="table-price__caption">Монтаж электрофурнитуры и освещения</caption>
                    <thead className="table-price__header">
                        <tr className="table-price__tr">
                            <th className="table-price__th">Наименование работ</th>
                            <th className="table-price__th">Ед. изм.</th>
                            <th className="table-price__th">Цена(сум)</th>
                        </tr>
                    </thead>
                    
                    <LightingItem listLight={light} />
                </table>
            </div>
        );
    }
}

export default LightingList;