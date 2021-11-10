import React, {useContext}  from 'react'
import { Logout } from '../components/Logout'
import { UserContext } from '../App';
import { Table, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

export function UserPage() {
    const {state,dispatch} = useContext(UserContext);
    return (
        <div>
          <h2>Welcome {state.user.attributes.username}</h2>
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
                {state.user.attributes.areas.map(area =>(
                <tr key={area.id}>
                   <td>{area.position}</td>
                </tr>
            ))}
            </tbody>
            </Table>
        </div>
        <Logout/>
        </div>
    )
}