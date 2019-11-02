import Clock from '../Clock';
import React from 'react';

const createAngleSet = (hour, minute) => ({hour, minute});
const bothLeft = createAngleSet(270, 90);
const bothRight = createAngleSet(90, 270);
const bothTop = createAngleSet(0, 180);
const bothBottom = createAngleSet(180, 0);
const topAndBottom = createAngleSet(0, 0);
const rightAndLeft = createAngleSet(90, 90);
const topLeftCorner = createAngleSet(90, 0);
const topRightCorner = createAngleSet(270, 0);
const bottomLeftCorner = createAngleSet(0, 270);
const bottomRightCorner = createAngleSet(0, 90);
const emptySpace = createAngleSet(225, 45);

export const NUMBERS = {
    ZERO: {
        a1: { ...topLeftCorner },
        a2: { ...topAndBottom },
        a3: { ...bottomLeftCorner },
        b1: { ...topRightCorner },
        b2: { ...topAndBottom },
        b3: { ...bottomRightCorner }
    },
    ONE: {
        a1: { ...emptySpace },
        a2: { ...emptySpace },
        a3: { ...emptySpace },
        b1: { ...bothBottom },
        b2: { ...topAndBottom },
        b3: { ...bothTop }
    },
    TWO: {
        a1: { ...bothRight },
        a2: { ...topLeftCorner },
        a3: { ...bottomLeftCorner },
        b1: { ...topRightCorner },
        b2: { ...bottomRightCorner },
        b3: { ...bothLeft }
    },
    THREE: {
        a1: { ...bothRight },
        a2: { ...bothRight },
        a3: { ...bothRight },
        b1: { ...topRightCorner },
        b2: { ...topAndBottom },
        b3: { ...bottomRightCorner }
    },
    FOUR: {
        a1: { ...bothBottom },
        a2: { ...bottomLeftCorner },
        a3: { ...emptySpace },
        b1: { ...bothBottom },
        b2: { ...topAndBottom },
        b3: { ...bothTop }
    },
    FIVE: {
        a1: { ...topLeftCorner },
        a2: { ...bottomLeftCorner },
        a3: { ...bothRight },
        b1: { ...bothLeft },
        b2: { ...topRightCorner },
        b3: { ...bottomRightCorner }
    },
    SIX: {
        a1: { ...topLeftCorner },
        a2: { ...topAndBottom },
        a3: { ...bottomLeftCorner },
        b1: { ...bothLeft },
        b2: { ...topRightCorner },
        b3: { ...bottomRightCorner }
    },
    SEVEN: {
        a1: { ...bothRight },
        a2: { ...emptySpace },
        a3: { ...emptySpace },
        b1: { ...topRightCorner },
        b2: { ...topAndBottom },
        b3: { ...bothTop }
    },
    EIGHT: {
        a1: { ...topLeftCorner },
        a2: { ...topLeftCorner },
        a3: { ...bottomLeftCorner },
        b1: { ...topRightCorner },
        b2: { ...topRightCorner },
        b3: { ...bottomRightCorner }
    },
    NINE: {
        a1: { ...topLeftCorner },
        a2: { ...bottomLeftCorner },
        a3: { ...bothRight },
        b1: { ...topRightCorner },
        b2: { ...topAndBottom },
        b3: { ...bottomRightCorner }
    },
}

function ClockNumber({number}) {
    const { a1, a2, a3, b1, b2, b3 } = number;
    return (
        <div className="row">
            <div className="col">
                <Clock key="a1" targetAngle={a1}/>
                <Clock key="a2" targetAngle={a2}/>
                <Clock key="a3" targetAngle={a3}/>
            </div>
            <div className="col">
                <Clock key="b1" targetAngle={b1}/>
                <Clock key="b2" targetAngle={b2}/>
                <Clock key="b3" targetAngle={b3}/>
            </div>
        </div>
    );
}

export default ClockNumber;
