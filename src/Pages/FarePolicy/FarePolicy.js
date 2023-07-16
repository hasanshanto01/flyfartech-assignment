import React from 'react';

const FarePolicy = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-10' data-theme="light">
            <div className='text-center md:text-left'>
                <button className='bg-accent py-2 w-40 rounded-md mb-2'>Cancellation</button>
                <p className='text-info text-sm font-semibold'>Refund Amount = Paid Amount - Airline Cancellation Fee</p>
            </div>
            <div className='text-center md:text-left'>
                <button className='bg-accent py-2 w-40 rounded-md mb-2'>Void</button>
                <p className='text-info text-sm font-semibold'>Re-issue Fee = Airline's Fee + Fare Difference</p>
            </div>
            <div className='text-center md:text-left'>
                <button className='bg-accent py-2 w-40 rounded-md mb-2'>Re-issue</button>
                <p className='text-info text-sm font-semibold'>Re-issue Fee = Airline's Fee + Fare Difference</p>
            </div>
            <div className='text-center md:text-left'>
                <button className='bg-accent py-2 w-40 rounded-md mb-2'>Refund</button>
                <p className='text-info text-sm font-semibold'>Re-issue Fee = Airline's Fee + Fare Difference</p>
            </div>
        </div>
    );
};

export default FarePolicy;