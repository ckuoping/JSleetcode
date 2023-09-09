let reverseString = function(txt){
    txt = txt.split("");

    let txt_rev = "";

    for(let i = txt.length -1; i >=0 ; i--){
        txt_rev += txt[i]
    }
    return txt_rev;
}

console.log(reverseString("hello"))