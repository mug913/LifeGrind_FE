import React, {useContext,useState} from 'react'
import {NewAreaForm} from './NewAreaForm'
import { PopUpContext } from '../contexts/PopUpContext';
import { PopUpLoad } from './PopUp';

export const AreaLog = (props) => {
    
    const {popUpDispatch} = useContext(PopUpContext);  
    const [showPanel] = useState(false)
    const logRecord = [`Name: ${props.area.name}`,<br/>,
                        `Streak: ${props.area.streak}`,<br/>,
                       `Level: ${props.area.level}`,<br/>,
                       `Last Update: ${props.area.updated_at}`]
    const panelContent = props.area.name ? logRecord : <NewAreaForm area={props.area}/>
    const panel = showPanel ? panelContent : null
       
    const AreaButtonClick = (e) =>{
        e.preventDefault()
        PopUpLoad(props.area.position, popUpDispatch, panelContent)
     }

    const areaButton = <button onClick={AreaButtonClick}> {props.area.name ? props.area.name : "Create New Area"} </button>

    return(
        <div className={'area-' + props.area.position}>
            <logArea>
            <div class='area_content'>
                {areaButton}<br></br>
                {panel}
            </div>
            </logArea>
        </div>
    )

}