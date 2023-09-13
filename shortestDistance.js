var shortestToChar = function(s, c) {
    let arr = s.split("");
    let ans = [];

    for(let i = 0; i<arr.length; i++){
        if(arr[i] === c){
            ans[i] = 0;
            continue;
        }else{
            
            let leftIndex = arr.slice(i+1, arr.length).indexOf(c);
            let leftDistance = leftIndex + 1;

            let rightIndex = arr.slice(0, i).lastIndexOf(c);
            let rightDistance = arr.slice(0, i).length - rightIndex;

            if(leftIndex === -1){
                ans[i] = rightDistance;
            }
            else if (rightIndex === -1){
                ans[i] = leftDistance;
            }
            else
            {
                if(leftDistance < rightDistance){
                    ans[i] = leftDistance;
                }
                else if(leftDistance > rightDistance){
                    ans[i] = rightDistance;
                }
                else
                {
                    ans[i] = leftDistance;
                }
            }
        }
    }


    return ans
};

console.log(shortestToChar("loveleetcode",'e'));
console.log(shortestToChar("aaab",'b'))
