import React from 'react';
import airlinesLogo from '../../../Assets/airlines-logo.png';
import BookNow from '../BookNow/BookNow';
import FlightView from '../FlightView/FlightView';

const BimanBangladesh = () => {
    return (
        <div className='flex'>
            <div className='flex w-4/5 border-r-2 border-dashed'>
                <div className='w-1/4 p-5'>
                    <div>
                        <img src={airlinesLogo} alt="airlines-logo" className='w-16 h-16' />
                        <h3 className='text-xl font-semibold ml-2'>Biman Bangladesh Airlines</h3>
                    </div>
                    <p className='text-sm text-secondary ml-2 mt-4'><strong>BG 178 | W & BG 671 | E</strong></p>
                    <div className='flex flex-col items-center mt-6'>
                        <p className='text-info font-medium'><small>5H 35MIN</small></p>
                        <div className='flex items-center'>
                            <div className='bg-info w-3 h-3 rounded-full'></div>
                            <hr className='border-2 w-12' />
                            <div className='bg-primary w-2 h-2 rounded-full'></div>
                            <hr className='border-2 w-12' />
                            <div className='bg-primary w-2 h-2 rounded-full'></div>
                            <hr className='border-2 w-12' />
                            <div className='bg-info w-3 h-3 rounded-full'></div>
                        </div>
                        <p className='text-info font-medium'><small>2 STOPS</small></p>
                    </div>
                </div>
                <div className='w-3/4 p-5'>
                    <FlightView></FlightView>
                </div>
            </div>
            <div className='w-1/5 p-5'>
                <BookNow></BookNow>
            </div>
        </div>
    );
};

export default BimanBangladesh;