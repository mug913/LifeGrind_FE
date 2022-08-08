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

    // const buttonRow = (props) =>{
    //     console.log(props.content.area.updated_at);
    //     <div className='pop-up-buttons'>
    //     <button onClick={closeBtnClick}> Update </button>
    //     <button onClick={closeBtnClick}> View Records </button>
    //     <button onClick={closeBtnClick}> X </button>
    //     </div>
    // }

    return(
        <div className='pop-up-content'>
          {props.content}
          <div className='pop-up-buttons'>
                <button onClick={closeBtnClick}> Update </button>
                <button onClick={closeBtnClick}> View Records </button>
                <button onClick={closeBtnClick}> X </button>
            </div>
        </div>
    )
}

export default PopUp;