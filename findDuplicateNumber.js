var findDuplicate = function(nums) {

    let repeatings = {};

    for(let i=0; i<nums.length;i++){
        if(!repeatings[nums[i]]){
            repeatings[nums[i]] = true;
        }else{
            repeatings[nums[i]] = false;
            return nums[i];
        }
        console.log(repeatings)
    }

};

console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([3,1,3,4,2]))