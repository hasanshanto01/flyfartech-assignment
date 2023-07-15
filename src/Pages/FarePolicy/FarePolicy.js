import React from 'react';

const FarePolicy = () => {
    return (
        <div className='grid grid-cols-2 gap-10 p-10 border border-green-700'>
            <div>
                <button className='bg-accent py-2 w-40 rounded-md mb-2'>Cancellation</button>
                <p className='text-info text-sm font-semibold'>Refund Amount = Paid Amount - Airline Cancellation Fee</p>
            </div>
            <div>
                <button className='bg-accent py-2 w-40 rounded-md mb-2'>Void</button>
                <p className='text-info text-sm font-semibold'>Re-issue Fee = Airline's Fee + Fare Difference</p>
            </div>
            <div>
                <button className='bg-accent py-2 w-40 rounded-md mb-2'>Re-issue</button>
                <p className='text-info text-sm font-semibold'>Re-issue Fee = Airline's Fee + Fare Difference</p>
            </div>
            <div>
                <button className='bg-accent py-2 w-40 rounded-md mb-2'>Refund</button>
                <p className='text-info text-sm font-semibold'>Re-issue Fee = Airline's Fee + Fare Difference</p>
            </div>
        </div>
    );
};

export default FarePolicy;