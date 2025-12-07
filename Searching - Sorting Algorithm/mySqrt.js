var mySqrt = function (x) {
    if (x === 0) return 0;
    let leftElement = 1;
    let rightElement = x;
    while (leftElement <= rightElement) {
        let middleElement = Math.floor((leftElement + rightElement) / 2);
        if (middleElement * middleElement == x) {
            return middleElement;
        } else if (x < middleElement * middleElement) {
            rightElement = middleElement - 1;
        } else {
            leftElement = middleElement + 1;
        }
    }
    return rightElement
};