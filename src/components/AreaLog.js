import React, {useState} from 'react'
import {NewAreaForm} from './NewAreaForm'

export const AreaLog = (props) => {

    const [showPanel, setShowPanel] = useState(false)
    const logRecord = [`Streak: ${props.area.streak}`,<br/>,
                       `Level: ${props.area.level}`,<br/>,
                       `Last Update: ${props.area.updated_at}`]
    const panelContent = props.area.name ? logRecord : <NewAreaForm setShowPanel={setShowPanel}/>
    const panel = showPanel ? panelContent : null
       
    const AreaButtonClick = (e) =>{
        e.preventDefault()
        setShowPanel(!(showPanel))
    }

    const areaButton = <button onClick={AreaButtonClick} > {props.area.name ? props.area.name : "Create New Area"} </button>

    return(
        <div>
            <logArea className={'area-' + props.area.position}>
            {areaButton}
            {panel}
            </logArea>
        </div>
    )

}