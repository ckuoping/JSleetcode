
// var threeSumClosest = function(nums, target) {

//     // let times = 0
//     // let minnum = 0;
//     let sumnum = nums[0] + nums[1] + nums[2];
    

//     for(let i = 0; i<nums.length; i++){
//         for(let j = i+1; j<nums.length; j++){
//             for(let k = j+1; k<nums.length; k++){

//                 let sum = nums[i]+nums[j]+nums[k];
//                 // let diff = Math.abs(target - sum);

//                 if(Math.abs(target - sum) < Math.abs(target - sumnum)) sumnum = sum;

//                 // if(times == 0) {
//                 //     minnum = diff;
//                 //     sumnum = sum;
//                 // }else{
//                 //     if(diff < minnum)
//                 //     {
//                 //         minnum = diff;
//                 //         sumnum = sum;
//                 //     }
//                 // }
                
//                 // times ++;
//             }
//         }
//     }

//     return sumnum;
// };


/*
var threeSumClosest = function(nums,target) {

    let results = nums[0] + nums[1] + nums[2];

    nums.sort((n1,n2)=>(n1-n2)); //由小到大排序

    for(let i=0; i<nums.length; i++){

        let start = i + 1;
        let end = nums.length - 1;

        while(start < end){
            const sum = nums[i] + nums[start] + nums[end];

            if(Math.abs(sum-target) < Math.abs(results-target)){
                results = sum;
            } 

            if(sum > target){
                end = end - 1;
            }else if(sum <target){
                start= start + 1;               
            }
            else{
                return target;
            }
        }
    }

    return results;
};
*/

var threeSumClosest = function(nums, target) {
    // let sum = nums[0]+nums[1]+nums[2];
    let sum;
    let times = 0;

    for (let i = 0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k = j+1; k<nums.length; k++){
                if(times === 0){  // 第0次先讓sum有初始值
                    sum = nums[i]+nums[j]+nums[k];
                }else{            // 第1次之後再開始和第0次做比較
                    if(Math.abs(target - (nums[i]+nums[j]+nums[k]) < Math.abs(target - sum))){
                        sum = nums[i]+nums[j]+nums[k];
                    }
                }

                times++;
            }
        }
    }

    return sum;
}

var threeSum = function(nums,target){
    let results = nums[0] + nums[1] + nums[2];

    nums.sort((a,b)=>a-b);         // 由小到大排序


    for(let i=0; i<nums.length; i++){
        let start = i + 1;
        let end = nums.length - 1;

        // if(nums[i]>0) break;
        if(nums[i] === nums[i-1]) continue;   // 要開始跑下一個i時若發現跟前一個相同則跳過

        while(start < end){
            let sum = nums[i] + nums[start] + nums[end];

            if(Math.abs(target - sum) < Math.abs(target - results)){
                results = sum;
            }

            // 先決定好sum是否可以取代results後，再去判斷該sum是比target大還是小，以決定start和end的變化：
            if(sum > target){
                end = end - 1;     // 固定start, 讓end-1後再做一次
            }
            else if(sum < target){
                start = start + 1; // 固定end, 讓start+1後再做一次
            }
            else{
                return target;

            }

        }

    }

    return results;
}
console.log(threeSum([-1,2,1,-4],1))

