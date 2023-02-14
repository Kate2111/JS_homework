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

//7. Сделайте так, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1. Используйте передачу контекста(this) разными способами.
function task7() {
    let elem = document.querySelector('.task12_7 #elem');
    
    //через переменную self
        /* elem.addEventListener('click', function() {
            let self = this;
            setInterval(function() {
                self.value = Number(self.value) + 1;
            }, 1000);
        }); */

    //через стрелочную функцию
        /* elem.addEventListener('click', function() {
            setInterval(() => {
                this.value = Number(this.value) + 1;
            }, 1000);
        }); */

    //через передачу параметром
        elem.addEventListener('click', function() {
            setInterval(function(self) {
                self.value = Number(self.value) + 1;
            }, 1000, this);
        }); 
}
task7();

//8. Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
function task8() {
    const elem = document.querySelector('.task12_8 #elem');
    function start () {
        let timerId = setInterval(() => {
            elem.value = Math.pow(+elem.value, 2);
            if(elem.value == 65536) {
                clearInterval(timerId);
            }
        }, 1000);
    }
    start();

    elem.addEventListener('click', () => {
        elem.value = 2;
        start();
    });

}
task8();

//9. Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.
function task9() {
    const input = document.querySelector('.task12_9 input');
    const div = document.querySelector('.task12_9 div');
    const btn = document.querySelector('.task12_9 button');

    btn.addEventListener('click', function() {
        let i = +input.value;
        let timerId = setInterval(() => {
            console.log(i, typeof(i));
            div.textContent = --i;
            if(div.textContent <= 0){
                clearInterval(timerId);
            } 
        }, 1000);
    });
}
task9();

//10. Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
function task10() {
    const div = document.querySelector('.task12_10 div');
    setInterval(() => {
        if(div.style.color == 'green') {
            div.style.color = 'red';
        } else {
            div.style.color = 'green';
        }
    }, 1000);
}
task10();

//11. Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики
function task11() {
    const div = document.querySelector('.task12_11 div');
    setInterval(() => {
        let nowDay = new Date();
        div.textContent = nowDay.getHours() + ':' + nowDay.getMinutes() + ':' + nowDay.getSeconds();
        if(nowDay.getMinutes() <= 9) {
            div.textContent = nowDay.getHours() + ':' + 0 + nowDay.getMinutes() + ':' + nowDay.getSeconds();
        }
        if(nowDay.getSeconds() <= 9) {
            div.textContent = nowDay.getHours() + ':' + nowDay.getMinutes() + ':' + nowDay.getSeconds() + 0;
        }
    }, 1000);
}
task11();

//12. Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.
function task12() {
    const div = document.querySelector('.task12_12 div');

    setTimeout(function() {
        div.textContent = 'Прошло 10 секунд';
    }, 10000);
}
task12();
