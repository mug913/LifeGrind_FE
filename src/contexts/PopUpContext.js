import React, { useReducer, createContext} from 'react';
import {popUpReducer} from '../reducers/PopUpReducer';

export const PopUpContext = createContext();

export const popUpInitialState = "Hi"


const PopUpContextProvider = (props) => {
    const [popUpContent, popUpDispatch] = useReducer(popUpReducer, popUpInitialState)

    return (
        <PopUpContext.Provider value={{popUpContent,popUpDispatch}}>
            {props.children}
        </PopUpContext.Provider>
    );
}

export default PopUpContextProvider;