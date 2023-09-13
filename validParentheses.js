var isValid = function(s) {
    // let left = ['(','[','{'];
    // let right = [')',']','}'];

    // for(let i = 0; i<s.length; i = i+2){
    //     if( s.length%2 ===1 || right.includes(s[i])){
    //         return false;
    //     }
    //     return (left.indexOf(s[i]) === right.indexOf(s[i+1]))? true:false
    // }
    let bracket = [];
    let pair = {
        "}": "{",
        "]": "[",
        ")": "("
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
            bracket.push(s[i]);
        } else {
            if (bracket.pop() !== pair[s[i]]) {
                console.log('bracket.pop()', bracket.pop())
                console.log('pair[i]', pair[i])
                return false;
            }
        }
    }

    return bracket.length === 0;
};


console.log(isValid("(]"))
console.log(isValid("{[]}"))