var searchInsert = function(nums, target) {

    let index = 0;

    // for(let i = 0; i<nums.length; i++){
    //     if(target < nums[i]){
    //         index = 0;
    //     }
    //     else if (target >= nums[i] && target < nums[i+1]){
    //         console.log('com',target,nums[i],nums[i+1],i)
    //         index = i;
    //         console.log(index)
    //     }
    //     else{
    //         index = nums.length - 1;
    //         console.log(index)
    //     }
    // }
    while(index < nums.length){
        if(target < nums[index]){
            index = 0;
        }
        else if (target >= nums[index] && target < nums[index+1]){
            console.log('com',target,nums[i],nums[i+1],i)
            index = i;
            console.log(index)
        }
        else{
            index = nums.length - 1;
            console.log(index)
        }
        index ++;
    }
    console.log(index)
    return index;
    
};

console.log(searchInsert([1,3,5,6],5));
// console.log(searchInsert("mississippi","sipp"));