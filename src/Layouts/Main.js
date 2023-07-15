import React, { useContext } from 'react';
import Home from '../Pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import { StateContext } from '../Context/StateProvider';
import Menu from '../Pages/Shared/Menu/Menu';

const Main = () => {

    const { isHide } = useContext(StateContext);

    return (
        <div className='w-[1080px] mx-auto'>
            <Home></Home>
            {
                isHide ? <></> :
                    <>
                        <Menu></Menu>
                        <Outlet></Outlet>
                    </>
            }
        </div>
    );
};

export default Main;