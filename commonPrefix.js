// strs = ["flower","flow","flight"]  >> "fl"
// strs = ["dog","racecar","car"]  > ""
// strs = ["c","acc","ccc"] >> "c"

var longestCommonPrefix = function(strs) {
    let result = "";

    for (let endIndex = 0; endIndex < strs[0].length; endIndex++) {
        let str = strs[0].substring(0, endIndex + 1);
        // 該字串要存在於陣列的每個元素， 且該字串的索引要與元素的索引相同
        if (strs.every((ele) => ele.includes(str) && ele[0] === strs[0][0] && ele[endIndex] === strs[0][endIndex])) {
            result = str;
        }

        // if (strs.every((ele) => strs[0].substring(0, endIndex + 1) === ele.substring(0, endIndex + 1))) result = str;
    }

    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
    // console.log(longestCommonPrefix(["c", "acc", "ccc"]))