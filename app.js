var combineAndCut = function(arr1,arr2){
    var combinedArr;
    combinedArr = arr1.concat(arr2);
    console.log(combinedArr);

    var cut1Arr = combinedArr.shift();
    console.log(cut1Arr);

    console.log(combinedArr);

    var cut2Arr = combinedArr.pop();
    console.log(cut2Arr);

    console.log(combinedArr);

    return combinedArr;
}

var double = function(arr1){
    var doublArr = [];
    for (var i = 0; i < arr1.length; i++) {
        doublArr.push(arr1[i] * 2);
    }
    console.log(doublArr);
    return doublArr;

   
}