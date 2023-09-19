var singleNumber = function(nums) {
    let repeating = {};

    for (let i = 0; i < nums.length; i++) {
        if (!repeating[nums[i]]) {
            repeating[nums[i]] = true;
        } else {
            repeating[nums[i]] = false;
        }
    }

    for (const key in repeating) {
        if (repeating[key]) {
            return key
        }
    }


    // nums = nums.sort();

    // for (let i = 0; i < nums.length; i++) {
    //     console.log('i', i);
    //     if (nums[i] === nums[i + 1]) {
    //         nums.splice(i, 2);
    //         i--; // 下次i會從index = 1開始，需要改成從0開始
    //     } else {
    //         return nums[i];
    //     }
    // }
};

console.log(singleNumber([4, 1, 2, 1, 2]));