import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

export const DayLog = (props) => {
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