import React from 'react';

const EquipmentItem = (props) => {
    return (
        <tbody>
            {
                props.listEq.equipment.map((item, _id) => {
                    return(
                        <tr key={item._id} className="table-price__trBody">
                            <td className="table-price__td">{item.name}</td>
                            <td className="table-price__td">{item.unit1 || item.unit2 || item.unit3 || item.unit4}</td>
                            <td className="table-price__td">{item.price}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    );
};

export default EquipmentItem;