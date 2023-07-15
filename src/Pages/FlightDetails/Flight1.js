import React, { useContext } from 'react';
import { StateContext } from '../../Context/StateProvider';
import directionImg from '../../Assets/direction.png';

const Flight1 = ({ flightData }) => {

    const { isGoing } = useContext(StateContext);

    return (
        <div className='flex justify-between items-center gap-10'>
            <div>
                <p className='text-info font-semibold'><small>Depart</small></p>
                <div className='my-1'>
                    <h3 className='text-2xl font font-medium'>
                        {
                            isGoing ? flightData[0].name : flightData[2].name
                        }
                    </h3>
                    <p className='font-semibold'><small><span className='text-neutral'>Dhaka, BD</span> | 15.00</small></p>
                </div>
                <p className='font-semibold'><small>Terminal, Hazrat Sha Jalal International Airport</small></p>
                <p className='text-info font-semibold'><small>Sun, 3rd June 2022</small></p>
            </div>
            <div>
                <p className='text-info font-semibold ml-2'><small>55 minutes</small></p>
                <img src={directionImg} alt="direction" className='w-32 h-3' />
            </div>
            <div>
                <p className='text-info font-semibold'><small>Depart</small></p>
                <div className='my-1'>
                    <h3 className='text-2xl font font-medium'>
                        {
                            isGoing ? flightData[1].name : flightData[1].name
                        }
                    </h3>
                    <p className='font-semibold'><small><span className='text-neutral'>Dhaka, BD</span> | 15.00</small></p>
                </div>
                <p className='font-semibold'><small>Terminal, Hazrat Sha Jalal International Airport</small></p>
                <p className='text-info font-semibold'><small>Sun, 3rd June 2022</small></p>
            </div>
        </div>
    );
};

export default Flight1;