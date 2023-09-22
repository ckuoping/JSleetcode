var maxProfit = function(prices) {
    // 方法 1：雙重迴圈
    /*
    let max_profit = 0;
    for(let i = 0; i<prices.length; i++){
        for(let j = i+1; j<prices.length; j++){
            let profit = (prices[j] - prices[i] > 0)? prices[j] - prices[i] : 0;
            if(profit > max_profit){
                max_profit = profit;
            }
        }
    }

    return max_profit;
    */
    // 方法 2：
    let min = Number.MAX_SAFE_INTEGER;
    let max_profile = 0;

    for (let i = 0; i < prices.length; i++) {

        // 先找出陣列中最低的數值
        if (prices[i] < min) {
            min = prices[i];
        }

        // 再找出陣列中各元素和該min的差異值
        let diff = prices[i] - min;

        // 若差異大於前一次紀錄的差異，則替換差議值
        if (diff > max_profile) {
            max_profile = diff;
        }
    }

    return max_profile;

};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));