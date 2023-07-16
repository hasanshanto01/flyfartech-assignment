import React, { useContext } from 'react';
import Home from '../Pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import { StateContext } from '../Context/StateProvider';
import Menu from '../Pages/Shared/Menu/Menu';

const Main = () => {

    const { isHide } = useContext(StateContext);

    return (
        <div className='max-w-[1080px] mx-auto lg:mt-10 lg:mb-32'>
            <Home></Home>
            <div className='max-w-[864px] '>
                {
                    isHide ? <></> :
                        <>
                            <Menu></Menu>
                            <Outlet></Outlet>
                        </>
                }
            </div>
        </div>
    );
};

export default Main;