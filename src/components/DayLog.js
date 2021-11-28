import React from 'react'

export const DayLog = () => {
const currentDateButton = new Date().toDateString()

    return(
        <div>
           <form>
               {'Record Day Entry:'}
                <button>
                    {currentDateButton}
               </button>
            </form>
        </div>
    )

}