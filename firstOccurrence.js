var strStr = function(haystack, needle) {
    if(!haystack.includes(needle)){
        return -1;
    }else{

        for(let i = 0; i<haystack.length; i++){

            if(haystack.substring(i, i+needle.length) === needle){
                // console.log('i',i);
                return i;
            }
        }


        return true;
    }
};

console.log(strStr("leetleet","leet"));
console.log(strStr("mississippi","sipp"));