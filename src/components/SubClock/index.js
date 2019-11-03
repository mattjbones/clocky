import React, { useContext, useEffect, useState } from 'react';
import { VelocityContext } from '../../utils/velocityContext';
import './clock.css';


//animating properly: https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/

function resetAngle(angle){
    return angle >= 360 ? angle - 360 : angle;
}

function getRandomStartingAngle(){
    return parseInt(Math.random() * 360, 10);
}

function getIncrementValue(angle, targetAngle, speed) {
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

    const { speed } = useContext(VelocityContext);

    useEffect(()=> {
        const increment = requestAnimationFrame(()=>{
            const { hour, minute } = angle;
            const { hour: targetHour, minute: targetMinute } = targetAngle;
            setAngle({hour: getIncrementValue(hour, targetHour, speed), minute: getIncrementValue(minute, targetMinute, speed)});
        })
        return () => cancelAnimationFrame(increment);
    }, [angle, targetAngle, speed]);

    return (
        <div className="clock clock-body">
            <div className="clock-dot" />
            <div className="clock-hand clock-hand-hour" style={{transform: `rotate(${angle.hour}deg)`}} />
            <div className="clock-hand clock-hand-minute"  style={{transform: `rotate(${angle.minute}deg)`}} />
         </div>
    );
}

export default SubClock;