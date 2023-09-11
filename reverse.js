/*
let reverseString = function(txt){
    txt = txt.split("");

    let txt_rev = "";

    for(let i = txt.length -1; i >=0 ; i--){
        txt_rev += txt[i]
    }
    return txt_rev;
}
*/
let reverseString = function(txt){
    let text_rev = '';

    for(let i = txt.length-1; i>=0; i--){
        text_rev = text_rev + txt[i]
    }

    return text_rev
}

console.log(reverseString("hello"))