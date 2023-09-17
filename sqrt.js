var mySqrt = function(x) {
    // 1.JS內建函式庫法 
    /*
    return Math.floor(Math.sqrt(x));
    */

    // 2.迴圈遞迴法 
    for(let i = 0; i<=x; i++){
        let squr = i * i;
        if(squr === x){
            return i;
        }else if(squr > x){
            return i - 1;
        }
    }
};