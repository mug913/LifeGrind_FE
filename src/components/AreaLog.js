import React, {useContext} from 'react'
import {NewAreaForm} from './NewAreaForm'
import { PopUpContext } from '../contexts/PopUpContext';
import { PopUpLoad } from './PopUp';

export const AreaLog = (props) => {

    const {popUpDispatch} = useContext(PopUpContext);
    const logRecord = {name: props.area.name,
                       streak: props.area.streak,
                       level: props.area.level,
                       last_Update: props.area.updated_at}
    const panelContent = props.area.name ? logRecord : <NewAreaForm area={props.area}/>

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