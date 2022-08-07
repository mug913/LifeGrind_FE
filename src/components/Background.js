import React, { useLayoutEffect } from 'react';
export const Background = () => {

    //load rows into an array for display
    const BGGrid = [];
    for (let i=0; i<=8; i++){
        BGGrid.push(`bg-${i}`)};

    useLayoutEffect(() => {
        changeColors()
        //update colors every minute
        setInterval(() => {
            changeColors()
          }, 60000);
        },[])

    //update rgb colors for bg use based on current time/sunrise/sunset
    const changeColors = () => {
        const time = new Date();
        const sunRise = (6*60)+3;
        const sunSet = (20*60)+30;
        const meridian = sunSet - sunRise;
        const currentMin = (time.getHours()*60)+time.getMinutes();
        let r,g,b;
        switch(true) {
            //night
            case (currentMin < sunRise):
                r = currentMin/100;
                g = currentMin/100;
                b = currentMin/10;
                break;
            //post sunrise
            case (currentMin <= meridian && currentMin >= sunRise):
                r = (((90-(sunRise/100))/(meridian-sunRise))*(currentMin-sunRise))
                g = (sunRise/10)+(((200-(sunRise/10))/(meridian-sunRise))*(currentMin-sunRise));
                b = (sunRise/10)+(((255-(sunRise/10))/(meridian-sunRise))*(currentMin-sunRise));
                break;
            //after noon
            case (currentMin >= meridian && currentMin <= sunSet):
                r = 90+((110/(sunSet-meridian))*(currentMin-meridian));
                g = 255-(((255)/(sunSet-meridian))*(currentMin-meridian));
                b = 255-(((255)/(sunSet-meridian))*(currentMin-meridian));
                break;
            //after sunset
            case (currentMin >= sunSet):
                r = 200-(200/60)*(currentMin-sunSet);
                g = 0;
                b = 0;
                break;
            default:
                r = 0;
                g = 0;
                b = 0;
        }
        for (let i=0; i<=8; i++){
        const back = document.querySelector(`.bg-${i}`);
        if(back){
            back.style.backgroundColor = `rgb(${r-(i*30)},${g-(i*10)},${b+(i*30)})`;}
        }
        console.log(currentMin+' '+sunRise+' '+meridian+' '+sunSet+' '+r+' '+g+' '+b)
    }


    return(
            <div className="BackGround">
                {BGGrid.map(row =>(
              <div key={row} className={row} />))}
            </div>
   )
        
}