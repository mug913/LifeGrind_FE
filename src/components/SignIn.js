import React, {useState, useContext  } from 'react'
import { signIn } from '../actions/UserActions'
import { UserContext } from '../App';

export function SignIn() {
    const {user,dispatch} = useContext(UserContext);
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    // update state for matching input name value
    const handleChange = (e) => {
        setState({...state,[e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await signIn(state)
        res.data.status == 401 ? 
        alert(res.data.error) :
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
            </form>
        </div>
        )
    }