import React from 'react';

const FareSummaryTable = ({ fareSummaryData }) => {

    const { paxType, baseFare, tax, total, paxCount, serviceFee, subTotal } = fareSummaryData;

    return (
        <tr>
            <td>{paxType}</td>
            <td>{baseFare} TK</td>
            <td>{tax} TK</td>
            <td>{total} TK</td>
            <td>{paxCount}</td>
            <td>{serviceFee} BDT</td>
            <td>{subTotal} TK</td>
        </tr>
    );
};

export default FareSummaryTable;