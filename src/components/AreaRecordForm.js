import React, {useContext} from 'react'
import { createAreaRecord } from '../actions/RecordActions';
import { PopUpContext } from '../contexts/PopUpContext';
import { UserContext } from '../contexts/UserContext'

export const AreaRecordForm = (props) => {

    const {popUpDispatch} = useContext(PopUpContext);
    const {dispatch} = useContext(UserContext);

    const updateClick = async (e) =>{
        e.preventDefault()
        let options = {};
        let token = localStorage.getItem('token')
        console.log(props.content.area)
        const res = await createAreaRecord(props.content.area, options, token)
        if (res) {
            dispatch({type: 'refresh_area', payload: res.data, area_pos: props.content.area.position})
            popUpDispatch({type: 'clear'})
            document.querySelector(".pop-up").style.display = "none";
            console.log(res)
        }
        else {
            console.log(res)
        popUpDispatch({type: 'clear'})
        document.querySelector(".pop-up").style.display = "none";
        }
    }

    return(
        <div className = 'pop-up-update-button'>
            <button onClick={updateClick} className="AreaRecordUpdateButton"> Update </button>
        </div>
    )



}