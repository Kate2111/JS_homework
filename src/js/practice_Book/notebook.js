function task26() {
    const save  = document.querySelector('.save');
    const ul    = document.querySelector('#notes');
    const note  = document.querySelector('textarea');
    const texts = [];

    start (save, ul, texts, note);

    function start (mainBtn, parent, arr, entry) {
        mainBtn.addEventListener('click', function () {
            const btnSave = this;
            const mode = this.dataset.mode;
    
            //Проверяем data-mode у кнопки сохранить, create или update
            hasDataCreate (mode, parent, arr, entry, btnSave);
            hasDataUpdate(mode, arr, entry, btnSave, parent);
            
            entry.value = '';
        });
    }

    //Создаем новую запись в блокноте
    function hasDataCreate (data, parent, arr, entry, btnSave) {
        if(data == 'create') {
            addLinkMenu(parent, arr, entry, showNoteOfLink);
            addClassActive(parent, btnSave);
        } 
        
    }

    //Редактируем и сохраняем открытую запись
    function hasDataUpdate(data, arr, entry, btnSave, parent) {
        if(data == 'update') {
            editAndSaveTextarea(arr, entry, btnSave, parent);
        }
    }

    //Создаем новую ссылку в меню с номером записи и корзиной
    function addLinkMenu(parent, arr, entry, callback) {
        if(entry.value != '') {
            arr.push(entry.value);

            const li = document.createElement('li');
           
            createSpanElem(li, 'open', showTextSpanOpen, arr);
            createSpanElem(li, 'remove', showTextSpanRemove);

            parent.appendChild(li);

            li.addEventListener('click', function(event) {
                callback(entry, arr, li, event); 
            });
        }
    }

    //Создает элемент span(для отображения номера записи/корзины)
    function createSpanElem(parent, name, callback, arr) {
        const elem = document.createElement('span');
        elem.classList.add(`${name}`);
        parent.appendChild(elem);
        callback(elem, parent, arr);        
    }

    //Отображаем номер записи в блокноте
    function showTextSpanOpen (span, parent, arr) {
        for(let i = 0; i < arr.length; i++) {
            span.textContent = `Запись ${i + 1}`;
            parent.dataset.key = i; 
        } 
    }

    //Удаление записи
    function showTextSpanRemove(span) {
        span.innerHTML = `&#128465;`;
    }

    //Просмотр текта в окне по клику на кнопку номера записи
    function showNoteOfLink(entry, arr, link, event) {
        const index = Number(link.dataset.key);
        if(event.target.className == 'open') {
            entry.value = arr[index];
        }
        if(event.target.className == 'remove') {
            arr.splice(index, 1);
            event.target.parentElement.remove();

            // изменяем нумерацию и data-key для последующих элементов с классом open
            const openSpans = document.querySelectorAll('.open');
            for (let i = index; i < openSpans.length; i++) {
                openSpans[i].textContent = `Запись ${i+1}`;
                openSpans[i].parentElement.dataset.key = i;
            } 
        }
    }
    
    //Редактирование и созранение записи
    function editAndSaveTextarea (arr, entry, button, parent) {
        const index = Number(button.dataset.key);
        arr.splice(index, 1, entry.value);

        button.dataset.mode = 'create';

        removeClassActive(parent.querySelectorAll('li'));
    }

    //Выделение ссылки записи, которая просматривается в данный момент 
    function addClassActive(parent, button) {
        const list = parent.querySelectorAll('li');
        list.forEach((li, i) => {
            li.addEventListener('click', function() {
                removeClassActive(list);

                li.classList.add('active');  

                button.dataset.mode = 'update';
                button.dataset.key = i;
            });
        });
    }

    //Отмена отображения неактивных ссылок
    function removeClassActive(arr) {
        arr.forEach(elem => {
            elem.classList.remove('active');
        });
    }
}
task26();