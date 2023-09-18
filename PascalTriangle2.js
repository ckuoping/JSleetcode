// [[1]]
// [[1], [1,1]]
// [[1], [1,1], [1,2,1]]


var generate = function(rowIndex) {

    // let res = [[1]];

    // for(let i = 1; i<numRows + 1; i++){
    //     let prevRow = res[i-1]; // 上一列
    //     let num = [1];

    //     for(let j = 1; j <= i; j++ ){
    //         let prevnum = prevRow[j-1];
    //         let currnum  = prevRow[j] ? prevRow[j] : 0;
            
    //         num.push(prevnum + currnum);
            
    //     }
    //     res.push(num);
    // }

    // return res[numRows];
    var row = [1];
    
    for(var i = 1 ; i <= rowIndex ; i++) {
        for(var j = i; j > 0; j--) {
            if(j === i)
                row[j] = 1;
            else
                row[j] = row[j - 1] + row[j];
        }
    }
    return row;
};

console.log(generate(1));