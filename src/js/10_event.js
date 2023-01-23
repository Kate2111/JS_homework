//1. Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора

function task1() {
    const elem = document.querySelector('.task10_1 div');

    document.addEventListener('mousemove', function(event) {
        elem.innerHTML = event.clientX + ' : ' + event.clientY;
    });
}
task1();

//2. Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.
function task2() {
    const btn = document.querySelector('.task10_2 button');

    btn.addEventListener('click', func);
    btn.addEventListener('dblclick', func);

    function func(event) {
        if(event.type == 'click') {
            btn.style.color = 'rgb(33, 210, 6)';
        } if(event.type == 'dblclick'){
            btn.style.color = 'rgb(243, 18, 18)';
        }
    }
}
task2();

//3. Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.
function task3() {
    
}
task3();

