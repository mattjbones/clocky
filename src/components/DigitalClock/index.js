import React, { useState, useEffect } from 'react';
import ClockNumber, { NUMBERS } from '../ClockNumber';
import SubClock from '../SubClock';
import { emptySpace } from '../../utils/clockPositions';
import { getTimePartsFromTime } from '../../utils/timeParts';
import { VelocityContext } from '../../utils/velocityContext';

function DigitalClock() {
    const [timeParts, setTimeParts] = useState(getTimePartsFromTime(new Date()));
    useEffect(() => {
        const tick = setTimeout(()=>{
            const { date } = timeParts;
            const currentDate = new Date();
            const hoursChanged = currentDate.getHours() !== date.getHours();
            const minutesChanged = currentDate.getMinutes !== date.getMinutes();
            if(hoursChanged || minutesChanged){
                setTimeParts(getTimePartsFromTime(currentDate));
            }
        }, 1000);
        return () => clearTimeout(tick);
    }, [timeParts]) 
    return (
        <VelocityContext.Provider value={{speed: 2}}>
            <div className="row">
                {_renderRow(timeParts.hour)}
                {_renderDivider()}
                {_renderRow(timeParts.minute)}
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