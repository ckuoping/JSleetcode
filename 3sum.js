// 一個整數陣列，找出其中3個數加起來為0的所有可能性，且不能重複

// 最佳解
/*
var threeSum = function(nums) {
    let results = [];
    nums.sort((n1,n2)=>(n1-n2)); //由小到大排序

    for(let i=0; i<nums.length; i++){
        let start = i + 1;
        let end = nums.length - 1;
        if(nums[i]>0) break;
        if(nums[i] === nums[i-1]) continue;   //當前的i若與上一個i的數值相同，則跳過當前

        while(start < end){
            let sum = nums[i] + nums[start] + nums[end];

            if(sum > 0){
                end = end - 1;
            }else if(sum <0){
                start= start + 1;               
            }
            else{
                results.push([nums[i], nums[start],nums[end]]);
                while(nums[start] === nums[start+1]){  //若start與下一個start的數值相同，則直接做下一個
                    start= start + 1;
                }
                while(nums[end] === nums[end-1]){  //若end與前一個end的數值相同，則直接做前一個
                    end = end - 1;
                }
                start= start + 1;
                end = end - 1;
            }
        }
    }

    return results;
};

*/

// 暴力解
/*
var threeSum = function(nums) {
        let results = [];
        let repeatings = {}; //用物件做檢查比較有效率

        for(let i = 0; i<nums.length; i++){
            for(let j = i+1; j<nums.length; j++){
                for(let k = j+1; k<nums.length; k++){
                    if(nums[i]+nums[j]+nums[k] === 0)
                    {
                        let key = [nums[i],nums[j],nums[k]].sort().join();
                        if(!repeatings[key]) // 若key不存在
                        {
                            results.push([nums[i],nums[j],nums[k]]);
                            repeatings[key] = true;
                        }
                        
                    }
                }
            }
        }

    return results;
};
*/

// 暴力解
/*
var threeSum = function(nums){
    let results = [];
    let repeating = {};
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            for(let k = j + 1; k<nums.length; k++){
                if(nums[i] + nums[j]+ nums[k] === 0){
                    let key = [nums[i],nums[j],nums[k]].sort().join();
                    if(!repeating[key]){
                        results.push([nums[i],nums[j],nums[k]]);
                        repeating[key] = true;
                    }
                }
            }
        } 
    }

    return results;
}
*/

// 最佳解
var threeSum = function(nums){
    let results = [];

    nums.sort((a,b)=>a-b);         // 由小到大排序


    for(let i=0; i<nums.length; i++){
        let start = i + 1;
        let end = nums.length - 1;

        if(nums[i]>0) break;
        if(nums[i] === nums[i-1]) continue;   // 要開始跑下一個i時若發現跟前一個相同則跳過

        while(start < end){
            let sum = nums[i] + nums[start] + nums[end];

            if(sum > 0){
                end = end - 1;     // 固定start, 讓end-1後再做一次
            }
            else if(sum < 0){
                start = start + 1; // 固定end, 讓start+1後再做一次
            }
            else{

                results.push([nums[i],nums[start],nums[end]]);

                while(nums[start] === nums[start + 1]){
                    start = start + 1;
                }
                while(nums[end] === nums[end - 1]){
                    end = end - 1;
                }
                start = start + 1;
                end = end - 1;
            }

        }

    }

    return results;
}
console.log(threeSum([-1,0,1,2,-1,-4]));