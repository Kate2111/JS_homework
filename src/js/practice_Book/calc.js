"use strict";

//1. Сделайте калькулятор, который будет находить площадь и периметр квадрата.

function task1 () {
    const square = document.querySelector('.task1 .square');
    const perimeter = document.querySelector('.task1 .perimeter');
    const side = document.querySelector('.task1 .side');
    const btn = document.querySelector('.task1 button');
    
    btn.addEventListener('click', getResult);

    function getResult() {
        square.textContent = `Площадь квадрата (S): ${Math.pow(+side.value, 2)} см2`;
        perimeter.textContent = `Периметр квадрата (P): ${(+side.value) * 4} см`;
    }
}

task1 ();

//2. Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

function task2 () {
    const square = document.querySelector('.task2 .square');
    const perimeter = document.querySelector('.task2 .perimeter');
    const side1 = document.querySelector('.task2 .side1');
    const side2 = document.querySelector('.task2 .side2');
    const btn = document.querySelector('.task2 button');
    
    btn.addEventListener('click', getResult);

    function getResult() {
        const squareFormula = +side1.value * (+side2.value);
        square.textContent = `Площадь прямоугольника (S): ${squareFormula} см2`;
        const perFormula = (+side1.value * 2) + (+side2.value * 2);
        perimeter.textContent = `Периметр прямоугольника (P): ${perFormula} см`;
    }
}

task2 ();

//3. Сделайте калькулятор, который будет находить площадь круга и длину окружности

function task3 () {
    const square = document.querySelector('.task3 .square');
    const perimeter = document.querySelector('.task3 .perimeter');
    const side = document.querySelector('.task3 .side');
    const btn = document.querySelector('.task3 button');
    
    btn.addEventListener('click', getResult);

    function getResult() {
        const squareFormula = Math.round(3.14 * Math.pow(+side.value, 2));
        square.textContent = `Площадь круга (S): ${squareFormula} см2`;
        const perFormula = Math.round(2 * 3.14 * (+side.value));
        perimeter.textContent = `Длина окружности (P): ${perFormula} см`;
    }
}

task3 ();

//4. Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.

function task4 () {
    const square = document.querySelector('.task4 .square');
    const side1 = document.querySelector('.task4 .side1');
    const side2 = document.querySelector('.task4 .side2');
    const side3 = document.querySelector('.task4 .side3');
    const btn = document.querySelector('.task4 button');
    
    btn.addEventListener('click', getResult);

    function getResult() {
        let a = +side1.value;
        let b = +side2.value;
        let c = +side3.value;
        const p = (a + b + c) / 2;
        console.log(p);
        const squareFormula = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);
        square.textContent = `Площадь треугольника (S): ${squareFormula} см2`;
    }
}

task4 ();

//5. Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.

function task5() {
    const a = document.querySelector('.task5 .a');
    const b = document.querySelector('.task5 .b');
    const c = document.querySelector('.task5 .c');
    const btn = document.querySelector('.task5 button');
    let result = document.querySelector('.task5 .result');

    btn.onclick = () => {
        let res1;
        let res2;
        const discr = (Math.pow(+b.value, 2) - (4 * (+a.value) * (+c.value)));
        console.log(discr);

        if(discr === 0) {
            res1 = (-(+b.value) + Math.sqrt(discr)) / (2 * (+a.value));
            result.textContent = `D = 0 ⇒ уравнение имеет один корень. X = ${res1}`;
        } if(discr > 0) {
            res1 = (-(+b.value) + Math.sqrt(discr)) / (2 * (+a.value));
            res2 = (-(+b.value) - Math.sqrt(discr)) / (2 * (+a.value));
            result.innerHTML = `D > 0 ⇒ уравнение имеет два корня. X<sub>1</sub> = ${res1}, X<sub>2</sub> = ${res2}`;
        } if(discr < 0) {
            result.textContent = 'Корней нет';
        }
    };

}

task5();

//6. Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.
function task6() {
    const elems = document.querySelectorAll('.task6 input');
    const button = document.querySelector('.task6 button');
    const nums = document.querySelector('.task6 .nums');

    button.addEventListener('click', () => {
        let arr = [];
        for(let i = 0; i < elems.length; i++) {
            arr.push(elems[i].value);
        }
        
        function compareNumeric(a, b) {
            return a - b;
        }

        arr.sort(compareNumeric);

        for(let i = 0; i < arr.length; i++) {
            let a = Math.pow(+arr[0], 2);
            let b = Math.pow(+arr[1], 2);
            let c = Math.pow(+arr[2], 2);

            console.log(a, b, c);

            if(c === a + b) {
                nums.textContent = 'Числа являются тройкой Пифагора';
            } else {
                nums.textContent = 'Попробуйте еще';
            }
        }
       
        console.log(arr);
    });
    
}
task6();

//7. Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа
function task7() {
    const input = document.querySelector('.task7 input');
    const res = document.querySelector('.task7 .result');
    const btn = document.querySelector('.task7 button');

    btn.addEventListener('click', () => {
        let arr = [];
        let items = [];
        for(let i = +input.value; i > 0; i--) {
            arr.push(i);
        }

        arr.map(elem => {
            if(+input.value % elem === 0) {
                items.push(elem);
            }
        });

        res.textContent += items.join(', ');
    });

    input.onclick = () => {res.textContent = 'Список делителей числа: ';};
    input.onselect = () => {res.textContent = 'Список делителей числа: ';};
}
task7();

//8. Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.

function task8() {
    const input1 = document.querySelector('.task8 .num1');
    const input2 = document.querySelector('.task8 .num2');
    const res = document.querySelector('.task8 .result');
    const btn = document.querySelector('.task8 button');
    let arrNum1 = [];
    let arrNum2 = [];
    let itemDivider1 = [];
    let itemDivider2 = [];
    let result = [];

    btn.onclick = () => {
        getDivider(input1, arrNum1, itemDivider1);
        getDivider(input2, arrNum2, itemDivider2);

        compareDivider(itemDivider1, itemDivider2);
    };

    function getDivider(input, arr, items) {
        for(let i = +input.value; i > 0; i-- ) {
            arr.push(i);
        }
        
        arr.map(elem => {
            if(+input.value % elem === 0) {
                items.push(elem);
            }
        });

        console.log(items);
    }

    function compareDivider(item1, item2) {
       /*  for(let i = 0; i < item1.length; i++) {
            result = item1[i];
            for(let j = 0; j < item2.length; j++) {
                if(result === item2[j]) {
                    res.textContent += result + ' ';
                    console.log(typeof(result));
                }
            }
        } */
        result = [...item1, ...item2];

        result.sort((a, b) => a - b);

        let removed = [];

        for(let i = 0; i < result.length; i++) {
            if(result[i] === result[i - 1]) {
                removed.push(result.splice(i, 1));
                i--;
                
            }
        }
        console.log(removed);
        console.log(result);
        
    }

    input1.onclick = () => {res.textContent = 'Список делителей числа: ';};
    input1.onselect = () => {res.textContent = 'Список делителей числа: ';};
}
task8();
