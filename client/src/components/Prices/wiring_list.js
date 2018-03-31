import React, { Component } from 'react';
import axios from 'axios';
import WiringItem from './wiring_item';

class WiringList extends Component {
    state = {
        wiring: []
    }

    componentWillMount() {
        axios.get('/api/getWiring')
            .then(response => {
                this.setState({
                    wiring: response.data
                })
            })
    }

    render() {
        const wir = this.state;
        return (
            <div className="price-block">
                <table className="table-price">
                    <caption className="table-price__caption">Монтаж проводки</caption>
                    <thead className="table-price__header">
                        <tr className="table-price__tr">
                            <th className="table-price__th">Наименование работ</th>
                            <th className="table-price__th">Ед. изм.</th>
                            <th className="table-price__th">Цена(сум)</th>
                        </tr>
                    </thead>
                    
                    <WiringItem listWir={wir} />
                </table>
            </div>
        );
    }
}

export default WiringList;