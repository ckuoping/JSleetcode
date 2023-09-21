var fourSum = function(nums, target) {
    s_nums = nums.sort((a, b) => a - b);
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        // 處理i的重複
        if (nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            // 處理j的重複：j>i+1以防止第一次的j也被continue掉
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]

                if (sum > target) {
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    console.log('i j left right', i, j, left, right)
                    results.push([nums[i], nums[j], nums[left], nums[right]]);

                    // 處理left和right的重複
                    while (nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (nums[right] === nums[right - 1]) {
                        right--;
                    }

                    right--;
                    left++;
                }
            }
        }
    }

    return results;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));