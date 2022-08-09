import React, {useContext} from 'react'
import { PopUpContext } from '../contexts/PopUpContext';
import { Yesterday } from './Timekeeper';


export const PopUpLoad = (area, popUpDispatch, panelContent) =>{
    const modal = document.querySelector(".pop-up")
    modal.style.display = "none";
    modal.style.gridArea = `area${area}`;
    popUpDispatch({type: 'replace', payload: panelContent})
    modal.style.display = "block";
}


export const PopUp = (props) => {

    const {popUpDispatch} = useContext(PopUpContext);

    const closeBtnClick = (e) =>{
        e.preventDefault()
        popUpDispatch({type: 'clear'})
        document.querySelector(".pop-up").style.display = "none";
    }
        const contentButtons=<div className='pop-up-buttons'>
            <div className = 'pop-up-update-button'>
                <button onClick={closeBtnClick} className="PopUpUpdateButton"> Update </button>
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