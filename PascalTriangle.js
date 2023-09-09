// [[1]]
// [[1], [1,1]]
// [[1], [1,1], [1,2,1]]
// [[1], [1,1], [1,2,1], [1,3,3,1]]
// [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]

var generate = function(numRows) {
    let arr = [[1]];

    for(let i = 1; i<numRows; i++){
        
        let start = [1];
        let prev = arr[i-1];

        // 每一列第n個值則是上一列n-1位子+n位子的值
        for(let j = 1; j<=i; j++){

            let prevnum = prev[j-1];
            // 每一列第n個值若並非此值，可以視為0。直接加n-1
            let curvnum = prev[j] ? prev[j] : 0;

            start.push(prevnum + curvnum);

        }
        arr.push(start);
    }

    return arr;
};

console.log(generate(3));