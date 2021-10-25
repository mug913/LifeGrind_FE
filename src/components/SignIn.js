import React, {useState} from 'react'

export function SignIn(props) {

    const [state, setState] = useState({
        email: '',
        password: '',
    })

    // update state for matching input name value
    const handleChange = (e) => {
        setState({...state,[e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        props.signIn(state)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <label>Email :</label>
                <input name="email" value={state.email} onChange={handleChange} />
                <label>Password :</label>
                <input type='password' name="password" value={state.password} onChange={handleChange} />
                {props.error ? <p style={{ color: 'red'}}>{props.error}</p> :null}
                <input type='Submit' value='Sign In' readOnly/>
            </form>
        </div>
        )
    }