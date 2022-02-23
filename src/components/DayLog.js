import React, {useContext,useState} from 'react'
import {DayAreaForm} from './DayAreaForm'
import { PopUpContext } from '../contexts/PopUpContext';

export const DayLog = (props) => {
const {popUpDispatch} = useContext(PopUpContext);  
const [showPanel, setShowPanel] = useState(false)
const currentDateButton = new Date().toDateString()
const panelContent = <DayAreaForm  />
const panel = showPanel ? "block" : "none"

const DayButtonClick = (e) =>{
    e.preventDefault()
    document.querySelector(".pop-up").style.display = "none";
    document.querySelector(".pop-up").style.gridArea = `area${props.area.position}`;
    popUpDispatch({type: 'replace', payload: panelContent})
    document.querySelector(".pop-up").style.display = "block";
    // setShowPanel(!(showPanel))
    // document.querySelector(".pop-up").style.display = panel;
}

const dayButton = <button onClick={DayButtonClick}> {currentDateButton} </button>

    return(
        <div className='area-0'>
            {`Record Daily Data Entry:`}
            <div class='area_content'>
                {dayButton}
            </div>
        </div>
    )

}