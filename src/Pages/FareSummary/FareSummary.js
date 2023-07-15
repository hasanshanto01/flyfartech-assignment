import React from 'react';
import FareSummaryTable from './FareSummaryTable';

const FareSummary = () => {

    const fareSummaryDatas = [
        {
            paxType: 'Adult x1',
            baseFare: 4090,
            tax: 275,
            total: 4815,
            paxCount: 1,
            serviceFee: 0,
            subTotal: 4815
        },
        {
            paxType: 'Child x1',
            baseFare: 4090,
            tax: 275,
            total: 4815,
            paxCount: 1,
            serviceFee: 0,
            subTotal: 4815
        },
        {
            paxType: 'Infant x1',
            baseFare: 4090,
            tax: 275,
            total: 4815,
            paxCount: 1,
            serviceFee: 0,
            subTotal: 4815
        }
    ];

    return (
        <div className="overflow-x-auto border border-yellow-500 p-10">
            <table className="table table-zebra">
                {/* head */}
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Pax Type</th>
                        <th>Base Fare (BDT)</th>
                        <th>Tax (BDT)</th>
                        <th>Total (BDT)</th>
                        <th>Pax Count</th>
                        <th>Service Fee (BDT)</th>
                        <th>Sub Total (BDT)</th>
                    </tr>
                </thead>
                <tbody className=' bg-accent'>
                    {/* row */}
                    {
                        fareSummaryDatas.map(((fareSummaryData, index) => <FareSummaryTable
                            key={index}
                            fareSummaryData={fareSummaryData}
                        ></FareSummaryTable>))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FareSummary;