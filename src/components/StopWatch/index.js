import React, { useState, useEffect } from 'react';
import ClockNumber, { NUMBERS } from '../ClockNumber';
import SubClock from '../SubClock';
import { emptySpace } from '../../utils/clockPositions';
import { zeroTimeParts, getTimePartsFromDateParts } from '../../utils/timeParts';
import { VelocityContext } from '../../utils/velocityContext';
import './stopwatch.css';

function DigitalClock() {
    const [timeParts, setTimeParts] = useState(zeroTimeParts);
    const [startTime, setStateTime] = useState(null);

    useEffect(()=>{
        const onTimerToggle = ()=> {
            if(!startTime){
                setTimeParts(zeroTimeParts);
                setStateTime(new Date());
            }else {
                setStateTime(null);
            }
        }
        document.body.addEventListener('click', onTimerToggle);
        return () => document.body.removeEventListener('click', onTimerToggle);
    }, [startTime]);

    useEffect(() => {
        const tick = requestAnimationFrame(()=>{
            if(startTime){
                const currentDate = new Date();
                const diffInMillis = Math.abs(currentDate.getTime() - startTime.getTime());
                const diffInSeconds = diffInMillis / 1000;
                const diffSeconds =  diffInSeconds % 60;
                const diffMinutes = diffInSeconds >= 60 ? diffInSeconds / 60 : 0;
                const diffHours = diffMinutes >= 60 ? diffMinutes / 60 : 0;
                const timeParts = getTimePartsFromDateParts(diffHours, diffMinutes, diffSeconds);
                setTimeParts(timeParts);
            }
        });
        return () => cancelAnimationFrame(tick);
    }, [timeParts, startTime]);

    return (
        <VelocityContext.Provider value={{speed: 12}}>
            <div className="Stopwatch-help">
                Click anywhere to start / stop / reset.
            </div>
            <div className="row">
                {_renderRow(timeParts.minute)}
                {_renderDivider()}
                {_renderRow(timeParts.second)}
            </div>
        </VelocityContext.Provider>
    );
}

function _renderRow(timePart){
    return (
        <React.Fragment>
            <ClockNumber number={NUMBERS[timePart.first]} />
            <ClockNumber number={NUMBERS[timePart.second]} />
        </React.Fragment>
    )
}

function _renderDivider(){
    return <div className="col">
        <SubClock targetAngle={emptySpace} />
        <SubClock targetAngle={emptySpace} />
        <SubClock targetAngle={emptySpace} />
    </div>
}

export default DigitalClock;