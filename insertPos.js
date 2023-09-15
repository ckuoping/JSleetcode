var searchInsert = function(nums, target) {

    // 迴圈比對法
    for (let i = 0; i < nums.length; i++) {
        for (let i = 0; i < nums.length; i++) {

            // 若target比首位小，直接return 0
            if (target < nums[i]) {
                return 0;
            }

            // 若target>=前位，<後位，且後位不是undefined，則可能是前位的index或index + 1
            if (target >= nums[i] && target < nums[i + 1] && nums[i + 1] !== undefined) {
                return (target == nums[i]) ? i : i + 1;
            }

            // 若target>=前位，且後位是undefined，則可能是前位的index或直接最後一位
            if (target >= nums[i] && nums[i + 1] === undefined) {
                return (target == nums[i]) ? i : nums.length;
            }


        }
    }
    // JS 內建函式庫方法
    /*
    // 1.先加入target
    // 2.重新排序array，依照大小排序
    // 3.找出target所在的第一個索引
    */
    // nums.push(target);
    // nums.sort();
    // console.log(nums.sort((a,b)=>a-b))
    // return nums.indexOf(target);

    // return index;

};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 2, 3, 4, 5, 10], 10));