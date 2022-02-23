import React, { useReducer, createContext} from 'react';
import {popUpReducer} from '../reducers/PopUpReducer';
import {DayAreaForm} from '../components/DayAreaForm'

export const PopUpContext = createContext();

export const popUpInitialState = <DayAreaForm />


const PopUpContextProvider = (props) => {
    const [popUpContent, popUpDispatch] = useReducer(popUpReducer, popUpInitialState)

    return (
        <PopUpContext.Provider value={{popUpContent,popUpDispatch}}>
            {props.children}
        </PopUpContext.Provider>
    );
}

export default PopUpContextProvider;