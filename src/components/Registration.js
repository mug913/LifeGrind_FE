import React, {useState} from 'react'

export function Registration(props) {

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

    const handleSubmit = (e) => {
        e.preventDefault()
        props.signUp(state)
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
