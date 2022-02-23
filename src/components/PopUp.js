import React from 'react'
export const PopUp = (props) => {

    const closeBtnClick = (e) =>{
        e.preventDefault()
        document.querySelector(".pop-up").style.display = "none";
    }

    return(
        <div className='pop-up-content'>
           <div className='close-btn'>
           <button onClick={closeBtnClick}> X </button>
          {props.content}
          </div>
        </div>
    )
}