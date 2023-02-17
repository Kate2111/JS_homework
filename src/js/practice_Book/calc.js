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
    let itemDivider1 = [];
    let itemDivider2 = [];

    btn.addEventListener('click', findDividerHalder);
    input1.addEventListener('click', clearWindow);
    input2.addEventListener('click', clearWindow);

    function findDividerHalder () {
        getDivider(input1, itemDivider1);
        getDivider(input2, itemDivider2);

        compareDivider(itemDivider1, itemDivider2);

        btn.removeEventListener('click', findDividerHalder);
    }

    function clearWindow () {
        res.textContent = 'Список общих делителей чисел: ';
        itemDivider1 = [];
        itemDivider2 = [];
        btn.addEventListener('click', findDividerHalder);
    }

    function getDivider(input, items) {
        let arr = [];
        for(let i = +input.value; i > 0; i-- ) {
            arr.push(i);
        }
        
        arr.forEach(elem => {
            if(+input.value % elem === 0) {
                items.push(elem);
            }
        });
    }

    function compareDivider(item1, item2) {
        let generalArr = [...item1, ...item2];
        generalArr.sort((a, b) => a - b);

        let removed = [];

        for(let i = 0; i < generalArr.length; i++) {
            if(generalArr[i] === generalArr[i - 1]) {
                removed.push(generalArr.splice(i, 1));
                i--;
            }
        }

        let result = [].concat(...removed).join(',');
        res.textContent += result;
    }    
}
task8();

//9.  Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.
function task9() {
    const input1 = document.querySelector('.task9 .num1');
    const input2 = document.querySelector('.task9 .num2');
    const res1 = document.querySelector('.task9 .result1');
    const res2 = document.querySelector('.task9 .result2');
    const btn = document.querySelector('.task9 button');

    btn.addEventListener('click', findMoreDeneralDivider);
    input1.addEventListener('click', clearWindow);
    input2.addEventListener('click', clearWindow);

    function findMoreDeneralDivider() {
        let item1 = getDivider (input1); 
        let item2 = getDivider (input2);

        generalDivider (item1, item2);

        btn.removeEventListener('click', findMoreDeneralDivider);
    }

    function clearWindow () {
        res1.textContent = 'Наибольший общий делитель: ';
        res2.textContent = 'Наименьший общий делитель: ';
        btn.addEventListener('click', findMoreDeneralDivider);
    }

    function getDivider (input) {
        let arr = [];
        for(let i = +input.value; i > 1; i--) {
            arr.push(i);
        }

        let elems = arr.filter(elem => +input.value % elem === 0);
        return elems;
    }

    function generalDivider (arr1, arr2) {
        let generalArr = [...arr1, ...arr2].sort((a, b) => a - b);

        let removed = [];

        for(let i = 0; i < generalArr.length; i++) {
            if(generalArr[i] === generalArr[i - 1]){
                removed.push(generalArr.splice(i, 1));
                i--;
            }
        }

        let maxNum = Math.max.apply(null, ([].concat(...removed)));
        let minNum = Math.min.apply(null, ([].concat(...removed)));

        res1.textContent += maxNum;
        res2.textContent += minNum;
    }
}
task9();

//10. Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том:
//- сколько в этом тексте слов
//- сколько в тексте символов
//- сколько в тексте символов за вычетом пробелов
//- сообщение о процентном содержании каждого символа в тексте.
function task10() {
    const text = document.querySelector('.task10 textarea');
    const words = document.querySelector('.task10 .words_text');
    const simbol = document.querySelector('.task10 .simbol_text');
    const simbolSpace = document.querySelector('.task10 .space_text');
    const wrapper = document.querySelector('.task10');
    const flags = document.querySelectorAll('.task10 input');
    
    for(let flag of flags) {
        flag.addEventListener('click', function func() {
            const counterWords = text.value.split(' ');
            if(flag.parentElement.className == 'words') {
                counterWord (counterWords);
            } 
            if(flag.parentElement.className == 'simbol') {
                counterSimbol (text.value);
            }
            if(flag.parentElement.className == 'simbolSpaces') {
                counterSimbolSpaces (counterWords);
            } 
            if(flag.parentElement.className == 'percent') {
                percentSimbol (counterWords);
            }
        });
    }

    function counterWord (arr) {
        let lastWord = arr[arr.length - 1];
        if(lastWord == '') {
            //counterWord.pop(lastWord, 1);
            arr.splice(-1, 1);
        }

        words.textContent = `Количество слов в тексте: ${arr.length}`;
    }

    function counterSimbol (str) {
        let sum = str.length;
        simbol.textContent = `Количество символов в тексте: ${sum}`;
    } 

    function counterSimbolSpaces (arr) {
        let sum = 0;
        for(let elem of arr) {
            sum += elem.length;
        } 
        simbolSpace.textContent = `Количество символов в тексте(без пробелов): ${sum}`;
    } 

    function percentSimbol (arr) {
        let simbols = arr.join('').split('').sort();

        let sum = simbols.reduce((obj, i) => {
            obj[i] ? obj[i] += 1 : obj[i] = 1;
            return obj;
        }, {});

        for(let key in sum) {
            let a = Math.round((sum[key] * 100) / simbols.length);

            let percent = document.createElement('div');
            percent.textContent = `Количество символа ${key} в тексте = ${a}%`;
            wrapper.appendChild(percent);
        }
    }
}
task10();

//11. Игра угадай число
function task11() {
    const inputNumber = document.querySelector('.task11 .number');
    const inputName = document.querySelector('.task11 .name');
    const massage = document.querySelector('.task11 .massage');
    const parent = document.querySelector('.task11 .game');
    const number = Math.round(Math.random() * 100);
    console.log(number);
    let counter = 7;
    let showCounter = document.createElement('div');
    parent.appendChild(showCounter);

    inputNumber.focus();

    inputNumber.addEventListener('blur',guessNumber);
    inputNumber.addEventListener('click',clearInput);
    inputName.addEventListener('blur', showRules);

    function guessNumber () {
        let guess = Number.parseInt(inputNumber.value);

        if(guess > number) {
            massage.textContent = 'введите число поменьше';
        } if (guess < number) {
            massage.textContent = 'введите число побольше';
        } if (guess == number) {
            massage.textContent = 'Ты молодец!';
            inputNumber.classList.add('win');
        }

        
        showCounter.textContent = `Осталось попыток ${counter -= 1}`;
        if(counter == 0) {
            massage.textContent = 'GAME OVER';
            massage.style.color = 'red';
            showCounter.textContent = '';
            inputNumber.classList.add('lose');
        }
    }

    function clearInput () {
        inputNumber.value = '';
    }

    function showRules() {
        let rules = document.createElement('div');
        rules.textContent = `${inputName.value}, правила игры: загадано число от 1 до 100, у тебя есть всего 7 попыток его угадать.`;
        parent.prepend(rules);
        inputName.remove();
    }
    
}
task11();

//12. Игра угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

function task12() {
    const table = document.querySelector('.task12 #field');
    const rows = 10;
    const column = 10;

    function createTable() {
        for(let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');

            for(let k = 0; k < column; k++) {
                let td = document.createElement('td');
                tr.append(td);

                td.textContent = Math.round(Math.random()*100);
                td.addEventListener('click', paintCell);
            }

            table.append(tr);            
        }
    }

    function paintCell() {
        for(let i = 0; i < 10; i++) {
            this.style.backgroundColor = 'green';
        }
        
    }


    createTable();
}
task12();