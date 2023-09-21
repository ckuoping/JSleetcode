var maxProfit = function(prices) {
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
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));