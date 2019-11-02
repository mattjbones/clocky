import React, { useState, useEffect } from 'react';
import ClockNumber, { NUMBERS } from '../ClockNumber';
import SubClock from '../SubClock';
import { emptySpace } from '../../utils/clockPositions';
import { zeroTimeParts, getTimePartsFromDateParts } from '../../utils/timeParts';

function DigitalClock() {
    const [timeParts, setTimeParts] = useState(zeroTimeParts);
    const [startTime, setStateTime] = useState(null);

    useEffect(()=>{
        const onTimerToggle = ()=> {
            if(!startTime){
                setTimeParts(zeroTimeParts);
                setStateTime(new Date());
                console.log('starting');
            }else {
                setStateTime(null);
                setTimeParts(zeroTimeParts);
            }
        }
        document.body.addEventListener('click', onTimerToggle);
        return () => document.body.removeEventListener('click', onTimerToggle);
    }, [startTime]);

    useEffect(() => {
        requestAnimationFrame(()=>{
            if(startTime){
                const currentDate = new Date();
                const diffInMillis = Math.abs(currentDate.getTime() - startTime.getTime());
                const diffSeconds = diffInMillis / 1000;
                const diffMinutes = diffSeconds >= 60 ? diffSeconds / 60 : 0;
                const diffHours = diffMinutes >= 60 ? diffMinutes / 60 : 0;
                const timeParts = getTimePartsFromDateParts(diffHours, diffMinutes, diffSeconds);
                setTimeParts(timeParts);
            }
        });
    }, [timeParts, startTime]);

    return <div className="row">
        {_renderRow(timeParts.minute)}
        {_renderDivider()}
        {_renderRow(timeParts.second)}
    </div>;
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