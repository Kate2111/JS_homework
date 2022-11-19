function arrDivisors(num1, num2) {
    const arr1 = getDivisors(num1);
    const arr2 = getDivisors(num2);
    let result = [];
    for(let i =0; i < arr1.length; i++) {
        if(inArray(arr2, arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}

function inArray(arr, elem) {
    for(let i= 0; i < arr.length; i++) {
        return arr[i] === elem;
    }
}

function getDivisors(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        if(num % i == 0) {
            arr.push(i);
        }
    } 
    return arr;
}

console.log(arrDivisors(30, 18));