var reverseWords = function(s) {
    // let str = "";
    // let sentence = "";
    // for(let i = s.length-1; i >= 0; i--){
    //     if(s[i] === " "){
    //         continue;

    //     }else{
    //         str+=s[i];
    //     }
        
    // }

    // return str;

    let arr = s.split(" ");

    for(let i = 0; i<arr.length; i++){
        let str = "";
        for(let j = arr[i].length - 1; j >=0; j--){
            str += arr[i][j]
        }
        arr[i] = str;
    }

    return arr.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("God Ding"))