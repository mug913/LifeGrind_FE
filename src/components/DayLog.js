import React from 'react'

export const DayLog = (props) => {
const currentDateButton = new Date().toDateString()

    return(
        <div>
           <form>
               {`Record Day ${props.name} Entry:`}
                <button>
                    {currentDateButton}
               </button>
            </form>
        </div>
    )

}