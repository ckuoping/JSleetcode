// 找到target在陣列中的位置

let findIndex = function(arr,target){
    let start = 0;
    let end = arr.length - 1;

    while (start <= end){

        let mid = Math.floor((start + end)/2);

        if(arr[mid] === target){
            return mid;
        }
        else if (arr[mid] > target){
            end = mid - 1;
        }
        else if (arr[mid] < target){
            start = mid + 1;
        }

    }

    // 若都找不到，則回傳-1
    return -1;
}

console.log(findIndex([1, 3, 5, 6], 5));
console.log(findIndex([1, 2, 3, 4, 5, 10], 10));
console.log(findIndex([1, 2, 3, 4, 5, 10], 11));