var majorityElement = function(nums) {

    let repeating = {};

    if(nums.length === 1) return nums[0];

    for(let i = 0; i<nums.length; i++){
        if(!repeating[nums[i]]){
            repeating[nums[i]] = 1;
        }else{
            repeating[nums[i]]++;

            if(repeating[nums[i]]>=nums.length/2){
                return nums[i];
            }
        }
    }
    
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,1,2,2]));