import { Component } from 'react'

export default class SignIn extends Component {

    state = {
        email: '',
        password: '',
    }

    // update state for matching input name value
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Log In</h1>
                <label>Email :</label>
                <input name="email" value={this.state.username} onChange={this.handleChange} />
                <label>Password :</label>
                <input type='password' name="password" value={this.state.password} onChange={this.handleChange} />
                {this.props.error ? <p style={{ color: 'red'}}>{this.props.error}</p> :null}
                <input type='Submit' value='Authenticate'/>
            </form>
        )
    }
}