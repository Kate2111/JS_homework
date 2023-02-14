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
    const a = Number(document.querySelector('.task5 .a').value);
    const b = Number(document.querySelector('.task5 .b').value);
    const c = Number(document.querySelector('.task5 .c').value);
    const btn = document.querySelector('.task5 button');
    let result = document.querySelector('.task5 .result');

    btn.onclick = () => {
        let res1;
        let res2;
        const discr = (b*b) - (4 * a * c);

        if(discr === 0) {
            res1 = (-b + Math.sqrt(discr)) / (2 * a);
            result.textContent = `D = 0 ⇒ уравнение имеет один корень. X = ${res1}`;
        } if(discr > 0) {
            res1 = (-b + Math.sqrt(discr)) / (2 * a);
            res2 = (-b - Math.sqrt(discr)) / (2 * a);
            result.textContent = `D > 0 ⇒ уравнение имеет два корня. X1 = ${res1}, X2 = ${res2}`;
        } if(discr < 0) {
            result.textContent = 'Корней нет';
        }
    };

}

task5();