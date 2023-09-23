var isPalindrome = function(s) {

    const s_clean = s.replace(/[^a-zA-Z0-9 ]|\s* /g, '').toLowerCase()

    let s_rev = "";

    for (let i = s_clean.length - 1; i >= 0; i--) {
        s_rev += s_clean[i];
    }

    return (s_clean === s_rev) ? true : false;


};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome(" "));
console.log(isPalindrome("race a car"));