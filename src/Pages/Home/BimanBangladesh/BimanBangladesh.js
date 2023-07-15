import React from 'react';
import airlinesLogo from '../../../Assets/airlines-logo.png';
import BookNow from '../BookNow/BookNow';
import FlightView from '../FlightView/FlightView';

const BimanBangladesh = () => {
    return (
        <div className='flex mt-10'>
            <div className='border border-blue-800 flex w-4/5'>
                <div className='w-1/4 p-5'>
                    <div>
                        <img src={airlinesLogo} alt="airlines-logo" className='w-16 h-16' />
                        <h3 className='font-semibold ml-2'>Biman Bangladesh Airlines</h3>
                    </div>
                    <p className='text-sm text-secondary ml-2 mt-4'><strong>BG 178 | W & BG 671 | E</strong></p>
                </div>
                <div className='w-3/4 p-5'>
                    <FlightView></FlightView>
                </div>
            </div>
            <div className='border border-green-700 w-1/5 p-5'>
                <BookNow></BookNow>
            </div>
        </div>
    );
};

export default BimanBangladesh;