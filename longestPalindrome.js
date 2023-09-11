// 1.把所有可能的子字串都找出來
// 2.確認這些子字串哪些是回文
// 3.將回文字串找出最長的
// "babad"

// 暴力解
var longestPalindrome = function(s) {
    let ans = '';
    let str_num = 0;

    for(let i =0; i<s.length; i++){

        for(let j = i +1; j<=s.length; j++){
            let substring = s.substring(i,j);
            checkSubstring(substring);
        }

    }

    function checkSubstring (str){
        
        let str_ori = str.split('').join();
        let str_rev = str.split('').reverse().join();

        if(str_ori === str_rev){
            if(str.length > str_num){
                str_num = str.length;
                ans = str;
            }
        }  
    }
    return ans;
};

console.log(longestPalindrome("cbbd"))