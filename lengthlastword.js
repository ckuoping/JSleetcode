/*
var lengthOfLastWord = function(s) {
    // 寫法1
    
    const word = s.trim().split(" ");
    const wordlen = word[word.length-1].length;

    return wordlen;
    

    // 寫法2
    
    const word = s.trim();
    return (word.length - 1) - word.lastIndexOf(" ");
    

    // 寫法3
    let endIndex = s.length - 1;
    // 排除末端的空白字元
    while(s[endIndex]===" "){
        endIndex--;
    }

    // 從未後一個字開始算他的長度
    let len = 0 //起始
    while(s[endIndex]!==" " && endIndex>=0)
    {
        len++;
        endIndex--;
    }

    return len;
};
*/

var lengthOfLastWord = function(s) {

    // 寫法 1
    // let strArr = s.trim().split(" "); 
    // return strArr[strArr.length - 1].length

    // 寫法 2
    s = s.trim();

    let endIndex = s.length - 1;
    let len = 0;

    while(s[endIndex] !== " " && s[endIndex] !== undefined){
        len++;
        endIndex--
    }

    return len;
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))