import React from 'react'

export const PopUpLoad = (area, popUpDispatch, panelContent) =>{
    const modal = document.querySelector(".pop-up")
    modal.style.display = "none";
    modal.style.gridArea = `area${area}`;
    popUpDispatch({type: 'replace', payload: panelContent})
    modal.style.display = "block";
}

export const PopUp = (props) => {

    const closeBtnClick = (e) =>{
        e.preventDefault()
        document.querySelector(".pop-up").style.display = "none";
    }

    return(
        <div className='pop-up-content'>
           <div className='close-btn'>
           <button onClick={closeBtnClick}> X </button>
           </div>
          {props.content}
        </div>
    )
}

export default PopUp;