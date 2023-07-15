import React from 'react';
import Airlines from './Airlines';
import Flight1 from './Flight1';
import Flight2 from './Flight2';

const FlightDetails = () => {

    const flightData = [
        {
            name: 'DAC'
        },
        {
            name: 'DXB'
        },
        {
            name: 'JFK'
        }
    ];

    return (
        <div>
            <div className='border border-red-600 flex'>
                <div className='border border-blue-600 w-1/4 ml-6'>
                    <Airlines></Airlines>
                </div>
                <div className='border border-yellow-600 w-3/4 ml-6'>
                    <Flight1
                        flightData={flightData}
                    ></Flight1>
                </div>
            </div>
            <div className='w-3/4 mx-auto py-1 bg-accent text-center'>
                <p className='font-medium'><small>Change planes at International |Kuwait |KW |Kuwait (KWI), Connecting Time: 04h:10m</small></p>
            </div>
            <div className='border border-red-600 flex'>
                <div className='border border-blue-600 w-1/4 ml-6'>
                    <Airlines></Airlines>
                </div>
                <div className='border border-yellow-600 w-3/4 ml-6'>
                    <Flight2
                        flightData={flightData}
                    ></Flight2>
                </div>
            </div>
        </div>
    );
};

export default FlightDetails;