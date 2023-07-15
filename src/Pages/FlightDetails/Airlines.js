import React from 'react';
import airlinesLogo from '../../Assets/airlines-logo.png';

const Airlines = () => {
    return (
        <>
            <img src={airlinesLogo} alt="airlines-logo" className='w-12 h-12' />
            <div className='ml-1 my-2'>
                <h3 className='font-medium'>Biman Bangladesh Airlines</h3>
                <p className='text-secondary font-medium'>BG 617</p>
            </div>
            <div className='ml-1'>
                <p><small>Operated by: BG</small></p>
                <p><small>Economy: G</small></p>
            </div>
        </>
    );
};

export default Airlines;