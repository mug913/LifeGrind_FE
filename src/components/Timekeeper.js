import React, { useEffect,useState } from 'react';
export const Timekeeper = () => {
    const [state, setState] = useState({time: new Date()});

      useEffect(() => {
        const timekeeper_interval = setInterval(() => {setState({time:new Date()})},1000)
        return () => clearInterval(timekeeper_interval)
        },[])

        return(
            <div className="UserClock">
                <h2>
                {state.time.toLocaleTimeString()}
                </h2>
            </div>
        )
}


export const Yesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    return (
    yesterday
)
}
