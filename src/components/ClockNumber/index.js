import SubClock from '../SubClock';
import React from 'react';
import { 
    emptySpace, 
    topAndBottom, 
    topLeftCorner, 
    topRightCorner, 
    bothBottom, 
    bothLeft, 
    bothRight, 
    bothTop, 
    bottomLeftCorner, 
    bottomRightCorner 
} from '../../utils/clockPositions';

export const NUMBERS = {
    empty: {
        a1: { ...emptySpace },
        a2: { ...emptySpace },
        a3: { ...emptySpace },
        b1: { ...emptySpace },
        b2: { ...emptySpace },
        b3: { ...emptySpace }
    },
    0: {
        a1: { ...topLeftCorner },
        a2: { ...topAndBottom },
        a3: { ...bottomLeftCorner },
        b1: { ...topRightCorner },
        b2: { ...topAndBottom },
        b3: { ...bottomRightCorner }
    },
    1: {
        a1: { ...emptySpace },
        a2: { ...emptySpace },
        a3: { ...emptySpace },
        b1: { ...bothBottom },
        b2: { ...topAndBottom },
        b3: { ...bothTop }
    },
    2: {
        a1: { ...bothRight },
        a2: { ...topLeftCorner },
        a3: { ...bottomLeftCorner },
        b1: { ...topRightCorner },
        b2: { ...bottomRightCorner },
        b3: { ...bothLeft }
    },
    3: {
        a1: { ...bothRight },
        a2: { ...bothRight },
        a3: { ...bothRight },
        b1: { ...topRightCorner },
        b2: { ...topAndBottom },
        b3: { ...bottomRightCorner }
    },
    4: {
        a1: { ...bothBottom },
        a2: { ...bottomLeftCorner },
        a3: { ...emptySpace },
        b1: { ...bothBottom },
        b2: { ...topAndBottom },
        b3: { ...bothTop }
    },
    5: {
        a1: { ...topLeftCorner },
        a2: { ...bottomLeftCorner },
        a3: { ...bothRight },
        b1: { ...bothLeft },
        b2: { ...topRightCorner },
        b3: { ...bottomRightCorner }
    },
    6: {
        a1: { ...topLeftCorner },
        a2: { ...topAndBottom },
        a3: { ...bottomLeftCorner },
        b1: { ...bothLeft },
        b2: { ...topRightCorner },
        b3: { ...bottomRightCorner }
    },
    7: {
        a1: { ...bothRight },
        a2: { ...emptySpace },
        a3: { ...emptySpace },
        b1: { ...topRightCorner },
        b2: { ...topAndBottom },
        b3: { ...bothTop }
    },
    8: {
        a1: { ...topLeftCorner },
        a2: { ...bothRight },
        a3: { ...bottomLeftCorner },
        b1: { ...topRightCorner },
        b2: { ...bothLeft },
        b3: { ...bottomRightCorner }
    },
    9: {
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
                <SubClock key="a1" targetAngle={a1}/>
                <SubClock key="a2" targetAngle={a2}/>
                <SubClock key="a3" targetAngle={a3}/>
            </div>
            <div className="col">
                <SubClock key="b1" targetAngle={b1}/>
                <SubClock key="b2" targetAngle={b2}/>
                <SubClock key="b3" targetAngle={b3}/>
            </div>
        </div>
    );
}

export default ClockNumber;
