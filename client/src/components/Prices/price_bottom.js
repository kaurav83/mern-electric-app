import React from 'react';

const PriceBottom = () => {
    return (
        <div className="price-top">
            <p className="price-top__plain-text">
                Окончательную стоимость/цену электромонтажных работ можно узнать у нашего менеджера. Окончательная цена будет зависит от специфики и также сложности объекта и от качества материалов, которые будет использовать наш электрик, объема электромонтажных работ или других объективных причин, которые определит наш специалист только после полного и тщательного ознакомления с объектом. Все цифры могут меняться по договорённост.
            </p>

            <ul className="price-top__list"> 
                <li className="price-top__item">При отсутствии документации или проекта по проведению ремонта помещения, возможно обнаружение дополнительных работ.</li>
                <li className="price-top__item">При обнаружении работ не указанных в нашем прайс-листе или их выполнения, цена определяется исходя из договоренности, или исходя из общей сметы согласно проекта.</li>
                <li className="price-top__item">Все цены на электромонтажные работы указаны без стоимости материалов.</li>
            </ul>
        </div>
    );
};

export default PriceBottom;