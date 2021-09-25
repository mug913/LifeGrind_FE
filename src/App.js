import './App.css';
import { Component } from 'react';
import Registration from './components/Registration';

class App extends Component {

  state = {
    user: {}
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

  render(){
    return (
      <div className="App">
        {this.state.user.username ? <h2>Welcome {this.state.user.username}</h2> : <Registration signUp={this.signUp} />}
      </div>
    );
  }
}

export default App;
