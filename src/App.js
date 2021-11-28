import './App.css';
import React from 'react';
import { UserPage } from './pages/UserPage';
import UserContextProvider from './contexts/UserContext';
import { LoginPage } from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  
  return (
    <div className="App">
      <UserContextProvider>
        <UserPage /> 
        <LoginPage/>
      </UserContextProvider>
    </div>
    );
}

export default App;
