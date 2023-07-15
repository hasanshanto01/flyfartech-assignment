import React, { createContext, useState } from 'react';

export const StateContext = createContext();

const StateProvider = ({ children }) => {

    const [isGoing, setIsGoing] = useState(true);
    const [isHide, setIsHide] = useState(true);

    const stateInfo = {
        isGoing,
        setIsGoing,
        isHide,
        setIsHide,
    };

    return (
        <StateContext.Provider value={stateInfo}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;