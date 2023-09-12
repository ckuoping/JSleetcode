var isValid = function(s) {
    let left = ['(','[','{'];
    let right = [')',']','}'];

    for(let i = 0; i<s.length; i = i+2){
        if( s.length%2 ===1 || right.includes(s[i])){
            return false;
        }

        // if(left.indexOf(s[i]) === right.indexOf(s[i+1])){
        //     return true;
        // }else{
        //     return false;
        // }

        return (left.indexOf(s[i]) === right.indexOf(s[i+1]))? true:false
    }
};


console.log(isValid("(]"))
console.log(isValid("{[]}"))