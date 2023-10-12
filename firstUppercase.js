const txt = 'This is a book.';
const txtsplit = txt.split(' ');

for (let i = 0; i < txtsplit.length; ++i) {

    txtsplit[i] = txtsplit[i][0].toUpperCase() + txtsplit[i].substring(1);

}
console.log(txtsplit.join(' '));



// const txt = 'This is a book.';

// const txtsplit = txt.split(' ');

// const firstUpper = [];

// for(const n of txtsplit) {

//     firstUpper.push(n.replace(n[0], n[0].toUpperCase()));

// }

// console.log(firstUpper.join(' '))