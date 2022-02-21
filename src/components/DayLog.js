import React from 'react'

export const DayLog = (props) => {
const currentDateButton = new Date().toDateString()
const dayButton = <button> {currentDateButton} </button>


    return(
        <div className='area-0'>
            {`Record Daily Data Entry:`}
            <div class='area_content'>
                {dayButton}
            </div>
        </div>
    )

}