var isPalindrome = function(x) {
   
    let x_ = x.toString().split("").join();
    let y_ = x.toString().split("").reverse().join();

    if(x_ === y_) return true;
    else return false;


   
   
};


console.log(isPalindrome(121))