var climbStairs = function(n) {
    if( n === 1){
        return 1;
    }else if( n === 2){
        return 2;
    }

    let minus_1 = 2;
    let minus_2 = 1;
    let step = 3;
    while(step <= n){
        let result = minus_1 + minus_2;
        minus_2 = minus_1;
        minus_1 = result;
        step++;
    }

    return result;



};