var lengthOfLastWord = function(s) {

    
    const word = s.trim().split(" ");
    const wordlen = word[word.length-1].length;

    return wordlen;
};

console.log(lengthOfLastWord("luffy is still joyboy"))