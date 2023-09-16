var searchInsert = function(nums, target) {

    /* 方法 A - JS 內建函式庫方法
    // 1.先判斷該元素有無存在，若有直接回傳該index
    if(nums.includes(target)) return nums.indexOf(target);

    // 2.若無則找出陣列中第一個比target大的元素，回傳該元素index
    let index = 0;
    while(nums[index] < target){
        index ++;
    }
    return index
    */

    // 方法 B - 二分法
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){

      let middle = Math.floor((left + right) / 2);
      
      // console.log('左邊ID',left)
      // console.log('右邊ID',right)
      // console.log('中間ID',middle,'數值',nums[middle])
      // console.log('==================')
      
      if(nums[middle] > target){
        
        right = middle - 1;

      }else if (nums[middle] < target){

        left = middle + 1;

      }else{
        return middle;
      }
    }

    // 有點不解 right + 1
    return right + 1;



    
    /* 方法 C - JS 內建函式庫方法
    // 1.先加入target
    nums.push(target);
    // 2.重新排序array，依照大小排序
    nums.sort();
    // 3.找出target所在的第一個索引
    return nums.indexOf(target);
    */
};

console.log(searchInsert([1, 3, 5, 6], 5));         // ans = 2
console.log(searchInsert([1, 3, 5, 6], 0));         // ans = 0
console.log(searchInsert([1, 3, 5, 6], 4))          // ans = 2
console.log(searchInsert([1, 3, 5, 6], 7));;        // ans = 4
console.log(searchInsert([1, 2, 3, 4, 5, 10], 10)); // ans = 5