import './App.css';
import React, { useEffect, useReducer } from 'react';
import {Registration} from './components/Registration';
import { SignIn } from './components/SignIn';
import { UserPage } from './pages/UserPage';
import axios from 'axios';

export const UserContext = React.createContext()

//set initial user state
const userInitialState ={
  user: {id: false}
}

//create reducer function
function userReducer(state,action){
  switch(action.type){
    case 'add':
      return{...state, user: action.payload}
    default:
      return userInitialState
  }
}

function App() {
  const [state, dispatch] = useReducer(userReducer,userInitialState)

  //check for presence of valid JWT and if so request user data from backend on. 
  useEffect(() =>{
    let token = localStorage.getItem('token')
    if(token){
      axios.get(`${process.env.REACT_APP_API}/profile`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(result => {
        if(!result.data.error){
        console.log(result)
         dispatch({type: 'add', payload: result.data.data})
        }
        else
        alert(result.data.error)
        localStorage.clear();
      })
    }
  },[]) 

  return (
    <div className="App">
      <UserContext.Provider value={{state,dispatch}}>
      {state.user.id ? <UserPage /> : 
        (<>
        <SignIn />
        <Registration />
        </>)
      } 
      </UserContext.Provider>
    </div>
    );
}

export default App;
