/*
var plusOne = function(digits) {
    // let num = parseInt(digits.join().replaceAll(',',''));
    // let num_plus1_arr = (num + 1).toString().split('');
    // return num_plus1_arr;

    let endIndex = digits.length - 1;

    if(digits[endIndex] !== 9){
        
        digits[endIndex ]+=1;

    }else{
        
        while(digits[endIndex] === 9){
            digits[endIndex] = 0;
    
            if(digits[endIndex - 1]){
                if(digits[endIndex - 1]!==9){
                    digits[endIndex - 1]+=1;
                }else{
                    endIndex--;
                    continue;
                }
            }else{
                digits.unshift(1);
            }
    
        }
    }


    return digits;

};
*/

var plusOne = function(digits) {
    let endIndex = digits.length - 1;

    if(digits[endIndex] !== 9){
        digits[endIndex]++;
        return digits;
    }else{
        while(digits[endIndex] === 9){
            digits[endIndex] = 0;

            // if(digits[endIndex - 1])
            // {
            //     if(digits[endIndex - 1] === 9){
            //         endIndex--;
            //         continue;
            //     }else{
            //         digits[endIndex - 1]++;
            //     }
                
            // }else{
            //     digits.unshift(1);
            // }
            
            if(digits[endIndex - 1] !== undefined){
                if(digits[endIndex - 1] === 9){
                    endIndex--;
                    continue;
                }else{
                    digits[endIndex - 1]++;
                }
            }else{
                digits.unshift(1);
            }

        }
    }


    return digits;

};

console.log(plusOne([9]));
console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));