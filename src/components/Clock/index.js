import React, { useEffect, useState } from 'react';
import './clock.css';

// todo, pass start and end angles then use that to animate
function Clock (targetAngle, speed=5) {
    /*
    const [angle, setAngle] = useState({hour: 0, minutes: 0});
    useEffect(()=> {
        requestAnimationFrame(()=>{
            const { hour, minutes } = angle;
            const newHour = hour < 360 ? hour + 1 : 0;
            const newMinutes = minutes < 360 ? minutes + 5 : 0;
            setAngle({hour: newHour, minutes: newMinutes});
        });
    }, [angle]);
    */

    return (
        <div className="clock clock-body">
            <div className="clock-hand clock-hand-hour" style={{transform: `rotate(${angle.hour}deg)`}} />
            <div className="clock-hand clock-hand-minute"  style={{transform: `rotate(${angle.minutes}deg)`}} />
         </div>
    );
}

export default Clock;