import './App.css';
import React, { useLayoutEffect, useState, useReducer, useContext } from 'react';
import {Registration} from './components/Registration';
import { SignIn } from './components/SignIn';
import { UserPage } from './pages/UserPage';
import UserContextProvider from './contexts/UserContext';
import { LoginPage } from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';
import 'bootstrap/dist/css/bootstrap.css';

// export const UserContext = React.createContext()

//set initial user state
// const userInitialState ={
//   user: {id: false}
// }

//create reducer function
// function userReducer(state,action){
//   switch(action.type){
//     case 'add':
//       return{...state, user: action.payload}
//     default:
//       return userInitialState
//   }
// }

const App = () => {
   const [welcome, setState] = useState(true)

  return (
    <div className="App">
      <UserContextProvider>
        <LoginPage/>
        <UserPage />  
      </UserContextProvider>
    </div>
    );
}

export default App;
