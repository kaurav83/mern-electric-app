import React from 'react';
import EquipmentList from './equipment_list';
import WiringItem from './wiring_list';
import LightingItem from './lighting_list';
import PriceTop from './price_top';
import PriceBottom from './price_bottom';

const Prices = () => {
    return (
        <div>
            <h2 className="price-title">Цены</h2>
            <div className="price-tables">
                <PriceTop />
                <EquipmentList />
                <WiringItem />
                <LightingItem />
                <PriceBottom />
            </div>
        </div>
        
    );
};

export default Prices;