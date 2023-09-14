var searchInsert = function(nums, target) {

    // let index = 0;

    // for(let i = 0; i<nums.length; i++){
    //     if(target < nums[i]){
    //         console.log('here1');
    //         return 0;
    //     }
        
    //     if (target > nums[i] && target < nums[i+1]){
    //         console.log('here2');
    //         return i;
    //     }

    //     if(target > nums[nums.length - 1]){
    //         console.log('here3');
    //         return nums.length - 1;
    //     }
    // }
    nums.push(target);
    nums.sort();
    console.log(nums.sort((a,b)=>a-b))
    return nums.indexOf(target);

    // return index;
    
};

console.log(searchInsert([1,3,5,6],5));
console.log(searchInsert([1,2,3,4,5,10],2));