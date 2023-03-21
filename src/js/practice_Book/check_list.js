function task25() {
    const inputTask = document.querySelector('.checklist #task');
    const listTask = document.querySelector('.checklist #list_tasks');

    inputTask.addEventListener('keypress', function (event) {
        let text = this.value;
        if(event.code === 'Enter') {
            
            addNewTask(listTask, text);
            this.value = '';
        }
    });

    function addNewTask(list, text) {
        const li = document.createElement('li');

        addTextTask(text, 'task', li, editTask);
        addTextTask('удалить', 'remove', li, removeTask);
        addTextTask('сделано', 'mark', li, markTask);
        
        list.appendChild(li);
    }

    function addTextTask(name, style, parent, callback) {
        const elem = document.createElement('span');
        elem.textContent = `${name}`;
        elem.classList.add(style);
        elem.addEventListener('click', function(){
            callback(elem);
        });
        parent.appendChild(elem);
    }

    function removeTask(span) {
        span.parentElement.remove();
    }

    function markTask(span) {
        span.previousElementSibling.previousElementSibling.classList.toggle('done');
    }

    function editTask(span) {
        const edit = document.createElement('input');
        edit.value = span.textContent;
        edit.addEventListener('keypress', function(event) {
            if(event.code === 'Enter') {
                span.textContent = edit.value;
                edit.remove();
            }
        });
        span.textContent = '';
        span.parentElement.prepend(edit);
    }

}
task25();