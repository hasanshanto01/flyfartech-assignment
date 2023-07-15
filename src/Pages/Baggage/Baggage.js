import React from 'react';
import BaggageTable from './BaggageTable';

const Baggage = () => {

    const baggageDatas = [
        {
            category: 'Adult',
            weight: 20,
            cabin: 'M'
        },
        {
            category: 'Child',
            weight: 20,
            cabin: 'M'
        },
        {
            category: 'Infant',
            weight: 20,
            cabin: 'M'
        }
    ];

    return (
        <div className="overflow-x-auto border border-yellow-500 p-10">
            <table className="table table-zebra">
                {/* head */}
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Baggage</th>
                        <th>Check-In</th>
                        <th>Cabin</th>
                    </tr>
                </thead>
                <tbody className=' bg-accent'>
                    {/* row */}
                    {
                        baggageDatas.map(((baggageData, index) => <BaggageTable
                            key={index}
                            baggageData={baggageData}
                        ></BaggageTable>))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Baggage;