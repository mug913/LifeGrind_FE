import React, {useContext, useLayoutEffect}  from 'react'
import { Logout } from '../components/Logout'
import { UserContext } from '../contexts/UserContext';
import { Table, Form } from 'react-bootstrap'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


export const UserPage = (props) => {
    const user = useContext(UserContext);
 
    console.log(user)
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
        user.dispatch({type: 'add', payload: result.data.data})
        }
        else
        alert(result.data.error)
        localStorage.clear();
      })
    }
   },[]) 

    return (
        <div>
        {user.user.id && <div>
          <h2>Welcome {user.user.attributes.username}</h2> 
          <div>
         <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" />
            </Form.Group>
            </Form>
            <Table striped bordered hover>
            <thread>
            </thread>
            <tbody>
                {user.user.attributes.areas.map(area =>(
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