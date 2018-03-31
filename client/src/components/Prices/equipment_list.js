import React, { Component } from 'react';
import axios from 'axios';
import EquipmentItem from './equipment_item';

class EquipmentList extends Component {
    state = {
        equipment: []
    }
    componentWillMount() {
        axios.get('/api/getEquipment')
            .then(response => {
                this.setState({
                    equipment: response.data
                })
            })
    }
    render() {
        const eq = this.state;
        return (
            <div className="price-block">
                <table className="table-price">
                    <caption className="table-price__caption">Монтаж электрооборудования</caption>
                    <thead className="table-price__header">
                        <tr className="table-price__tr">
                            <th className="table-price__th">Наименование работ</th>
                            <th className="table-price__th">Ед. изм.</th>
                            <th className="table-price__th">Цена(сум)</th>
                        </tr>
                    </thead>
                    
                    <EquipmentItem listEq={eq} />
                </table>

            </div>
        );
    }
}

export default EquipmentList;