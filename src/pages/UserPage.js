import React  from 'react'
import { Logout } from '../components/Logout'

export function UserPage(props) {

    return (
        <div>
        <h2>Welcome {props.user.username}</h2>
        <Logout/>
        </div>
    )
}