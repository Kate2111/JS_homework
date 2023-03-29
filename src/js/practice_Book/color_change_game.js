function task36() {
    const table = document.querySelector('#field');
    const steps = document.querySelector('.step');
    let counterStep = 0;
    let colors = ['red', 'green', 'blue'];
   

    showFieldPay(table, 3, 3, colors); 
    

    function showFieldPay(parent, rows, cols, arrColor) {
        for(let i = 0; i < rows; i++) {
            const tr = document.createElement('tr');
            parent.appendChild(tr);

            showCols(tr, cols, arrColor);
        }
    }

    function showCols(parent, cols, arrColor) {
        for(let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            parent.appendChild(td);

            td.classList.add(addColorCell(arrColor));
           
           showNextColorCell(td, arrColor);
        }
    }

    function addColorCell(arrColor) {
        let index = Math.round(Math.random() * arrColor.length - 1);
        if(index < 0) { return colors[0];}
        return arrColor[index];
    }

    function showNextColorCell(td, arrColor) {
        td.addEventListener('click', function (event) {
            counterStep+=1;
            steps.textContent = `Количество шагов ${counterStep}`;

            let i = arrColor.indexOf(event.target.className);
            td.classList.remove(arrColor[i]);
            
            i === arrColor.length - 1 ? i = 0 : i += 1;
            td.classList.add(arrColor[i]);

            if(isVictoy(arrColor[i])) {
                alert('вы победили');
            }
        }); 
    
    }

    function isVictoy(currentColor) {
        let index = 0;
        const cells = document.querySelectorAll('td');

        for(let cell of cells) {
            if(cell.classList.contains(currentColor)) {
                index++;
                if(index == 9){
                    return true;
                }
            }
        }
    }
}
task36();