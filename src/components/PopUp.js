import React, {useContext} from 'react'
import { PopUpContext } from '../contexts/PopUpContext';
import { Yesterday } from './Timekeeper';
import { createAreaRecord } from '../actions/RecordActions';


export const PopUpLoad = (area, popUpDispatch, panelContent) =>{
    const modal = document.querySelector(".pop-up")
    modal.style.display = "none";
    modal.style.gridArea = `area${area}`;
    popUpDispatch({type: 'replace', payload: panelContent})
    modal.style.display = "block";
}


export const PopUp = (props) => {

    const {popUpDispatch} = useContext(PopUpContext);
    
    const updateClick = async (e) =>{
        e.preventDefault()
        let options = {};
        let token = localStorage.getItem('token')
        console.log(props.content.area_id)
        const res = await createAreaRecord(props.content.area_id, options, token)
        if (res) {
            // dispatch({type: 'refresh_day_area_sub', payload: res.data, area_pos: area.position})
            // setState({...state, name: ''})
            // setShowMenu(!showMenu)
            popUpDispatch({type: 'clear'})
            document.querySelector(".pop-up").style.display = "none";
        }
        else {
        console.log(res)
        popUpDispatch({type: 'clear'})
        document.querySelector(".pop-up").style.display = "none";
        }
    }

    const closeBtnClick = (e) =>{
        e.preventDefault()
        popUpDispatch({type: 'clear'})
        document.querySelector(".pop-up").style.display = "none";
    }
        const contentButtons=<div className='pop-up-buttons'>
            <div className = 'pop-up-update-button'>
                <button onClick={updateClick} className="PopUpUpdateButton"> Update </button>
            </div>
            <div className = 'pop-up-records-button'>
                <button onClick={closeBtnClick}> View Records </button>
            </div>
        </div>

        const closeButton=<div className='pop-up-close-button'>
            <button onClick={closeBtnClick}> X </button>
        </div>

        if(!!props.content){
            document.querySelector(`.pop-up-records-button`).style.display = "none";
            document.querySelector(`.pop-up-update-button`).style.display = "none";
        }
    
        let content = ''
        if(props.content){
            if(props.content.name){          
                let displayContent = 
                    `Name: ${props.content.name}\n
                    streak: ${props.content.streak}
                    level: ${props.content.level}\n
                    last_Update: ${props.content.last_Update}\n`     
                content = displayContent.split('\n').map(str => <p>{str}</p>)
                document.querySelector(`.pop-up-records-button`).style.display = "block";
                // if(new Date(props.content.last_Update) <= Yesterday()){
                    document.querySelector(`.pop-up-update-button`).style.display = "block";    
                // }
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