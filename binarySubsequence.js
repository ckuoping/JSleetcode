/*
// Questions
Given a binary string, find the minimum number of subsequences that the string can be broken into. A subsequences of a string is obtained by deleting some characters from the string while maintaining the order. For example, "011" is a subsequence of "0101" while "100" is not
*/

function findMinSubsequences(binaryString) {
    let count = 0;
    let prevChar = '';

    for (let i = 0; i < binaryString.length; i++) {
        const currentChar = binaryString[i];

        if (currentChar === '1') {
            count++;
        } else if (prevChar === '1') {
            count++;
        }

        prevChar = currentChar;
    }

    return count;
}


console.log(findMinSubsequences('0101')); // 輸出結果為 2
console.log(findMinSubsequences('11001010')); // 輸出結果為 2
console.log(findMinSubsequences('00100')); // 輸出結果為 3