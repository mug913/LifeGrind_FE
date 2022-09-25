import React, {useState, useContext, useEffect} from 'react'
import { createArea } from '../actions/AreaActions'
import { UserContext } from '../contexts/UserContext';
import {Alert} from 'react-bootstrap'

export const NewAreaForm = (props) => {

    const area = props.area;
    const {dispatch} = useContext(UserContext);
    const [state, setState] = useState({
        name:'',
        area,
        details: 'yes/no',
        detail_1: 'true',
        detail_2: 0,
        detail_3: 'true',
        errors: []
    })

    const handleChange = (e) => {
        setState({...state,[e.target.name]: e.target.value
        })
    }
      
    const handleSubmit = async (e) =>{
        e.preventDefault()
        let token = localStorage.getItem('token')
        const res = await createArea(area, state.name, token)
        if (res.data) {
            dispatch({type: 'add_area', payload: res.data.areas}) 
            document.querySelector(".pop-up").style.display = "none";
        }
        else 
        console.log(res)
    }

    //manage radio menu for new area type
    const radioChange = (e) => {
        setState({...state,details: e.target.value,
            detail_1: null,
            detail_2: null,
            detail_3: null
        })
    }


    //manage options configuration on new area menu
    const newEventForm = () => {

        switch(state.details){
            case 'yes/no':
            return (  
            <div>
                <label>Target Outcome:</label>
                <input type="radio" value='true' name="detail_1" defaultValue={'true'} onChange={handleChange} defaultChecked/> True
                <input type="radio" value='false' name="detail_1" onChange={handleChange}/> False<br/>
                <label>Days allowed to skip per week:</label><br/>
                <input type='number' name="detail_2" value={state.detail_2} onChange={handleChange} min='0' max='6' defaultValue={'0'}/><br/>
                <label>Completed Today?:</label>
                <input type="radio" value='true' name="detail_3" defaultValue={'true'} onChange={handleChange} defaultChecked/> True
                <input type="radio" value='false' name="detail_3" onChange={handleChange}/> False<br/>
              </div>)
            case 'units':
              return ( <div>
                <label>Units:</label>
                <input type='text' name="detail_1" value={state.detail_1} onChange={handleChange} defaultValue={'ex: pages'} /><br/>
                <label>Target Trend?:</label>
                <input type="radio" value='up' name="detail_2" defaultValue={'true'} onChange={handleChange} defaultChecked/> Up
                <input type="radio" value='none' name="detail_2" onChange={handleChange}/> None
                <input type="radio" value='down' name="detail_2" onChange={handleChange}/> Down<br/>
                <label>Today's Value:</label>
                <input type='number' name="detail_3" value={state.detail_3} onChange={handleChange} min='0' max='9999'/><br/>
              </div>)
            case 'timed':
             return (    <div>
                <label>Start Time:</label>
                <input type='time' name="detail_1" value={state.detail_1} onChange={handleChange} /><br/>
                <label>Finish Time:</label>
                <input type='time' name="detail_2" value={state.detail_2} onChange={handleChange} /><br/>
              </div>)
            default:
                return null
        }
    }
    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Area Name :</label>
                <input name="name" value={state.name} onChange={handleChange} />
                {state.error ? <p style={{ color: 'red'}}>{state.error}</p> :null}
                <div onChange={radioChange}>
                <label>Type :</label>
                                <input type="radio" value='yes/no' name="details" defaultChecked onChange={radioChange}/> Yes/No
                                <input type="radio" value='units' name="details" onChange={radioChange}/> Units
                                <input type="radio" value='timed' name="details" onChange={radioChange}/> Timed
                </div>
                {newEventForm()}
                <input type='Submit' value='Create' readOnly/>
                {state.errors.length > 0 && <Alert varient="danger">{state.errors}</Alert>}
            </form>
        </div>
    )

}