import React, {useContext,useState} from 'react'
import {NewAreaForm} from './NewAreaForm'
import { PopUpContext } from '../contexts/PopUpContext';

export const AreaLog = (props) => {
    
    const {popUpDispatch} = useContext(PopUpContext);  
    const [showPanel, setShowPanel] = useState(false)
    const logRecord = [`Name: ${props.area.name}`,<br/>,
                        `Streak: ${props.area.streak}`,<br/>,
                       `Level: ${props.area.level}`,<br/>,
                       `Last Update: ${props.area.updated_at}`]
    const panelContent = props.area.name ? logRecord : <NewAreaForm area={props.area}/>
    const panel = showPanel ? panelContent : null
       
    const AreaButtonClick = (e) =>{
        e.preventDefault()
        document.querySelector(".pop-up").style.display = "none";
        document.querySelector(".pop-up").style.gridArea = `area${props.area.position}`;
        popUpDispatch({type: 'replace', payload: panelContent})
        document.querySelector(".pop-up").style.display = "block";
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