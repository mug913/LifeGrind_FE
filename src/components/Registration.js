import { Component } from 'react'

export default class Registration extends Component {

    state = {
        username: '',
        password: '',
        email: ''
    }

    // update state for matching input name value
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username :</label>
                <input name="username" value={this.state.username} onChange={this.handleChange} />
                <label>Password :</label>
                <input type='password' name="password" value={this.state.password} onChange={this.handleChange} />
                <label>Email :</label>
                <input type='email' name="email" value={this.state.email} onChange={this.handleChange}  />
                <input type='Submit' value='Register'/>
            </form>
        )
    }
}