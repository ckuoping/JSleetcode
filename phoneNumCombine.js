var letterCombinations = function(digits) {
    let matrix = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }

    let results = [];

    for (let i = 0; i < digits.length; i++) {
        if (!results.length) {
            results = matrix[digits[i]];
        } else {
            let temp = [];
            for (let j = 0; j < results.length; j++) {
                for (let k = 0; k < matrix[digits[i]].length; k++) {
                    temp.push(results[j] + matrix[digits[i]][k]);
                }
            }
            results = temp;
        }
    }
    return results;
};

console.log(letterCombinations("234"))