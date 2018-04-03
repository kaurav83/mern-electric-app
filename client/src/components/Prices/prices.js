import React from 'react';
import EquipmentList from './equipment_list';
import WiringItem from './wiring_list';
import LightingItem from './lighting_list';
import PriceTop from './price_top';
import PriceBottom from './price_bottom';
import TabPanel from '../../decorators/tabs/tabPanel';

const Prices = () => {
    return (
        <div>
            <h2 className="price-title">Цены</h2>
            <div className="price-tables">
                <PriceTop />
                <TabPanel>
                    <div tabtext="Монтаж оборудования" >
                        <EquipmentList />
                    </div>
                    <div tabtext="Монтаж проводки" >
                        <WiringItem />
                    </div>
                    <div tabtext="Монтаж освещения и фурнитуры" >
                        <LightingItem />
                    </div>
                </TabPanel>
                <PriceBottom />
            </div>
        </div>
        
    );
};

export default Prices;