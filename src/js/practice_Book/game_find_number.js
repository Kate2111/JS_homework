function task37() {
    const field = document.querySelector('#field');

    start(2);

    function start(size) {
        const cells = build(field, size, prepare(size));
        activate(cells, size);
    }

    //Строим игровое поле
    function build(field, size, arr) {
        field.textContent = '';
        let cell = [];

        createCells(size, arr, cell);
       
        return cell;
    }

    //Создаем яцейки на поле
    function createCells(size, arr, cell) {
        for(let i = 0; i < size; i++) {
            const tr = document.createElement('tr');
            field.appendChild(tr);

            for(let j = 0; j < size; j++) {
                const td = document.createElement('td');
                td.textContent = '';
                td.textContent = arr[i][j];
                tr.appendChild(td);

                cell.push(td);
            }
        }
    }

    //Активируем ячейки строго по возрастанию от 1 до ...
    function activate(cells, size) {
        let counter = 1;

        for(let cell of cells) {
            cell.addEventListener('click', function() {
                if(cell.textContent == counter) {
                    this.classList.add('active');
                    counter++;
                }

                if(counter - 1 ==  size*size) {
                    start(size += 1);
                }
            });
        }
    }

    //Подготавливаем массив для постоения игрового поля
    function prepare(size) {
        let arr = [];

        arr = range(size * size);
        arr = shuffle(arr);
        arr = chunk(arr, size);

        return arr;
    }

    //Наполняем массив цифрами от 1 до максимального числа таблицы
    function range(size) {
        let arr = [];

        for(let i = 1; i <= size; i++){
            arr.push(i);
        }
        return arr;
    }

    //Перемешиваем элементы массива в случайном порядке
    /* function shuffle(arr){
        let j, temp;
        for(let i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random() * i + 1);
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    } */

    //Вариант автора задачи
    function shuffle(arr) {
        let result = [];
        let length = arr.length;
        
        for (let i = 0; i < length; i++) {
            let random = getRandomInt(0, arr.length - 1);
            let elem = arr.splice(random, 1)[0];
            result.push(elem);
        }
        
        return result;
    }

    //Разбиваем одномерный массив в двухмерный,  длина подмассива равна size
    function chunk(arr, size) {
        let result = [];
        for(let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }

    //Вариант автора задачи
    /* function chunk(arr, n) {
        let result = [];
        let count = Math.ceil(arr.length / n);
        
        for (let i = 0; i < count; i++) {
            let elems = arr.splice(0, n);
            result.push(elems);
        }
        
        return result;
    } */

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
task37();