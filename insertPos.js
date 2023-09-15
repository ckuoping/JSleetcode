var searchInsert = function(nums, target) {


    for (let i = 0; i < nums.length; i++) {
        for (let i = 0; i < nums.length; i++) {
            if (target < nums[i]) {
                return 0;
            }

            if (target >= nums[i] && target < nums[i + 1] && nums[i + 1] !== undefined) {
                return (target == nums[i]) ? i : i + 1;
            }

            if (target >= nums[i] && nums[i + 1] === undefined) {
                return (target == nums[i]) ? i : nums.length;
            }


        }
    }
    // nums.push(target);
    // nums.sort();
    // console.log(nums.sort((a,b)=>a-b))
    // return nums.indexOf(target);

    // return index;

};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 2, 3, 4, 5, 10], 10));