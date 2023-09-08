// 找出三邊之和 <= 20 的所有等腰三角形， 但不包含正三角形
// 2a + b <=20 的所有組合
/* 
條件限制

1.不能為正三角形
a !== b

2.兩邊和大於第三邊
a + a > b
a + b > a --> b > 0 --> 不用寫

3.兩邊差小於第三邊
a - a < b --> 0 < b --> 不用寫
a - b < a --> 0 < b --> 不用寫
b - a < a --> b < a + a

所以實際的三角形條件只有 a + a > b
 





*/

let trangle = function() {
    let a = 2;
    let b = 1;
    const sum = 20;
    let ans = 0;

    for (let a = 2; a <= sum; a++) {
        for (let b = 1; b <= sum; b++) {
            if (2 * a + b <= sum && a !== b && (2 * a) > b) {
                console.log('a:' + a, 'a:' + a, 'b:' + b, 'sum:' + (2 * a + b));
                ans++;
            }
        }
    }

    return ans;
}


console.log(trangle())