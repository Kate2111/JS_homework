
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

loadImage('../../img/calc/2cat.png', func);




