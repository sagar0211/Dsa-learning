/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let str = "";
    let length = strs[0].length;

    for (let i = 0; i < strs.length; i++) {
        length = Math.min(length, strs[i].length);
    }

    for (let i = 0; i < length; i++) {
        let char = strs[0][i];
        let j = 1;
        while (j < strs.length && strs[j][i] === char) j++;
        if (j !== strs.length) return str;
        str += strs[0][i];
    }
    return str;
};
const strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))
