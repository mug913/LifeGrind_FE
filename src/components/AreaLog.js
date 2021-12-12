import React, {useState} from 'react'

export const AreaLog = (props) => {

    const [showLog, setShowLog] = useState(false)

    const openTest = showLog ? "shown" : "closed"

    const AreaLogClick = (e) =>{
        e.preventDefault()
        setShowLog(!(showLog))
    }

    return(
        <div>
           <form>
               {'Record Entry:'}
                <button onClick={AreaLogClick}>
                    {props.name}
                </button>
                {openTest}
            </form>
        </div>
    )

}