export function zeroTimeParts () {
    return {
        hour: { first: 0, second: 0},
        minute: { first: 0, second: 0},
        second: { first: 0, second: 0},
    }
};


function prependZero(time){
    return time < 10 ? '0' + time : '' + time;
}

function _getTimePartsForTimeString(time) {
    return { 
        first: time[0],
        second: time[1]
    }
}

export function getTimePartsFromDateParts(hours, minutes, seconds, date){
    return {
        date,
        hour: { ..._getTimePartsForTimeString(prependZero(hours))},
        minute: { ..._getTimePartsForTimeString(prependZero(minutes))},
        second: { ..._getTimePartsForTimeString(prependZero(seconds))}
    }
}


export function getTimePartsFromTime(date){
    const hour = date.getHours().toString();
    const minute = date.getMinutes().toString(); 
    const second = date.getSeconds().toString();
    return {
        date,
        hour: { ..._getTimePartsForTimeString(prependZero(hour))},
        minute: { ..._getTimePartsForTimeString(prependZero(minute))},
        second: { ..._getTimePartsForTimeString(prependZero(second))}
    }
}
