import './App.css';
import { Component } from 'react';
import Registration from './components/Registration';

class App extends Component {

  state = {
    user: {}
  }

  signUp = (user) => {
    fetch('http://localhost/users', {
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
        <Registration />
      </div>
    );
  }
}
export default App;
