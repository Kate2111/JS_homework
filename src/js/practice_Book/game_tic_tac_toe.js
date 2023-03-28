function task35() {
    let cells = document.querySelectorAll('#field td');

    start(cells);

    function start(cells) {
        let counterStep = 0;

        for(let cell of cells) {
            cell.addEventListener('click', function nextStep() {
                let gamers = ['X', 'O'];
                let key = counterStep % 2;
                cell.textContent = gamers[key];
                counterStep++;  

                cell.removeEventListener('click', nextStep);

                showWin(cells, cell, counterStep);
            });
        }
    }

    function showWin(arr, elem, iStep) {
        if(isVictory(arr)) {
            alert(`Победитель ${elem.textContent}`);
        } else if(iStep == 8) {
            alert('Ничья');
        }
    }

    function isVictory(arr) {
        let combs = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for(let comb of combs) {
            let condition = 
                arr[comb[0]].textContent == arr[comb[1]].textContent && 
                arr[comb[1]].textContent == arr[comb[2]].textContent && 
                arr[comb[0]].textContent != '';

            if(condition) {
                return true;
            }
        }
        return false;
    }
}
task35();