// var convert = function(s, numRows) {

//     if(numRows === 1){
//         return s;
//     }
//     // 強調要一列一列輸出
//     let results = '';
//     let gap = numRows + numRows - 2;

//     for(let i = 0; i<numRows; i++){
//         for(let j = i; j<s.length; j+=gap){
//             results += s[j];

//             // 取得中間的字
//             if( i>0 && i < numRows-1){
//                 // 第一列和最後一列一定不會有中間字
//                 // 每一列只有一個中間字
//                 // 每一列的中間字是 當前位置 + gap - 2倍的列數 
//                 let middleIndex = j + gap - (2*i);
//                 if(middleIndex < s.length){
//                   results += s[middleIndex];  
//                 }

//             }
//         }
//     }

//     return results;
// };

var convert = function(s, numRows) {
    let res = "";
    for (let i = 0; i < numRows; i++) { // i = 列
        let gap = numRows + numRows - 2
        for (let j = i; j < s.length; j += gap) {
            res = res + s[j];

            if (i > 0 && i < numRows - 1) {
                let mid = j + gap - 2 * i;
                if (mid < s.length)
                    res = res + s[mid];
            }
        }
    }

    return res;
}

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));