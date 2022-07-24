import './App.css';
import React from 'react';
import { UserPage } from './pages/UserPage';
import UserContextProvider from './contexts/UserContext';
import { LoginPage } from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';
import PopUpContextProvider from './contexts/PopUpContext';
import { Background } from './components/Background';

const App = () => {
  
  return (
    <div>
      <div className="App">
        <Background/>      
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
