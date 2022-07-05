import React, {useState, useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import { createSubArea, deleteSubArea } from '../actions/AreaActions'
import {Alert} from 'react-bootstrap'


export const DayAreaForm = (props) => {
    
    const area = props.area;
    const {dispatch} = useContext(UserContext);
    const [showMenu,setShowMenu] = useState(false)
    const [state, setState] = useState({
        name:'',
        details: 'rating',
        area,
        errors: [],
        detail_1: null,
        detail_2: null,
        detail_3: null
    })
    
   
    const menu = () => {if (showMenu) return(
                            <div>{
                            <form onSubmit={handleSubmit}>
                            <label>Record Title:</label>
                            <input name="name" value={state.name} onChange={handleChange} />
                            <div onChange={radioChange}>
                                <label>Type :</label>
                                <input type="radio" value="rating" name="details" defaultChecked /> Rating
                                <input type="radio" value="metric" name="details"/> Metric
                                <input type="radio" value="span" name="details"/> Span
                                <input type="radio" value="note" name="details"/> Note
                            </div>
                            <div>
                                {newEventForm()}
                            </div>
                            {state.error ? <p style={{ color: 'red'}}>{state.error}</p> :null}
                            <input type='Submit' value='Create' readOnly/>  <input type='Submit' onClick={handleSubareaCreate} value='Close' readOnly/>
                            {state.errors.length > 0 && <Alert varient="danger">{state.errors}</Alert>}
                            </form>
                            }</div>)
    }   

    const newEventForm = () => {
        switch(state.details){
            case 'rating':
              return (
              <div>
                <label>Lower Limit:</label>
                <input type='number' name="detail_1" value={state.detail_1} onChange={handleChange} min="0"/><br/>
                <label>High Limit:</label>
                <input type='number' name="detail_2" value={state.detail_2} onChange={handleChange} min={state.detail_1} /><br/>
                <label>Today's Rating:</label>
                <input type='number' name="detail_3" value={state.detail_3} onChange={handleChange} /><br/>
              </div>)
            case 'metric':
              return ( <div>
                <label>Units:</label>
                <input type='text' name="detail_1" value={state.detail_1} onChange={handleChange} /><br/>
                <label>Today's Value:</label>
                <input type='number' name="detail_2" value={state.detail_2} onChange={handleChange} /><br/>
              </div>)
            case 'span':
             return (    <div>
                <label>Start Time:</label>
                <input type='time' name="detail_1" value={state.detail_1} onChange={handleChange} /><br/>
                <label>Finish Time:</label>
                <input type='time' name="detail_2" value={state.detail_2} onChange={handleChange} /><br/>
              </div>)
              case 'note': 
                return (    <div>
                    <label>Note:</label>
                    <input type='text' name="detail_1" value={state.detail_1} onChange={handleChange} /><br/>
                  </div>)
              default:
              return ('rating')
        }
    }
    
  
    const handleSubareaCreate = (e) => {
        e.preventDefault()
        setState({...state, name: ''})
        setShowMenu(!showMenu)
    }


    const handleSubareaDelete = async (e,subarea) => {
        e.preventDefault()
        let token = localStorage.getItem('token')
        let target_subarea = subarea.id
        const res = await deleteSubArea(target_subarea, token)
        if (res) {
            dispatch({type: 'refresh_day_area_sub', payload: res.data, area_pos: area.position})
        }
        else {
            console.log(res)
        }
    }

    const handleChange = (e) => {
        setState({...state,[e.target.name]: e.target.value
        })
    }
      
    const handleSubmit = async (e) =>{
        e.preventDefault()
        let token = localStorage.getItem('token')
        let options = {name: state.name, details: state.details, detail_1: state.detail_1, detail_2: state.detail_2, detail_3: state.detail_3}
         const res = await createSubArea(area, options, token)
        if (res) {
            dispatch({type: 'refresh_day_area_sub', payload: res.data, area_pos: area.position})
            setState({...state, name: ''})
            setShowMenu(!showMenu)
        }
        else 
        console.log(res)
    }

    //manage radio menu for new subarea type
    const radioChange = (e) => {
        setState({...state,details: e.target.value,event: {
            detail_1: null,
            detail_2: null,
            detail_3: null
        }
        })
    }

    //Display list of subareas already present
    const subareaList = (area) => {
        if (!!area.subareas) {
            return  (area.subareas.map(subarea=> (
                 <div> <button onClick={(e) => {handleSubareaDelete(e,subarea)}}>Remove</button>
                 {subarea.name} 
                 </div>)))
        }
    }

    //Display create subarea button if subareas < 6
    const subareaCreate = (area) => {
        if (!!area.subareas) {
            if (area.subareas.length < 6 && !showMenu)
                return  (
                <div> {<input onClick={handleSubareaCreate} type='Submit' value='Create' readOnly/>} </div>)
        }
        else
            return  (
            <div> {<input onClick={handleSubareaCreate} type='Submit' value='Create' readOnly/>} </div>)
    }

    return(
        <div>
            Daily Areas:
            {subareaList(area)}
            {subareaCreate(area)}
            {menu()}
        </div>
    )
}


