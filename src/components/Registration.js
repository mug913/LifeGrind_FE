import React, {useState, useContext} from 'react'
import { signUp } from '../actions/UserActions'
import { UserContext } from '../contexts/UserContext';
import {Alert} from 'react-bootstrap'

export function Registration(props) {
    const {user,dispatch} = useContext(UserContext);
    const [state, setState] = useState({
        username: '',
        password: '',
        email: '',
        errors: []
    })

    // update state for matching input name value
    const handleChange = (e) => {
        setState({...state,[e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await signUp(state)
        const errorList = []
        console.log(res.data)
        if (res.data.status != 202) {
            res.data.error.map((error) => errorList.push(<div key={error.index}>{error}</div>))
            setState({...state, errors: errorList})}
        else {
            dispatch({type: 'add', payload:  res.data.user.data}) 
        }
    }

    
        return (
            <div>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <label>Username :</label>
                <input type='text' name="username" value={state.username} onChange={handleChange} />
                <label>Password :</label>
                <input type='password' name="password" value={state.password} onChange={handleChange} />
                <label>Email :</label>
                <input type='email' name="email" value={state.email} onChange={handleChange}  />
                <input type='Submit'  value='Register' readOnly/>
                {state.errors.length > 0 && <Alert varient="danger">{state.errors}</Alert>}
            </form>
          
            </div>
        )
}
