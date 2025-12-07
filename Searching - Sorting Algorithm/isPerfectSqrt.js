/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num == 0) return false;
    let leftElement = 1;
    let rightElement = num;
    while (leftElement <= rightElement) {
        let middleElement = Math.floor((leftElement + rightElement) / 2);
        if (middleElement * middleElement == num) {
            return true
        } else if (num < middleElement * middleElement) {
            rightElement = middleElement - 1;
        } else {
            leftElement = middleElement + 1;
        }
    }
    return false
};