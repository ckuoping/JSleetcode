var plusOne = function(digits) {
    // let num = digits.join().replaceAll(',','');
    // console.log(num)

    let endIndex = digits.length - 1;

    if(digits[endIndex] === 9){
        while(digits[endIndex] === 9){
            digits[endIndex] = 0;
    
            if(digits[endIndex - 1]){
                if(digits[endIndex - 1]!==9){
                    digits[endIndex - 1]+=1
                }else{
                    endIndex--;
                    continue;
                }
            }else{
                digits.unshift(1);
            }
    
        }
    }else{
        digits[endIndex ]+=1;
    }


    return digits;

};

console.log(plusOne([9]))