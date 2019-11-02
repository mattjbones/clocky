
const createAngleSet = (hour, minute) => ({hour, minute});
export const bothLeft = createAngleSet(270, 90);
export const bothRight = createAngleSet(90, 270);
export const bothTop = createAngleSet(0, 180);
export const bothBottom = createAngleSet(180, 0);
export const topAndBottom = createAngleSet(0, 0);
export const rightAndLeft = createAngleSet(90, 90);
export const topLeftCorner = createAngleSet(90, 0);
export const topRightCorner = createAngleSet(270, 0);
export const bottomLeftCorner = createAngleSet(0, 270);
export const bottomRightCorner = createAngleSet(0, 90);
export const emptySpace = createAngleSet(225, 45);
