import React, {useState, useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import { createSubArea } from '../actions/AreaActions'
import {Alert} from 'react-bootstrap'


export const DayAreaForm = (props) => {
    
    const area = props.area;
    const {dispatch} = useContext(UserContext);
    const [state, setState] = useState({
        name:'',
        details: 'rating',
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
        let options = {name: state.name, details: state.details}
         const res = await createSubArea(area, options, token)
        if (res) {
            dispatch({type: 'add_day_area_sub', payload: res.data, area_pos: area.position})
        }
        else 
        console.log(res)
    }

    const radioChange = (e) => {
        console.log(state.details)
        setState({...state,details: e.target.value
        })
    }


    return(
        <div>
            {area.subareas.map(subarea=> (
                <div> {subarea.name} </div>))}
            <form onSubmit={handleSubmit}>
                <label>Daily Record:</label>
                <input name="name" value={state.name} onChange={handleChange} />
                <div onChange={radioChange}>
                <label>Type :</label>
                <input type="radio" value="rating" name="details" defaultChecked /> Rating
                <input type="radio" value="metric" name="details"/> Metric
                <input type="radio" value="span" name="details"/> Span
                </div>
                {state.error ? <p style={{ color: 'red'}}>{state.error}</p> :null}
                <input type='Submit' value='Create' readOnly/>
                {state.errors.length > 0 && <Alert varient="danger">{state.errors}</Alert>}
            </form>
        </div>
    )
}
