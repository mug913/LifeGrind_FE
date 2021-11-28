import React, {useContext, useLayoutEffect}  from 'react'
import { Logout } from '../components/Logout'
import {DayLog} from '../components/DayLog'
import { UserContext } from '../contexts/UserContext';
import { Table } from 'react-bootstrap'
import axios from 'axios';



export const UserPage = () => {
    const {user,dispatch} = useContext(UserContext);

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
        console.log(result.data)
        localStorage.setItem('token', result.data.token)
        dispatch({type: 'add', payload: result.data.user.data})
        }
        else{
        //alert(result.data.error)
        localStorage.clear();}
      })
    }
   },[dispatch]) 

    //if user id in state, render user page content
    return (
        <div>
        {user.id && <div>
          <h2>Welcome {user.attributes.username}</h2> 
          <DayLog/>
          <div>
      
            <Table striped bordered hover>
            <thread>
            </thread>
            <tbody>
                {user.attributes.areas.map(area =>(
                <tr key={area.id}>
                   <td>{area.position}</td>
                </tr>
            ))}
            </tbody>
            </Table>
        </div>
        <Logout/> </div>}
        </div>
    )
}