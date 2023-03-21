function task26() {
    const save = document.querySelector('.save');
    const list = document.querySelector('#notes');
    const note = document.querySelector('textarea');
    const texts = [];

    save.addEventListener('click', function () {
        texts.push(note.value);
        note.value = '';
        
        addLinkMenu(list, texts, note, showNoteOfLink);
        //console.log(texts);
    });

    function addLinkMenu(parent, arr, entry, callback) {
        const li = document.createElement('li');
        for(let i = 0; i < arr.length; i++) {
            li.textContent = `Запись ${i + 1}`;
            li.dataset.key = i + 1; 
        } 
        li.addEventListener('click', function() {
            callback(entry, li);
        });
        parent.appendChild(li);
    }

    function showNoteOfLink(entry, link) {
        const index = Number(link.getAttribute('key'));
        entry.value = texts[index];
    }
    
}
task26();