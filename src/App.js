import './App.css';
import React from 'react';
import { UserPage } from './pages/UserPage';
import UserContextProvider from './contexts/UserContext';
import { LoginPage } from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';
import PopUpContextProvider from './contexts/PopUpContext';


const App = () => {
  
  return (
    <div>
      <div className="BackGround">
        <div className="bg-0"/>
        <div className="bg-1"/>
        <div className="bg-2"/>
        <div className="bg-3"/>
        <div className="bg-4"/>
        <div className="bg-5"/>
        <div className="bg-6"/>
        <div className="bg-7"/>
        <div className="bg-8"/>
      </div>
      <div className="App">
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
