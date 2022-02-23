import React, { useReducer, createContext} from 'react';
import {userReducer} from '../reducers/UserReducer';

export const UserContext = createContext();

export const userInitialState = {
        name: '', 
        id: false,
        attributes: {
            areas: [{position: '0'}]
        }
    }

const UserContextProvider = (props) => {
    const [user, dispatch] = useReducer(userReducer, userInitialState)

    return (
        <UserContext.Provider value={{user,dispatch}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;