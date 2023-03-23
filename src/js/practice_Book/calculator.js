function task27() {
    let name   = document.querySelector('#name');
    let price  = document.querySelector('#price');
    let amount = document.querySelector('#amount');
    let add    = document.querySelector('#add');
    let table  = document.querySelector('#table');
    let total  = document.querySelector('#total');

    start(add, table, total, name, price, amount);

    function start(addBtn, parent, resultSum, nameInput, priceInput, amountInput) {
        addBtn.addEventListener('click', function() {
    
            createRow(parent, nameInput, priceInput, amountInput, removeTd, resultSum);
            recountTotal(resultSum);
        });
    }

    //Создаем новый ряд в списке покупок
    function createRow(parent, nameInput, priceInput, amountInput, callback, resultSum) {
        const tr = document.createElement('tr');

        let tdName = createCell('name', nameInput.value, tr);
        let tdPrice = createCell('price', priceInput.value, tr);
        let tdAmount = createCell('amount', amountInput.value, tr);
        createCell('cost', priceInput.value * amountInput.value, tr);
        let tdRemove = createCell('remove', 'удалить', tr);
        
        startAllHandler(tdName, tdPrice, tdAmount, tdRemove,callback, resultSum); 

        parent.appendChild(tr);
    }

    //Создаем ячейку для каждого input
    function createCell(name, text, parent) {
        let td = document.createElement('td');
        td.classList.add(`${name}`);
        td.textContent = text;
        parent.appendChild(td);
        return td;
    }

    //Пересчитываем "Общий итог"
    function recountTotal(resultSum) {
        const costs = document.querySelectorAll('.cost');

        let sum = [...costs].reduce((sum, cost) => {
            let numCost = parseInt(cost.textContent);
            if(numCost > 0) {
                return sum + parseInt(cost.textContent);
            }
        }, 0);

        resultSum.textContent = sum;
    }

    //Удаляем ряд и пересчитываем "Общий итог"
    function removeTd(remove, resultSum) {
        remove.parentElement.remove();
        recountTotal(resultSum);
    }

    //Обработчики для ячеек
    function startAllHandler(name, price, amount, remove, callback, resultSum) {
        allowEdit(name, resultSum);
        allowEdit(price, resultSum);
        allowEdit(amount, resultSum);

        remove.addEventListener('click', function () {
            let remove = this;
            callback(remove, resultSum);
        });
    }

    //Редактируем любую ячейку из 'названия', 'цены' и 'кол-ва'
    function allowEdit(td, resultSum) {
        td.addEventListener('dblclick', function() {
            console.log(td.textContent);
            const input = document.createElement('input');
            input.value = td.textContent;
            //input.focus();
            td.textContent = '';
            td.appendChild(input);

            saveChangesInputHandler(input, td, resultSum);
        });
    }

    //Созранение изменений в ячейке
    function saveChangesInputHandler(input, td, resultSum) {
        input.addEventListener('keypress', function(event) {
            if(event.code == 'Enter') {
                td.textContent = input.value;
                input.remove();

                recalculationCost(td, resultSum);
            }
        }); 
    }

    //Меняем 'сумму' и 'общий итог' при редактировании ячеек 'цена' и 'количество'
    function recalculationCost(td, resultSum) {
        if(td.classList.contains('price') || td.classList.contains('amount')) {
            const parent= td.parentElement;
            const price = parent.querySelector('.price');
            const amount = parent.querySelector('.amount');
            const cost = parent.querySelector('.cost');
            const newCost = parseInt(price.textContent) * parseInt(amount.textContent);
            cost.textContent = newCost;

            recountTotal(resultSum);
        }
    }
}
task27();