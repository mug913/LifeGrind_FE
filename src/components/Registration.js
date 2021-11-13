import React, {useState, useContext} from 'react'
import { signUp } from '../actions/UserActions'
import { UserContext } from '../App';
import {Alert} from 'react-bootstrap'

export function Registration(props) {
    const {user,dispatch} = useContext(UserContext);
    const [state, setState] = useState({
        username: '',
        password: '',
        email: ''
    })

    // update state for matching input name value
    const handleChange = (e) => {
        setState({...state,[e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await signUp(state)
        res.data.status == 422 ? 
        res.data.error.map((error) => alert(error)) :
            dispatch({type: 'add', payload: res}) 
        }

    
        return (
            <div>
            <form onSubmit={handleSubmit}>
                <label>Username :</label>
                <input name="username" value={state.username} onChange={handleChange} />
                <label>Password :</label>
                <input type='password' name="password" value={state.password} onChange={handleChange} />
                <label>Email :</label>
                <input type='email' name="email" value={state.email} onChange={handleChange}  />
                <input type='Submit'  value='Register' readOnly/>
            </form>
            </div>
        )
}
