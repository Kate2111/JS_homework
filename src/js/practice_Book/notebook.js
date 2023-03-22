/*  newEntry.addEventListener('click', function() {
        const btnSave = this;
        const mode = this.dataset.mode;
       
        
    }); */

function task26() {
    const save  = document.querySelector('.save');
    const newEntry = document.querySelector('.new_entry');
    const ul    = document.querySelector('#notes');
    const note  = document.querySelector('textarea');
    const texts = [];

    save.addEventListener('click', function () {
        const btnSave = this;
        const mode = this.dataset.mode;

        hasDataCreate (mode, ul, texts, note, btnSave);
        hasDataUpdate(mode, texts, note, btnSave, ul);
        
        note.value = '';
    });

    function hasDataCreate (data, parent, arr, entry, btnSave) {
        if(data == 'create') {
            addLinkMenu(parent, arr, entry, showNoteOfLink);
            addClassActive(parent, btnSave);
        } 
        console.log(arr);
    }

    function hasDataUpdate(data, arr, entry, btnSave, parent) {
        if(data == 'update') {
            editAndSaveTextarea(arr, entry, btnSave, parent);
        }
    }

    function addLinkMenu(parent, arr, entry, callback) {
        if(entry.value != '') {
            texts.push(entry.value);

            const li = document.createElement('li');
           
            createSpanElem(li, 'open', showTextSpanOpen, arr);
            createSpanElem(li, 'remove', showTextSpanRemove);

            parent.appendChild(li);

            li.addEventListener('click', function(event) {
                callback(entry, arr, li, event); 
            });
        }
    }

    function createSpanElem(parent, name, callback, arr) {
        const elem = document.createElement('span');
        elem.classList.add(`${name}`);
        parent.appendChild(elem);
        callback(elem, parent, arr);        
    }

    function showTextSpanOpen (span, parent, arr) {
        for(let i = 0; i < arr.length; i++) {
            span.textContent = `Запись ${i + 1}`;
            parent.dataset.key = i; 
        } 
    }

    function showTextSpanRemove(span) {
        span.innerHTML = `&#128465;`;
    }

    function showNoteOfLink(entry, arr, link, event) {
        const index = Number(link.dataset.key);
        if(event.target.className == 'open') {
            entry.value = arr[index];
        }
        if(event.target.className == 'remove') {
            arr.splice(index, 1);
            event.target.parentElement.remove();

            // изменяем нумерацию и data-key для последующих элементов с классом open
       /*      const openSpans = document.querySelectorAll('.open');
            for (let i = index; i < openSpans.length; i++) {
                openSpans[i].textContent = `Запись ${i+1}`;
                openSpans[i].parentElement.dataset.key = i;
            } */
        }
    }
    
    function editAndSaveTextarea (arr, entry, button, parent) {
        const index = Number(save.dataset.key);
        arr.splice(index, 1, entry.value);

        button.dataset.mode = 'create';

        removeClassActive(parent.querySelectorAll('li'));
    }

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

    function removeClassActive(arr) {
        arr.forEach(elem => {
            elem.classList.remove('active');
        });
    }
}
task26();