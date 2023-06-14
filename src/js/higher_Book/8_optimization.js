
//ОПТИМИЗАЦИЯ
//задача найти количество чисел, делящихся без остатка на 7, находящихся в заданном промежутке.

let nums = Math.floor(1000/7)
console.log(nums);

//задача найти сумму делителей числа. 

let sum = 0;
function getDivisors(num) {
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}
	
	return res;
}
getDivisors(320)
console.log(sum);

// сводить к минимуму получение элементов, чтение и запись данных, особенно в цикле.
// сумму целых чисел от единицы до введенного в инпут числа
let input = document.querySelector('input');
let value =  Number(input.value);
let sum1 = 0;

input.addEventListener('blur', function() {
	for (let i = 1; i <= value; i++) {
		sum += i;
	}
	
});

console.log(sum1);

//задача найти сумму целых чисел от 1 до 1000000
//существует математическое решение.
let n = 1000000;
let sum2 = n * (n + 1) / 2;
console.log(sum2);

//есть ли в массиве число 3:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.includes(3));


//Следующий код заполняет массив заданным значением
let arr2 = new Array(5).fill('x');
console.log(arr2);

//Следующий код выводит четные числа из заданного промежутка
for (let i = 0; i <= 100; i += 2) {
	console.log(i);
}

//Сумма чисел строки. С помощью for-of можно перебирать не только массивы, но и строки
let str = '123456789';
let sum3 = 0;

for (let char of str) {
	sum3 += +char;
}

console.log(sum3);


//Создайте HTML таблицу размером 100 на 100. Сделайте так, чтобы каждая ячейка по клику красилась в красный цвет.
table.onclick = function(event) {
    let td = event.target.closest('td'); //возвращает ближайшего предка, соответствующего селектору
  
    if (!td) return; //Если event.target не содержится внутри элемента <td>, то вызов вернёт null, и ничего не произойдёт.
  
    if (!table.contains(td)) return; //Если таблицы вложенные, event.target может содержать элемент <td>
  
    highlight(td); // И если это так, то подсвечиваем его.
  };

  console.log(getRelativelyPrime(10000));




  //Следующий код находит взаимно-простые числа из заданного промежутка. Оптимизируйте его:

function getRelativelyPrime(range) {
	let res = [];
	
	for (let i = 2; i <= range; i++) {
		for (let j = 2; j < range; j++) {
			if (isRelativelyPrime(i, j)) {
				res.push([i, j]);
			}
		}
	}
	
	return res;
}


function isRelativelyPrime(num1, num2) {
	let arr1 = getDivisors(num1);
	let arr2 = getDivisors(num2);
	let int  = getIntersect(arr1, arr2);
	
	if (int.length === 0) {
		return true;
	} else {
		return false;
	}
}

//находим пересечения массивов
function getIntersect(arr1, arr2) {
	let result = [];
	
	for (let elem of arr1) {
		if (arr2.includes(elem)) {
			result.push(elem);
		}
	}
	
	return result;
}
//находим числа, на которые num делится без остатка 
function getDivisors(num) {
	let res = [];
    
	
	for (let i = 2; i <= num; i++) {
		if (num % i === 0) {
			res.push(i);
		}
	}
	
	return res;
}


