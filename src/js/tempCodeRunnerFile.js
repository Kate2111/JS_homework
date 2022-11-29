let arr33 = [2, 17, 6, 2, 3, 8, 17, 10, 17];
let result29 = arr33.reduce(function(acc, elem) {
    if(acc[elem]) {
        acc[elem] += 1;
    } else {
        acc[elem] = 1;
    }
    return acc; //{ '2': 2, '3': 1, '6': 1, '8': 1, '10': 1, '17': 3 }
}, {});

function res (obj) {
    for(let key in obj) {
        if(obj[key] <= 1) {
            delete obj[key]; //{ '2': 2, '17': 3 }
        }
    }
    let arr34 = Object.keys(obj); //[ '2', '17' ]
    
    return arr34.map(elem => +elem);
}

console.log(res(result29)); // [ 2, 17 ]