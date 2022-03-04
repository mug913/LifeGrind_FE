import React, {useState, useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import { createSubArea } from '../actions/AreaActions'
import {Alert} from 'react-bootstrap'


export const DayAreaForm = (props) => {
    
    const area = props.area;
    const {dispatch} = useContext(UserContext);
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
        console.log("submit button")
        let token = localStorage.getItem('token')
        const res = await createSubArea(area, state.name, token)
        if (res.data) {
            dispatch({type: 'add_area_sub', payload: res.data.areas}) 
        }
        else 
        console.log(res)
    }



    return(
        <div>
            {area.subareas.map(subarea=> (
                <div> {subarea.name} </div>))}
            <form onSubmit={handleSubmit}>
                <label>SubArea Name :</label>
                <input name="name" value={state.name} onChange={handleChange} />
                {state.error ? <p style={{ color: 'red'}}>{state.error}</p> :null}
                <input type='Submit' value='Create' readOnly/>
                {state.errors.length > 0 && <Alert varient="danger">{state.errors}</Alert>}
            </form>
        </div>
    )
}
