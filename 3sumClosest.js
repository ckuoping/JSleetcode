
var threeSumClosest = function(nums, target) {

    // let times = 0
    // let minnum = 0;
    let sumnum = nums[0] + nums[1] + nums[2];
    

    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            for(let k = j+1; k<nums.length; k++){

                let sum = nums[i]+nums[j]+nums[k];
                // let diff = Math.abs(target - sum);

                if(Math.abs(target - sum) < Math.abs(target - sumnum)) sumnum = sum;

                // if(times == 0) {
                //     minnum = diff;
                //     sumnum = sum;
                // }else{
                //     if(diff < minnum)
                //     {
                //         minnum = diff;
                //         sumnum = sum;
                //     }
                // }
                
                // times ++;
            }
        }
    }

    return sumnum;
};


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
console.log(threeSumClosest([-1,2,1,-4],1))

