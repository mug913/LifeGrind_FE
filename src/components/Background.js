import React, { useEffect, useLayoutEffect } from 'react';

export const Background = () => {

    useLayoutEffect(() => {
       changeColors();
    })

    const changeColors = () => {
        const time = new Date();
        const sunRise = 6.25;
        const sunSet = 19.35;
        let r = 255 * (time.getHours()/sunSet);
        let g = 255 * (time.getHours()/(sunSet-sunRise));
        let b = 255 * (time.getHours()/sunRise);
        for (let i=0; i<=8; i++){
        const back = document.querySelector(`.bg-${i}`);
        if(back){
            back.style.backgroundColor = `rgb(${r-(i*30)},${g-(i*10)},${b+(i*30)})`;}
        }
        console.log(time+`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        setInterval(() => {
            changeColors()
          }, 5000);
        },[])
      

    return(
        <div className="BackGround">
        <div className="bg-0"/>
        <div className="bg-1"/>
        <div className="bg-2"/>
        <div className="bg-3"/>
        <div className="bg-4"/>
        <div className="bg-5"/>
        <div className="bg-6"/>
        <div className="bg-7"/>
        <div className="bg-8"/>
       </div>
    )
}