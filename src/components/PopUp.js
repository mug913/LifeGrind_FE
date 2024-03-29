import React, {useContext} from 'react'
import { PopUpContext } from '../contexts/PopUpContext';
import { UserContext } from '../contexts/UserContext'
import { Yesterday } from './Timekeeper';
import { deleteArea } from '../actions/AreaActions';
import { createAreaRecord } from '../actions/RecordActions';
import { AreaRecordForm } from './AreaRecordForm';

export const PopUpLoad = (area, popUpDispatch, panelContent) =>{
    const modal = document.querySelector(".pop-up")
    modal.style.display = "none";
    modal.style.gridArea = `area${area}`;
    popUpDispatch({type: 'replace', payload: panelContent})
    modal.style.display = "block";
}


export const PopUp = (props) => {

    const {popUpDispatch} = useContext(PopUpContext);
    const {dispatch} = useContext(UserContext);

    //close pop up area button
    const closeBtnClick = (e) =>{
        e.preventDefault()
        popUpDispatch({type: 'clear'})
        document.querySelector(".pop-up").style.display = "none";
    }

    //delete current area button
    const deleteAreaBtnClick = async (e) =>{
        e.preventDefault()
        let token = localStorage.getItem('token')
        const res = await deleteArea(props.content, token)
        if (res) {
            console.log(res)
            dispatch({type: 'delete_area', payload: res.data, area_pos: props.content.position})
            popUpDispatch({type: 'clear'})
            document.querySelector(".pop-up").style.display = "none";
        }
        else {
            console.log(res) 
            popUpDispatch({type: 'clear'})
            document.querySelector(".pop-up").style.display = "none";
        }
    }
    

    /*Record viewing functionality to be added */
        const contentButtons=
        <div className='pop-up-buttons'>
            <AreaRecordForm content={props.content} />
            <div className = 'pop-up-records-button'>
                <button /*onClick={closeBtnClick}*/> View Records </button>
            </div>
            <div className = 'pop-up-area-delete-button'>
                <button onClick={deleteAreaBtnClick}> Delete Area </button>
            </div>
        </div>

        const closeButton=<div className='pop-up-close-button'>
            <button onClick={closeBtnClick}> X </button>
        </div>

        if(!!props.content){
            document.querySelector(`.pop-up-records-button`).style.display = "none";
            document.querySelector(`.pop-up-update-button`).style.display = "none";
            document.querySelector(`.pop-up-area-delete-button`).style.display = "none";
        }
    
        let content = ''
        if(props.content){
            if(props.content.name){          
                let displayContent = 
                    `Name: ${props.content.name}\n
                    streak: ${props.content.streak}
                    level: ${props.content.level}\n
                    last_Update: ${props.content.updated_at}\n`     
                content = displayContent.split('\n').map(str => <p>{str}</p>)
                document.querySelector(`.pop-up-records-button`).style.display = "block";
                document.querySelector(`.pop-up-area-delete-button`).style.display = "block";
                //only allow Area updates once ever 24 hours
                if(new Date(props.content.last_Update) <= Yesterday()){
                    document.querySelector(`.pop-up-update-button`).style.display = "block";    
                }
            }else content = props.content;
        }

        return(
        <div className='pop-up-content' key="pop-up">
          {content}
          {contentButtons}
          {closeButton}
        </div>
    )
}

export default PopUp;