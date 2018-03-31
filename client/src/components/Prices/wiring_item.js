import React from 'react';

const WiringItem = (props) => {
    return (
        <tbody>
            {
                props.listWir.wiring.map((item, _id) => {
                    return(
                        <tr key={item._id} className="table-price__trBody">
                            <td className="table-price__td">{item.name}</td>
                            <td className="table-price__td">{item.unit1}</td>
                            <td className="table-price__td">{item.price}</td>
                        </tr>
                    )
                } )
            }
        </tbody>
    );
};

export default WiringItem;