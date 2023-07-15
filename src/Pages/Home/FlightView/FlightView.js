import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

const FlightView = () => {

    const [isGoing, setIsGoing] = useState(true);

    const changeGoingStatus = (status) => {
        setIsGoing(status)
    };

    const flightDetails = [
        {
            name: 'DAC',
            airport: "Hazrat Shajalal Intl Airport"
        },
        {
            name: 'JFK',
            airport: 'JF Kennedy Intl Airport'
        }
    ]

    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <div>
                        {
                            isGoing ? <>
                                <h2 className='text-3xl font font-medium mb-3'>{flightDetails[0].name}</h2>
                                <p className='text-info font-semibold'>{flightDetails[0].airport}</p>
                            </> : <>
                                <h2 className='text-3xl font font-medium mb-3'>{flightDetails[1].name}</h2>
                                <p className='text-info font-semibold'>{flightDetails[1].airport}</p>
                            </>
                        }
                    </div>
                    <p className='text-secondary'><strong>19.05</strong></p>
                    <p className='text-info font-medium'>SUN 4TH JUL 2022</p>
                </div>
                <div className='relative'>
                    <button onClick={() => changeGoingStatus(!isGoing)}>
                        {
                            isGoing ? <FontAwesomeIcon icon={faPlane} className='w-20 h-20 text-gray-600' /> : <FontAwesomeIcon icon={faPlane} className='w-20 h-20 text-gray-300' />
                        }
                    </button>
                    <button className='absolute top-14 left-2' onClick={() => changeGoingStatus(!isGoing)}>
                        {
                            isGoing ? <FontAwesomeIcon icon={faPlane} className='w-20 h-20 text-gray-300 rotate-180' /> : <FontAwesomeIcon icon={faPlane} className='w-20 h-20 text-gray-600 rotate-180' />
                        }
                    </button>
                </div>
                <div className='text-right'>
                    <div>
                        {
                            isGoing ? <>
                                <h2 className='text-3xl font font-medium mb-3'>{flightDetails[1].name}</h2>
                                <p className='text-info font-semibold'>{flightDetails[1].airport}</p>
                            </> : <>
                                <h2 className='text-3xl font font-medium mb-3'>{flightDetails[0].name}</h2>
                                <p className='text-info font-semibold'>{flightDetails[0].airport}</p>
                            </>
                        }
                    </div>
                    <p className='text-secondary'><strong>12.05</strong></p>
                    <p className='text-info font-medium'>MON 6TH JUL 2022</p>
                </div>
            </div>
            <div className='grid grid-cols-3 mt-20'>
                <p className='text-secondary font-medium'>Refundable</p>
                <p className='text-secondary font-medium'>Class-W</p>
                <p className='text-right text-info font-medium'>Baggage: 45 KG</p>
            </div>
        </div >
    );
};

export default FlightView;