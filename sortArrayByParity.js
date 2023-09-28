var sortArrayByParity = function(nums) {
    // 先判斷第一個是奇還是偶
    // 若為奇，後面的數字若為奇，則push，若為偶則unshift
    // 若為偶，後面的數字若為偶，則push，若為奇則unshift
 
    let arr = [];
    for(let i = 0; i<nums.length; i++){

        // 奇數要擺放在陣列後面
        if(nums[i]%2 === 1){
            arr.push(nums[i]);
        
        // 偶數要擺放在陣列前面 
        }else{
            arr.unshift(nums[i]);
        }
    }

    return arr;

};

console.log(sortArrayByParity([3,1,2,4]))
console.log(sortArrayByParity([0]))