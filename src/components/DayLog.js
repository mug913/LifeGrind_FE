import React, {useContext} from 'react'
import {DayAreaForm} from './DayAreaForm'
import { PopUpContext } from '../contexts/PopUpContext';
import { PopUpLoad } from './PopUp';

export const DayLog = (props) => {
const {popUpDispatch} = useContext(PopUpContext);  
const currentDateButton = new Date().toDateString()
const panelContent = <DayAreaForm  area={props.area}/>

const DayButtonClick = (e) =>{
    e.preventDefault()
    //clear any current open PopUp, perform content switch, reveal PopUp
    PopUpLoad(props.area.position, popUpDispatch, panelContent)
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