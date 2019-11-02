import React, { useEffect, useState } from 'react';
import './clock.css';


//animating properly: https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/

function resetAngle(angle){
    return angle >= 360 ? angle - 360 : angle;
}

function getRandomStartingAngle(){
    return parseInt(Math.random() * 360, 10);
}

function getIncrementValue(angle, targetAngle, speed=8) {
   if(angle === targetAngle){
       return angle;
   } else if(angle + speed > targetAngle && angle - speed < targetAngle) {
       return targetAngle;
   } else {
       return resetAngle(angle + speed);
   }
}

function SubClock ({targetAngle}) {
    const [angle, setAngle] = useState({
        hour: getRandomStartingAngle(), 
        minute: getRandomStartingAngle()
    });

    useEffect(()=> {
        setTimeout(()=>{
            const { hour, minute } = angle;
            const { hour: targetHour, minute: targetMinute } = targetAngle;
            setAngle({hour: getIncrementValue(hour, targetHour), minute: getIncrementValue(minute, targetMinute)});

        }, 1)
    }, [angle, targetAngle]);

    return (
        <div className="clock clock-body">
            <div className="clock-dot" />
            <div className="clock-hand clock-hand-hour" style={{transform: `rotate(${angle.hour}deg)`}} />
            <div className="clock-hand clock-hand-minute"  style={{transform: `rotate(${angle.minute}deg)`}} />
         </div>
    );
}

export default SubClock;