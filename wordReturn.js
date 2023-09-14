function arrange(sentence) {
    // Write your code here
    
    // 1.remove . and make all lowercase
    sentence = sentence.toLowerCase();
    sentence = sentence.slice(0,-1);
    
    // 2.turn string into array and sort elements within
    let arr = sentence.split(" ");
    let ans = arr.sort((a,b) => a.length -b.length);
    
    // 3.modify first and last word
    let first_word = ans[0].charAt(0).toUpperCase() + ans[0].slice(1);
    let last_word = ans[ans.length - 1] + ".";
    
    // 4.replace word and turn array into string
    ans[0] = first_word;
    ans[ans.length - 1] = last_word;

    ans = ans.join(" ");
    
    return ans;

}

console.log(arrange("The lines are printed in reverse order."))