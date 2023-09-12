var mergeTwoLists = function(list1, list2) {
    for(let i=0; i<list2.length; i++){
        list1.push(list2[i]);
    }

    return list1.sort();
};

console.log(mergeTwoLists([1,2,4],[1,3,4]));
console.log(mergeTwoLists([],[]));
console.log(mergeTwoLists([],[0]));