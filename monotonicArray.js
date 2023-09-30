var isMonotonic = function(nums) {

    if(nums.length === 1) return true;

    let index = 1;

    while(index < nums.length -1){
        let curr = nums[index];

        let prev_id = index - 1;
        let prev = nums[prev_id];
        while(prev === curr){
            prev_id--;
            prev = nums[prev_id];
        }
        
        let next_id = index + 1;
        let next = nums[next_id];
        while(next === curr){
            next_id++;
            next = nums[next_id];
        }
        

        if( (next - curr  > 0 && curr - prev < 0) || (next - curr  < 0 && curr - prev > 0)){
            return false;
        }

        index ++;

    }

    return index === nums.length - 1

    /*
    let increasing =  true;
    let decreasing = true;

    for(let i = 1; i < nums.length; i++){
        if(nums[i-1] < nums[i]){
            decreasing = false;
        }
        else if(nums[i - 1] > nums[i]){
            increasing = false;
        }
    }
    return increasing || decreasing
    */
    
};

console.log(isMonotonic([11,11,9,4,3,3,3,1,-1,-1,3,3,3,5,5,5]),'false')  
console.log(isMonotonic([1,2,2,3]),'true')  
console.log(isMonotonic([6,5,4,4]),'true')  
console.log(isMonotonic([1,3,2]),'false')
console.log(isMonotonic([1,1,1]),'true')
console.log(isMonotonic([1]),'true')
