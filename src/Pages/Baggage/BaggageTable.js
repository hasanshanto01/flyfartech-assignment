import React from 'react';

const BaggageTable = ({ baggageData }) => {

    const { category, weight, cabin } = baggageData;

    return (
        <tr>
            <td>{category}</td>
            <td>{weight} KG</td>
            <td>{cabin}</td>
        </tr>
    );
};

export default BaggageTable;