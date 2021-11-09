import React, {useContext}  from 'react'
import { Logout } from '../components/Logout'
import { UserContext } from '../App';

export function UserPage() {
    const {state,dispatch} = useContext(UserContext);
    return (
        <div>
          <h2>Welcome {state.user.attributes.username}</h2>
        <Logout/>
        </div>
    )
}