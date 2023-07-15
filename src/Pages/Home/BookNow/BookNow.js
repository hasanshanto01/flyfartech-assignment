import React, { useState } from 'react';

const BookNow = () => {

    const [isHide, setIsHide] = useState(true);

    const changeHideStatus = (status) => {
        setIsHide(status)
    }

    return (
        <div className='text-right'>
            <h2 className='text-3xl font-semibold'>ট 1850</h2>
            <button className="btn btn-primary w-full rounded-full mt-20 text-white">Book Now</button>
            <div className='mt-9'>
                {
                    isHide ? <button className='font-medium' onClick={() => changeHideStatus(!isHide)}>Flight Details</button> : <button className='font-medium' onClick={() => changeHideStatus(!isHide)}>Hide Details</button>
                }
            </div>
        </div>
    );
};

export default BookNow;