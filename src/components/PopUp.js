import React, {useContext} from 'react'
import { PopUpContext } from '../contexts/PopUpContext';


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

        console.log(props.content);
        const buttons=<div className='pop-up-buttons'>
        <button onClick={closeBtnClick}> Update </button>
        <button onClick={closeBtnClick}> View Records </button>
        </div>

        let content = ``
        if(props.content){
            if(props.content.name){
            content = `Name: ${props.content.name}\n
            streak: ${props.content.streak}\n
            level: ${props.content.level}\n
            last_Update: ${props.content.last_Update}\n`     
        }
        }
            
        return(
        <div className='pop-up-content' key="pop-up">
          {content.split('\n').map(str => <p>{str}</p>)}
            <div className='pop-up-buttons'>
            {buttons}
            <button onClick={closeBtnClick}> X </button>
            </div>
        </div>
    )
}

export default PopUp;