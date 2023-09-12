/*
var removeDuplicates = function(nums) {
    
    // let len = 0;
    // let num;

    // for(let i=0; i<nums.length; i++){
    //     if(nums[i] !== num){
    //         nums[len] = nums[i];
    //         num = nums[len];
    //         len++;
    //     }
    // }

    // return len;
    
   let num;

   for(let i=0; i<nums.length; i++){
    if(nums[i] !== num){
        num = nums[i];
    }
    else{
        nums.splice(nums.indexOf(nums[i]),1);
        i--;
    }
   }

   return nums.length;
};
*/
var removeDuplicates = function(nums){
    // let len = 0;
    let num;

    for(let i=0; i<nums.length; i++)
    {
        // if(nums[i] !== num){
        //     num = nums[i];
        //     nums[len] = nums[i];
        //     len++;
        // }
        if(num !== nums[i]){
            num = nums[i];
        }else{
            nums.splice(nums.indexOf(nums[i]),1);
            i--;
        }

    }

    return nums.length, nums;

    // return len;
}
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))