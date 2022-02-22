import React, {useState} from 'react'
import {DayAreaForm} from './DayAreaForm'

export const DayLog = (props) => {
const [showPanel, setShowPanel] = useState(false)
const currentDateButton = new Date().toDateString()
const panelContent = <DayAreaForm setShowPanel={setShowPanel} />
const panel = showPanel ? panelContent : null

const DayButtonClick = (e) =>{
    e.preventDefault()
    setShowPanel(!(showPanel))
}

const dayButton = <button onClick={DayButtonClick}> {currentDateButton} </button>

    return(
        <div className='area-0'>
            {`Record Daily Data Entry:`}
            <div class='area_content'>
                {dayButton}
            </div>
                {panel}    
        </div>
    )

}