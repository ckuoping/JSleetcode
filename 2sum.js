var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {

        // advice : do not make function within a loop
        let id = nums.findIndex((item) => item === (target - nums[i]));

        // may not use same element twice : id should not be the same
        if (id !== -1 && i !== id) return ([i, id]);

    }
};

console.log(twoSum([3, 3], 6))