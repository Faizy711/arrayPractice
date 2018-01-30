var anotherArr = [];

function getEvens(newArr) {
    for (var i = 0; i < newArr.length; i++){
        if (newArr[i] % 2 === 0) {
            anotherArr.push(newArr[i]); 
        } 
    }
    anotherArr.push(13, 14);
   }
getEvens(newArr);