
/* function make() {
	setTimeout(function() {
		console.log('1');
	}, 3000);
}

make();
console.log('2');

//Асинхронный код с коллбэками в JavaScript
function make(callback) {
	setTimeout(function() {
		console.log('1');
        callback();
	}, 3000);
}

function func() {
    console.log('2');
}

make(func);

//Передача результата в коллбэк
function make(callback) {
    setTimeout(function() {
        let res = [1, 2, 3];
        callback(res);
    }, 3000);
}

function func(param) {
    console.log(param);
}

make(func);

//Сделайте так, чтобы функция make принимала два параметра: номер одного и другого элемента массива. Пусть результатом асинхронной операции эта функция возвращает сумму указанных элементов.
function make(num1, num2, callback) {
    setTimeout(function() {
        let res = [1, 2, 3];
        callback(res[num1], res[num2])
    }, 1000);
}

function func(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}

make(2, 1, func);

//Обработка исключений в коллбэках
function make(num, callback) {
    setTimeout(function() {
        let arr = [1, 2, 3];
        let err;

        if(arr[num] === undefined) {
            err = 'number is not'
        } else {
            err = null;
        }

        callback(arr[num], err);
    }, 2000)
}

function func(elem, err) {
    if(!err) {
        console.log(elem);
    } else {
        console.log(err)
    }
}

make(4, func); */

//Реализуем функцию loadImage, которая будет загружать картинки. Пусть первым параметром эта функция принимает путь к картинке, а вторым - коллбэк, который выполнится, когда картинка будет загружена

function loadImage(url, callback) {
    const image = document.createElement('img');
    image.src = url;
    let error; 

    image.addEventListener('load', function() {
        callback(image, null);
    })

    image.addEventListener('error', function() {
        callback(null, error = 'Ошибка, проверьте адрес картинки')
    })
}

function func(image, error) {
	if(!error) {
        document.body.append(image);
    } else {
        console.log(error);
    }
}

loadImage('../../img/calc/2cat_aries (1).png', func);


//

setTimeout(function() {
	emit('loaded', [1, 2, 3, 4, 5]);
}, 3000);

let subsribers = {
	'имя события 1': ['массив коллбэков события'],
	'имя события 2': ['массив коллбэков события'],
	'имя события 3': ['массив коллбэков события'],
};

// Функция для испускания события:
function emit(name, data) {
	if (subsribers[name]) {
		for (let callback of subsribers[name]) {
			callback(data);
		}
	}
}

function on(name, callback) {
	if (!subsribers[name]) {
		subsribers[name] = [];
	}
	
	subsribers[name].push(callback);
}

// Функция для подписки на событие:
on('loaded', function(arr) {
    document.querySelector('#message').textContent = 'данные получены';
});

on('loaded', function(arr) {
    // добавим в #list элементы массива в качестве тегов li
    const list = document.querySelector('#list');

    for(let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        list.appendChild(li);
    }
});

on('loaded', function(arr) {
    // выведем в #amount количество элементов в массиве
    document.querySelector('#amount').textContent = `Количество элементов в массиве ${arr.length}`;
});

on('loaded', function(arr) {
    // выведем в #result сумму элементов массива
    let sum = arr.reduce((acc, elem) => {
        return acc + elem;
    }, 0)
    document.querySelector('#result').textContent = `Суммф элементов массива - ${sum}`;
});

//Сделайте промис, внутри которого будет задержка в 5 секунд, после которой промис должен выполнится, своим результатом вернув какой-нибудь текст. Выведите этот текст на экран.
function task1() {
    let promise = new Promise(function(resolve) {
        setTimeout(function(){
            let text = 'how are you?';
            resolve(text);
        }, 3000)
    });
    promise.then(function(text){
        console.log(text);
    })
}
task1();

//Сделайте асинхронный код, который будет генерировать случайные числа от 0 до 5. Оберните все это в промис. Пусть промис своим возвращает результат деления единицы на сгенерированное число. Пусть промис выполнится с ошибкой, если произошло деление на ноль, и с успехом во всех остальных случаях.
function task2() {
    let promise = new Promise(function(resolve, reject) {
        let num = Math.floor(Math.random()*10);

        if(num >= 1 && num <= 5) {
            resolve(1 / num);
        } else {
            reject (new Error('error: число не входит в диапазон от 1 до 5'))
        }
        
    });
    promise.then(
        function(result) {
            console.log(result)
        },
        function(error) {
            console.log(error)
        }
    )
}
task2();

//Сделайте функцию, возвращающую промис, внутри которого установлена случайная задержка от 1 до 10 секунд. Пусть своим результатом промис возвращает эту задержку. С помощью цикла и вашей функции заполните массив 10-ю промисами.

function task3() {
    let arr = [];

    function func() {
        const delay = Math.floor(Math.random() * 10000 + 1000);
        return new Promise(resolve => {
            setTimeout( function() {
                resolve(delay)
            }, delay)
        })
    }
    
    for(let i = 0; i < 10; i++) {
        arr.push(func());
    }
    
    Promise.all(arr)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error)
    })
}

task3();

//Используя массив промисов из предыдущей задачи сделайте так, чтобы в консоль вывелся результат первого сработавшего промиса.
function task4() {
    let arr = [];

    function func() {
        let delay = Math.floor(Math.random() * 10000 + 1000);

        return new Promise(resolve => {
            setTimeout(function() {
                resolve(delay);
            }, delay)
        }) 
    }

    for(let i = 0; i < 10; i++) {
        arr.push(func());
    }

    Promise.race(arr)
    .then(result => {
        console.log(result)
    })
    .catch(error=> {
        console.log(error)
    })
}
task4();

//Используя массив промисов из предыдущей задачи сделайте так, чтобы в консоль вывелась сумма результатов всех промисов.

function task5() {
    let arr = [];

    function func() {
        return new Promise(resolve => {
            let  delay = Math.floor(Math.random() * 10000 + 1000);
            setTimeout(() => {
                resolve(delay);
            }, delay)
        })
    }

    for(let i = 0; i < 10; i++) {
        arr.push(func());
    }

    Promise.all(arr)
        .then(results => {
            let sum = results.reduce((acc, elem) => {
                return acc + elem;
            }, 0)
            console.log(sum);
        })
        .catch(error => {
            console.log(error);
        })
}
task5();

let paramsString = 'a=1&b=2&c=3';
let searchParams = new URLSearchParams(paramsString);
console.log(searchParams);