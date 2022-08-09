import React, { useLayoutEffect } from 'react';
export const Timekeeper = () => {

    let time = new Date();
   useLayoutEffect(() => {
        time = new Date();
        const interval = setInterval(() => {}, 60000);
        return () => clearInterval(interval)
        },[])

        return(
            <div>
                <h2>
                {time.toLocaleTimeString()}
                </h2>
            </div>
        )
}


export const Yesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    return (
        <div>
            Yesterday: {yesterday.toDateString()}
        </div>)
}
