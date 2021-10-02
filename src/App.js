import './App.css';
import { Component } from 'react';
import Registration from './components/Registration';
import SignIn from './components/SignIn';

class App extends Component {

  state = {
    user: {},
    error: ""
  }

  signUp = (user) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user:{
          username: user.username,
          password: user.password,
          email: user.email
        }
      })
    })
    .then(res => res.json())
    .then(user => this.setState({ user }) )
  }

  signIn = (user) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user:{
          email: user.email,
          password: user.password,
        }
      })
    })
    .then(res => res.json())
    .then(result => {
      if (result.token){
        localStorage.setItem('token', result.token)
        this.setState({ user: result.user })
       }
      else {
        this.setState({
          error: result.error
        })
      }  
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.user.username ? <h2>Welcome {this.state.user.username}</h2> : (
        <>
        <SignIn signIn={this.signIn} error={this.state.error}/>
        <Registration signUp={this.signUp} />}
        </>)
        }
      </div>
    );
  }
}

export default App;
