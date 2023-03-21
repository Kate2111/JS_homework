"use strict";

//при нажатии Enter записываем название города в массив. Во-первых, нужно проверить то, что первая буква введенного города совпадает с последней буковой предыдущего города. Во-вторых, нужно проверить то, что такого города еще не было в этой игре.

//в сообщении выводим: следующий город на букву "", кроме букв  ь(например), если город повторяется, то выводим сообщение: Такой город называли. Попробуйте еще. Город на букву "".

function task23 (allCities, name, input) {
    const nameInput = document.querySelectorAll(name);
    const city = document.querySelector(input);
    const message = document.querySelector('.game_of_cities #message');
    const playFriends = document.querySelector('.game_of_cities .friend');
    const playComputer = document.querySelector('.game_of_cities .comp');
    const listFirstPlayer = document.querySelector('.firstList');
    const listSecondPlayer = document.querySelector('.secondList');
    const cities = [];
    const names = [];

    
    //Кнопка 'Игра с другом'
    playFriends.addEventListener('click', function startPlay() {
        this.classList.add('active');
        playComputer.classList.remove('active');

        showNamePlayer(nameInput, names, city);
        createArrCities(cities, city, message, names);
        clearListCities(listFirstPlayer, listSecondPlayer);
    });

    //Игра с другом
    //Создаем массив городов введеных в поле
    function createArrCities(arrCities, nameCity, text, arrNames) {
        nameCity.addEventListener('keypress', function getCityOfArr (event) {
            if(event.code === 'Enter') {
                let val = this.value.trim().toLowerCase();
                checkWord (arrCities, val, text, arrNames);
                showListCitiesOfPlayer (listFirstPlayer, listSecondPlayer, arrCities);

                this.value = '';
            } 
        });

        nameCity.addEventListener('input', () => {text.textContent = '';});
    }

    //Проверяем введенное слово: с какой буквы начинается и существует ли уже в массиве
    function checkWord (arrCities, city, text, arrNames) {
        if(!arrCities) {
            text.textContent = 'Введите название города';
            return;
        }

        if(arrCities.length > 0 && city[0] !== arrCities[arrCities.length - 1].slice(-1)) {
            text.textContent = `Попробуйте еще. Город начинается на букву ${arrCities[arrCities.length - 1].slice(-1)}`;
            return;
        }

        if(arrCities.includes(city)) {
            text.textContent = 'Такой город уже называли';
            return;
        }

        arrCities.push(city);
        showCurrentPlayer(arrNames);
        console.log(arrCities);
    }


    //Выводим введеные города отдельным списком на экран для каждого игрока
    function showListCitiesOfPlayer (listOne, listTwo, arrCities) {
        clearListCities(listOne, listTwo);
        for(let i = 0; i < arrCities.length; i++) {
            if(i % 2 == 0) {
                createList(listOne, arrCities[i]);  
            } else {
                createList(listTwo, arrCities[i]);
            }
        }
    }

    //Очищаем список выведеных городов на экран
    function clearListCities(listOne, listTwo) {
        listOne.textContent = '';
        listTwo.textContent = '';
    }

    //Создаем список городов
    function createList(parent, city) {
        const li = document.createElement('li');
        li.textContent = city;
        parent.appendChild(li);  
    }

    //Сохраняем имя игрока
    function showNamePlayer(arrInput, arrNames) {
        arrInput.forEach(name => {
            name.addEventListener('keypress', function(event){
                if (event.code === 'Enter') {
                    const namePlayer = document.createElement('p');
                    namePlayer.classList.add('notactive');
                    namePlayer.textContent = name.value;
                    name.parentElement.prepend(namePlayer);
                    name.remove();

                    arrNames.push(namePlayer);
                    arrNames[0].classList.add('active');
            
                    return arrNames;                   
                }
            });
        });
    }

    //Выделяем цветом игрока, который делает ход
    function showCurrentPlayer(arrNames) {
        arrNames.forEach((elem) => {
            if(elem.classList.contains('active')){
                elem.classList.remove('active');
            } else {
                elem.classList.add('active');
            }
        });
    }
} 

//Игра в города против робота на JavaScript