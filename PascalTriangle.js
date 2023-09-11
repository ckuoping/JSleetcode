// [[1]]
// [[1], [1,1]]
// [[1], [1,1], [1,2,1]]

/*
var generate = function(numRows) {
    let res = [[1]];

    for(let i=1; i<numRows; i++){
        
        let arr = [1];
        let prev = res[i-1];

        for(let j = 1; j<=i;j++){
            let prevnum = prev[j-1];
            let curvum = prev[j] ? prev[j] : 0;

            arr.push(prevnum + curvum);
        }

        res.push(arr);

    }

    return res
};
*/

var generate = function(numRows) {
    let res = [[1]];

    for(let i = 1; i<numRows; i++){
        let prevRow = res[i-1]; // 上一列
        let num = [1];

        for(let j = 1; j <= i; j++ ){
            let prevnum = prevRow[j-1];
            let currnum  = prevRow[j] ? prevRow[j] : 0;
            
            num.push(prevnum + currnum);
        }

        res.push(num);
    }

    return res
};

console.log(generate(5));