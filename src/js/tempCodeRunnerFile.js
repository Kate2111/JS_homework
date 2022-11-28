let arr19 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
let arr20 = [];
function func22 (arr) {
    let arr21 = [];
    for(let elem of arr) {
        if(typeof elem == 'object') {
            arr21.push(func22(elem));
        } else {
            arr20.push(Math.pow(elem, 2));
        }
    }
    return arr20;
}
console.log(func22(arr19));