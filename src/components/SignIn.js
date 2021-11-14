import React, {useState, useContext  } from 'react'
import { signIn } from '../actions/UserActions'
import { UserContext } from '../App';
import {Alert} from 'react-bootstrap'

export function SignIn() {
    const {user,dispatch} = useContext(UserContext);
    const [state, setState] = useState({
        email: '',
        password: '',
        errors: []
    })

    // update state for matching input name value
    const handleChange = (e) => {
        setState({...state,[e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await signIn(state)
        const errorList = []
        if (res.data.status == 401) {
            console.log(res)
            errorList.push(<div>{res.data.error}</div>)
            setState({...state, errors: errorList})}
        else
        dispatch({type: 'add', payload: res}) 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <label>Email :</label>
                <input name="email" value={state.email} onChange={handleChange} />
                <label>Password :</label>
                <input type='password' name="password" value={state.password} onChange={handleChange} />
                {state.error ? <p style={{ color: 'red'}}>{state.error}</p> :null}
                <input type='Submit' value='Sign In' readOnly/>
                {state.errors.length > 0 && <Alert varient="danger">{state.errors}</Alert>}
            </form>
        </div>
        )
    }