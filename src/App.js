import './App.css';
import { Component } from 'react';
import Registration from './components/Registration';

class App extends Component {

  state = {
    user: {}
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
