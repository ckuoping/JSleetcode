var findTheDifference = function(s, t) {
    for (let i = 0; i < t.length; i++) {
        if (s.indexOf(t[i]) === -1) {
            return t[i];
        }

        s = s.replace(t[i], "");
    }

    return s[0];
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("abcd", "abgcd"));
console.log(findTheDifference("", "y"));
console.log(findTheDifference("a", "aa"));