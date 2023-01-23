//1. Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
//textarea - парный тег, позволяющий пользователю ввести многострочное сообщение. Обращению к тексту тега через textarea.value

function task1() {
    const text = document.querySelector('.task1 #elem');
    const p = document.querySelector('.task1 p');

    text.addEventListener('blur', function() {
        p.textContent = text.value;
        text.value = '';
    });
}
task1();

//2. Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
function task2() {
    const input =  document.querySelector('.task2 input');
    const block = document.querySelector('.task2 .block');
    const unlock = document.querySelector('.task2 .unlock');

    block.addEventListener('click', function() {
        input.disabled = true;
    });
    unlock.addEventListener('click', function() {
        input.disabled = false;
    });
}
task2();

//3. Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.

function task3() {
    const input =  document.querySelector('.task3 input');
    const block = document.querySelector('.task3 .block');
    const unlock = document.querySelector('.task3 .unlock');
    const condition = document.querySelector('.task3 .condition');
    const res = document.querySelector('.task3 .res');

    block.addEventListener('click', function() {
        input.disabled = true;
    });
    unlock.addEventListener('click', function() {
        input.disabled = false;
    });

    condition.addEventListener('click', function() {
        if(input.disabled == true) {
            res.textContent = 'Поле не доступно';
        } else {
            res.textContent = 'Поле активно';
        }
    });
}
task3();

//4. Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
function task4() {
    const input = document.querySelector('.task4 input');
    const btn1 = document.querySelector('.task4 .btn1');
    const btn2 = document.querySelector('.task4 .btn2');

    btn1.addEventListener('click', function() {
        input.checked = true;
    });

    btn2.addEventListener('click', function() {
        input.checked = false;
    });
}
task4();

//5. Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.
function task5() {
    const input = document.querySelector('.task5 input');
    const btn = document.querySelector('.task5 button');
    const text = document.querySelector('.task5 p');

    btn.addEventListener('click', function() {
        if(input.checked == true) {
            text.textContent = 'привет';
        } else {
            text.textContent = 'пока';
        }
    });
}
task5();

//6. Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
function task6() {
    const input = document.querySelector('.task6 input');
    const btn = document.querySelector('.task6 button');

    btn.addEventListener('click', function() {
        input.checked = !input.checked;
    });
}
task6();

//7. Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
function task7() {
    const radios = document.querySelectorAll('.task7 input[type="radio"]');
    const button = document.querySelector('.task7 #button');
    const res = document.querySelector('.task7 .res');

    button.addEventListener('click', function() {
        for (let radio of radios) {
            if (radio.checked) {
                res.textContent = radio.value;
            }
        }
    });
}
task7();

//8. Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
function task8() {
    const input = document.querySelector('.task8 input');
    const text = document.querySelector('.task8 p');

    input.addEventListener('change', function() {
        text.textContent = input.value;
    });
}
task8();

//9. Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
function task9() {
    const input = document.querySelector('.task9 input');
    const text = document.querySelector('.task9 p');

    input.addEventListener('change', function() {
        if(input.checked) { 
           text.textContent = "Флажок установлен";
        } else {
            text.textContent = "Флажок не установлен";
        }
       
    });

}
task9();

//10. Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.
function task10() {
    const input = document.querySelector('.task10 input');

    input.addEventListener('change', () => {
        if(input.value.length <= 5) {
            input.style.borderColor = 'rgb(33, 210, 6)';
        } else {
            input.style.borderColor = 'rgb(243, 18, 18)';
        }
    });
}
task10();

//11. Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
function task11() {
    const input = document.querySelector('.task11 input');
    
    input.addEventListener('input', () => {
        if(input.value.length >= 5) {
           alert('Длина не более 5 символов', '');
        }
    });
}
task11();

//12. Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.
function task12() {
    const input = document.querySelector('.task12 input');
    const res = document.querySelector('.task12 .res');
    const num = document.querySelector('.task12 .num');

    input.addEventListener('input', () => {
        
        if(input.value.length <= 5) {
            num.textContent = `Можно внести символов: ${5 - input.value.length}`;
        } else {
            num.textContent = `Длина сообщения первышена на ${input.value.length - 5}`;
        }
    });
}
task12();

//13. Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.
function task13() {
    const num1 = document.querySelector('.task13 .num1');
    const num2 = document.querySelector('.task13 .num2');

    num1.addEventListener('input', () => {
        if (num1.value.length == 2) {
            num2.focus();
        } 
    });
    num2.addEventListener('input', () => {
        if (num2.value.length == 2) {
            num2.blur();
        } 
    });
}
task13();

//14. Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
function task14() {
    const select = document.querySelector('.task14 select');
    const test = document.querySelector('.task14 p');
    const btn = document.querySelector('.task14 button');

    btn.addEventListener('click', () => {
        test.textContent = `Вы выбрали пункт: ${select.value}`;
    });
}
task14();

//15 Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.
function task15() {
    const select = document.querySelector('.task15 select');
    const text = document.querySelector('.task15 p');

    select.addEventListener('change', () => {
        let year = +select.value;
        const date = new Date(year, 2, 0).getDate();
        if(date == 29) {
            text.textContent = 'год високосный';
        } else {
            text.textContent = 'год невисокосный';
        }
    });
}
task15();

//16. Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
function task16() {
    const select = document.querySelector('.task16 select');
    const text = document.querySelector('.task16 p');

    select.addEventListener('change', () => {
        let day = +select.value;
        if(day == 6 || day == 7) {
            text.textContent = 'выходной день';
        } else {
            text.textContent = 'рабочий день';
        }
    });
}
task16();

//17. Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий день недели.
function task17() {
    const selects = document.querySelector('.task17 select');
    let day = new Date().getDay();
    for(let select of selects) {
        if(select == day) {
            select.selected = true;
        } else {
            select.selected = false;
        }
    }
}
task17();

//18. Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.
function task18() {
    const select = document.querySelector('.task18 select');
    const input = document.querySelector('.task18 input'); 

    input.addEventListener('blur', () => {
        select.selectedIndex = +input.value - 1;
    });
}
task18();

//19. Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
function task19() {
    const select = document.querySelectorAll('.task19 select option');
    select.forEach(o => o.innerText += o.value);
}
task19();

//20. Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.
function task20() {
    const elems = document.querySelectorAll('.task20 select option');
    
    elems.forEach(elem => {
        if(elem.selected) {
            elem.text += '!';
        } else {
            elem.text += '?';
        }
    });
}
task20();

//21. Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.
function task21() {
    const elems = document.querySelector('.task21 select');
    const btn = document.querySelector('.task21 button');
    btn.addEventListener('click', () => {
        let elem = elems[elems.length - 1];
        elem.selected = true;
    });
}
task21();