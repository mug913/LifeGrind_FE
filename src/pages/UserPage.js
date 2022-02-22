import React, {useContext, useLayoutEffect}  from 'react'
import { Logout } from '../components/Logout'
import {DayLog} from '../components/DayLog'
import { AreaLog } from '../components/AreaLog';
import { UserContext } from '../contexts/UserContext';
import { Table } from 'react-bootstrap'
import axios from 'axios';


export const UserPage = () => {

  const {user,dispatch} = useContext(UserContext);
  const dayArea =  user.attributes.areas[0] ?? [{position: 0}]
  const activeAreas =  user.attributes.areas.slice(1, user.attributes.areas.length)

    // check for presence of valid JWT and if so request user data from backend on. 
    useLayoutEffect(() =>{
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
        localStorage.setItem('token', result.data.token)
        dispatch({type: 'add', payload: result.data.user.data})
        }
        else{
        //alert(result.data.error)
        localStorage.clear();}
      })
    }
   },[]) 


    return (
      <div >
        {console.log(user)}
        {user.id && <div>
          <h2>Welcome {user.attributes.username}</h2> 
          <div class="log_area">
          <DayLog name={dayArea.position} />
            {activeAreas.map(area =>(
            <AreaLog area={area}/>
            ))}
          <Logout/> 
          </div>
        </div>}
      </div>
    )
}