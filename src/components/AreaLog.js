import React, {useContext} from 'react'
import {NewAreaForm} from './NewAreaForm'
import { PopUpContext } from '../contexts/PopUpContext';
import { PopUpLoad } from './PopUp';

export const AreaLog = (props) => {

    const {popUpDispatch} = useContext(PopUpContext);
    
    //as long as records exist set last_Update to the most recent
    if ((props.area.subareas) && (props.area.subareas[0]))
    {
            console.log(props.area.subareas[0])
       props.area.last_Update = props.area.subareas[0].records.slice(-1).updated_at
    }
    // if area not yet named, pass the new area button instead of the record
    const panelContent = props.area.name ? props.area : <NewAreaForm area={props.area}/>

    const AreaButtonClick = (e) =>{
        e.preventDefault()
            PopUpLoad(props.area.position, popUpDispatch, panelContent)
     }

    const areaButton = <button onClick={AreaButtonClick}> {props.area.name ? props.area.name : "Create New Area"} </button>

    return(
        <div className={'area-' + props.area.position} >
            <div className='area_content'>
                {areaButton}<br></br>
            </div>
        </div>
    )

}