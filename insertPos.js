var searchInsert = function(nums, target) {

    // // 1.先判斷該元素有無存在，若有直接回傳該index
    // if(nums.includes(target)) return nums.indexOf(target);

    // // 2.若無則找出陣列中第一個比target大的元素，回傳該元素index
    // let index = 0;
    // while(nums[index] < target){
    //     index ++;
    // }

    // return index
      // 先找出左右兩邊的位置是多少，分別是尋找範圍的起和迄
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    // 找出起訖的中間位置
    const middle = Math.floor((left + right) / 2);
    // 如果中間位置的元素等於目標數字，就直接回傳
    if (nums[middle] === target)
      return middle;
    // 如果中間位置的元素大於目標數字，就把迄的位置設成中間位置 - 1
    else if (nums[middle] > target)
      right = middle - 1;
    // 如果中間位置元素大於目標數字，就把起的位置設成中間位置 + 1
    else if (nums[middle] < target)
      left = middle + 1;

    console.log('left id',left)
    console.log('rightt id',right)
    console.log('mideel id',middle)
  }
  // 如果最後都沒找到，就把迄的位置 + 1 回傳
  return right + 1;

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

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 0));
// console.log(searchInsert([1, 3, 5, 6], 4))
console.log(searchInsert([1, 3, 5, 6], 7));;
// console.log(searchInsert([1, 2, 3, 4, 5, 10], 10));