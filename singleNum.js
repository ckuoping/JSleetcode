var singleNumber = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }else{
        let temp = [...nums];
        for(let i=0; i<nums.length; i++){
            temp.splice(i,1);
            if(temp.indexOf(nums[i]) === -1){
                return nums[i];
            }else{
                temp = [...nums];
            } 
        }
    }
};

console.log(singleNumber([4,1,2,1,2]));