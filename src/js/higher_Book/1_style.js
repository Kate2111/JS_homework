//1.    Дан див и кнопка. По нажатию на кнопку задайте диву ширину в 400px, а высоту в 300px.
function task1() {
    const circle = document.querySelector('.task1 .div');
    const btn = document.querySelector('.task1 .button');

    btn.addEventListener('click', function() {
        if(circle.style.width === '50px') {
            circle.style.width = '70px';
            circle.style.height = '70px';
            circle.style.transition = 'all 1s';
        } else {
            circle.style.width = '50px';
            circle.style.height = '50px';
            circle.style.transition = 'all 1s';
        }
    })
}
task1();

//Дана также кнопка. По клику на кнопку выведите ширину и высоту дива без единиц измерения.
function task2() {
    const elem = document.querySelector('.task2 #elem');
    const btn = document.querySelector('.task2 .button');

    btn.addEventListener('click', function() {
        const width = parseInt(elem.style.width);
        const height = parseInt(elem.style.height);
        elem.textContent = `Размер данного элемента: ширина - ${width}, длина - ${height}. Еденица измерения px`;
    })
}
task2();

//Дан див и две кнопки. По клику на первую кнопку покрасьте цвет дива в красный цвет, а по клику на вторую - верните исходный цвет.
function task3() {
    const elem = document.querySelector('.task3 #elem');
    const edit = document.querySelector('.task3 .btn-edit');
    const back = document.querySelector('.task3 .btn-back');

    edit.addEventListener('click', function() {
        elem.style.backgroundColor = 'rgb(242, 66, 14)';
        elem.style.boxShadow = 'rgba(242, 79, 25, 0.81) 0px 0px 9px 1px';

        //let computedStyle = getComputedStyle(elem); //Если мы ходим увидить и изменить стили прописанные в css
    });

    back.addEventListener('click', function() {
        elem.style.backgroundColor = '';
        elem.style.boxShadow = '';
    });
}
task3();

//Для элемента заданы css стили. По клику на кнопку выведите размер шрифта элемента.
function task4() {
    const elem = document.querySelector('.task4 #elem');
    const btn = document.querySelector('.task4 .button');

    btn.addEventListener('click', function() {
        let computedStyle = getComputedStyle(elem).fontSize; //Если мы ходим увидить и изменить стили прописанные в css

        elem.textContent += computedStyle;
    });

}
task4();

//Дан инпут. По потери фокуса проверьте введенное в него число. Если это число до десяти, то покрасьте инпут в зеленый цвет, если от десяти до двадцати - в желтый, а если более двадцати - в красный.

//Чередование стилей через data- атрибут. data-атрибут может иметь только одно значение и при записи новое значение само будет затирать старое.

function task5() {
    const input = document.querySelector('.task5 input');

    input.addEventListener("keyup", function(e) {
        if(e.key == 'Enter') {
            isRight();
        }
    });

    input.addEventListener("blur", isRight);

    function isRight() {
        if(input.value.length <= 5) {
            input.dataset.number = 'green'
        } else if (input.value.length > 5 && input.value.length <= 10) {
            input.dataset.number = 'yellow'
        } else {
            input.dataset.number = 'red'
        }
    }
}
task5();