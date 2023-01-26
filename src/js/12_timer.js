//1 Запустите таймер, который каждые 3 секунды будет увеличивать число на еденицу.
function task1() {
    const num = document.querySelector('.task12_1 div');
    function numPlus() {
        for(let i = 0; i < 1; i++) {
            num.textContent = +num.textContent + 1;
            if(num.textContent >= 10) {
                clearInterval(timerId);
            }
        }

    }
    const timerId = setInterval(numPlus, 3000);
}
task1();

//2 Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
function task2() {
    const num = document.querySelector('.task12_2 div');
    let i = parseInt(num.textContent);
    setInterval(function() {
        num.textContent = --i;
    }, 1000);
}
task2();

//3 Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
function task3() {
    const num = document.querySelector('.task12_3 div');
    let i = parseInt(num.textContent);
    const timerId = setInterval(() => {
        num.textContent = --i;
        if(i <= 0) {
            clearInterval(timerId);
        }
    },1000);
}
task3();

//4. Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
function task4() {
    const num = document.querySelector('.task12_4 div');
    const btn = document.querySelector('.task12_4 #start');
    btn.addEventListener('click', function minus() {
        let i = parseInt(num.textContent);
        setInterval(() => {
            num.textContent = --i;
        }, 1000);
        this.removeEventListener('click', minus); // отвязываем действие , чтобы каждый клик не приводил к запуску нового таймера.
    });
}
task4();

//5. Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
function task5() {
    const num = document.querySelector('.task12_5 div');
    const start = document.querySelector('.task12_5 #start');
    const stop = document.querySelector('.task12_5 #stop');
    let timerId;

    start.addEventListener('click', function () {
        let i = parseInt(num.textContent);
        timerId = setInterval(() => {
            num.textContent = --i;
            if(i <= 0) {
                clearInterval(timerId);
            }
        }, 1000);
    });

    stop.addEventListener('click', () => {
        clearInterval(timerId);
    });
}
task5();

//6. Напишите код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени
function task6() {
    const start = document.querySelector('.task12_6 #start');
    const stop = document.querySelector('.task12_6 #stop');
    const day = document.querySelector('.task12_6 .day');
    let timerId;
    
    //Функция,которая выводит текущий день
    function whatDay() {
        timerId = setInterval(() => {
            let nowDay = new Date();
            day.textContent = `Дата: ${nowDay.getDate()}.${nowDay.getMonth() +1}.${nowDay.getFullYear()}, время: ${nowDay.getHours()}:${nowDay.getMinutes()}:${nowDay.getSeconds()}`;
        },500);
        this.removeEventListener('click', whatDay);// предотвращаем повторное нажатие на кнопку
    }

    //привязываем функцию к кнопке
    start.addEventListener('click', whatDay);

    stop.addEventListener('click', function() {
        clearInterval(timerId);
        start.addEventListener('click', whatDay); //при нажатии на кнопку стоп останавливаем работу таймера и запускаем занова функцию для кнопки старт
    });
}
task6();

//7. 
function task7() {
   
}
task7();


