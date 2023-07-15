import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({ isHide, setIsHide }) => {

    return (
        <>
            {
                isHide ? <></> : <div className="p-4 border border-red-700 grid grid-cols-4">
                    <NavLink to='/' className='w-4/5 mx-auto p-2 rounded-lg text-center font-semibold' style={({ isActive }) => {
                        return {
                            color: isActive ? "white" : "black",
                            background: isActive ? "#32D095" : "",
                        };
                    }}

                    >FLIGHT DETAILS</NavLink>
                    <NavLink to='/faresummary' className='w-4/5 mx-auto p-2 rounded-lg text-center font-semibold' style={({ isActive }) => {
                        return {
                            color: isActive ? "white" : "black",
                            background: isActive ? "#32D095" : "",
                        };
                    }}

                    >FARE SUMMARY</NavLink>
                    <NavLink to='/farepolicy' className='w-4/5 mx-auto p-2 rounded-lg text-center font-semibold' style={({ isActive }) => {
                        return {
                            color: isActive ? "white" : "black",
                            background: isActive ? "#32D095" : "",
                        };
                    }}

                    >FARE POLICY</NavLink>
                    <NavLink to='/baggage' className='w-4/5 mx-auto p-2 rounded-lg text-center font-semibold' style={({ isActive }) => {
                        return {
                            color: isActive ? "white" : "black",
                            background: isActive ? "#32D095" : "",
                        };
                    }}

                    >BAGGAGE</NavLink>
                </div>
            }
        </>
    );
};

export default Menu;