//1 По потери фокуса на экран выведите квадрат числа из value инпута через переменную let self = this

function task1() {
    let elem = document.querySelector('.task11_1 #elem');
    elem.addEventListener('blur', func);

    function func() {
        let self = this;
        alert(square());
        
        function square() {
            return (+self.value) * (+self.value);
        }
    }
}
task1();

//2 По потери фокуса на экран выведите квадрат числа из value инпута через переменную let self = this

function task2() {
    let elem = document.querySelector('.task11_2 #elem');
    elem.addEventListener('blur', func);

    function func() {
        alert(square(this));
        
        function square(elem) {
            return (+elem.value) * (+elem.value);
        }
    }
}
task2();

//3 По потери фокуса на экран выведите квадрат числа из value инпута через стрелочную функцию

function task3() {
    let elem = document.querySelector('.task11_3 #elem');
    elem.addEventListener('blur', func);

    function func() {
        let child = () => {
            return (+this.value) * (+this.value);
        };

        alert(child());
    }
}
task3();

//4. С помощью метода call и функции func выведите на экран value каждого из инпутов.
function task4() {
    const elem1 = document.querySelector('.task11_4 #elem1');
    const elem2 = document.querySelector('.task11_4 #elem2');
    const elem3 = document.querySelector('.task11_4 #elem3');
    const div = document.querySelector('.task11_4');

    function text() {
        let elem = document.createElement('p');
        elem.textContent = this.value;
        div.appendChild(elem);
    }
    text.call(elem1);
    text.call(elem2);
    text.call(elem3);
}
task4();

//5. С помощью метода call и параметров сделайте так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.
function task5() {
    const input = document.querySelector('.task11_5 input');
    const div = document.querySelector('.task11_5');

    function func(surname, name) {
        let elem = document.createElement('p');
        elem.textContent =this.value + ', ' + name + ' ' + surname; 
        div.appendChild(elem);
    }

    func.call(input, 'Smit', 'John');
}
task5();

//6. С помощью метода call и параметров сделайте так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.
function task6() {
    const input = document.querySelector('.task11_6 input');
    const div = document.querySelector('.task11_6');

    function func(surname, name) {
        let elem = document.createElement('p');
        elem.textContent =this.value + ', ' + name + ' ' + surname; 
        div.appendChild(elem);
    }

    func.apply(input, ['Smit', 'John']);
}
task6();
