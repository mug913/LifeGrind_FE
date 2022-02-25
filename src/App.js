import './App.css';
import React from 'react';
import { UserPage } from './pages/UserPage';
import UserContextProvider from './contexts/UserContext';
import { LoginPage } from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';
import PopUpContextProvider from './contexts/PopUpContext';


const App = () => {
  
  return (
    <div className="App">
      <div className="BackGround">
      <UserContextProvider>
        <PopUpContextProvider>
        <UserPage /> 
        <LoginPage/>
        </PopUpContextProvider>
      </UserContextProvider>
      </div>
    </div>
    );
}

export default App;
