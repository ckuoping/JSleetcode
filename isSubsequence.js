var isSubsequence = function(s, t) {

    if(s.length === 0) return true;

    let s_id = 0; 
    let t_id = 0;

    while(s_id < s.length && t_id <t.length){
        if(s[s_id] === t[t_id]){
            s_id ++;
            t_id ++;
        }else{
            t_id ++;
        }
    }

   return s_id === s.length;


};

console.log(isSubsequence("abc","ahbgdc"),'true');
console.log(isSubsequence("axc","ahbgdc"),'false');
console.log(isSubsequence("","ahbgdc"),'true');
console.log(isSubsequence("b",""),'false');
console.log(isSubsequence("",""),'true');
console.log(isSubsequence("b","c"),'false');
