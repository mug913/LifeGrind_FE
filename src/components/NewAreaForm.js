import React, {useState, useContext} from 'react'
import { createArea } from '../actions/AreaActions'
import { UserContext } from '../contexts/UserContext';
import {Alert} from 'react-bootstrap'

export const NewAreaForm = (props) => {

    const area = props.area;
    const {user,dispatch} = useContext(UserContext);
    const [state, setState] = useState({
        name:'',
        area,
        errors: []
    })

    const handleChange = (e) => {
        setState({...state,[e.target.name]: e.target.value
        })
    }
      
    const handleSubmit = async (e) =>{
        e.preventDefault()
        let token = localStorage.getItem('token')
        console.log(state.area, state.name)
        const res = await createArea(state.area, state.name, token)
        const errorList = []
        if (res.data) {
            console.log(res.data.areas)
            dispatch({type: 'add_area', payload: res.data.areas}) 
        props.setShowPanel(false)
        }
        else 
        console.log(res)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Area Name :</label>
                <input name="name" value={state.name} onChange={handleChange} />
                {state.error ? <p style={{ color: 'red'}}>{state.error}</p> :null}
                <input type='Submit' value='Create' readOnly/>
                {state.errors.length > 0 && <Alert varient="danger">{state.errors}</Alert>}
            </form>
        </div>
    )
}