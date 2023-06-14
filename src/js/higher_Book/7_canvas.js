

//image.beginPath();                    //'начало пути' , эта команда должна быть первой
//image.moveTo(50, 50)                  //устанавливает начальную точку для рисования пути на холсте
//image.lineTo(50, 50);                 //рисует линию от текущей точки пути до указанных координат x и y.
//image.closePath();                    //автоматически закрытвает фигуру
//image.stroke();                       //вызывается в конце
//image.fill();                         //закрашивает фигуру
//image1.strokeRect(50, 50, 100, 50)    //strokeRect(x, y, ширина, высота)-контур прямоугольника.
//image1.fillRect(50, 50, 100, 75);     //рисует закрашенный прямоугольник
//image.rect(x, y, ширина, высота)      //рисует прямоугольник. Но видимым этот прямоугольник станет, только если применить метод stroke или fill.
//image1.clearRect(60, 60, 50, 50);     //работает как ластик, очищая прямоугольную область

//Рисование линий
const image1 = document.querySelector('.image1').getContext('2d')
image1.beginPath();
image1.moveTo(100, 100);
image1.lineTo(100,200);
image1.stroke();

const image2 = document.querySelector('.image2').getContext('2d')
image2.beginPath();
image2.moveTo(100, 100);
image2.lineTo(200,100);
image2.stroke();

const image3 = document.querySelector('.image3').getContext('2d')
image3.beginPath();
image3.moveTo(50, 50);
image3.lineTo(150, 150);
image3.moveTo(150, 50);
image3.lineTo(50, 150);
image3.stroke();

const image4 = document.querySelector('.image4').getContext('2d')
image4.beginPath();
image4.moveTo(50, 50);
image4.lineTo(150, 50);
image4.lineTo(150, 150);
image4.lineTo(50, 150);
image4.closePath();
image4.stroke();

const image5 = document.querySelector('.image5').getContext('2d')
image5.beginPath();
image5.moveTo(50, 150);
image5.lineTo(250, 150);
image5.lineTo(150, 75);
image5.closePath();
image5.stroke();

const image6 = document.querySelector('.image6').getContext('2d')
image6.beginPath();
image6.moveTo(75, 75);
image6.lineTo(250, 75);
image6.stroke();

image6.beginPath();
image6.moveTo(230, 50);
image6.lineTo(250, 75);
image6.lineTo(230, 100);
image6.stroke();


const image7 = document.querySelector('.image7').getContext('2d')
image7.beginPath();
image7.moveTo(50, 50);
image7.lineTo(150, 50);
image7.lineTo(150, 150);
image7.lineTo(50, 150);
image7.closePath();
image7.fill();
image7.stroke();

const image8 = document.querySelector('.image8').getContext('2d')
image8.beginPath();
image8.moveTo(50, 150);
image8.lineTo(150, 150);
image8.lineTo(100, 50);
image8.closePath();
image8.fill();
image8.stroke();


//Рисование прямоугольников
const image9 = document.querySelector('.image9').getContext('2d')
image9.strokeRect(50,50,200,75)

const image10 = document.querySelector('.image10').getContext('2d')
image10.rect(50,50,100,75);
image10.stroke();

const image11 = document.querySelector('.image11').getContext('2d')
image11.fillRect(50,50,100,75);

const image12 = document.querySelector('.image12').getContext('2d')
image12.fillRect(50, 50, 100, 100);
image12.clearRect(75, 75, 50, 50);



//Рисование окружностей 
//https://www.code.mu/ru/javascript/book/supreme/canvas/circle/

//const image2 = document.querySelector('.image2').getContext('2d')

//углы в методе arc измеряют в радианах, не в градусах. Для перевода градусов в радианы вы можете использовать следующую функцию:
//метод arc рисует дугу с центром в некоторой точке. Он принимает следующие параметры:
// x, y, радиус r, начальный угол startAngle, конечный угол endAngle, рисовать по или против часовой стрелки direction(true, false).


function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
}

const image13 = document.querySelector('.image13').getContext('2d')
image13.arc(75, 75, 50, 0, getRadians(360));
image13.stroke();

const image14 = document.querySelector('.image14').getContext('2d')
image14.arc(75, 75, 50, 0, getRadians(360));
image14.fill();
image14.stroke();

const image15 = document.querySelector('.image15').getContext('2d')
image15.arc(75, 75, 50, 0, getRadians(180));
image15.closePath(); 
image15.stroke();

const image16 = document.querySelector('.image16').getContext('2d')
image16.arc(75, 75, 50, 0, getRadians(180));
image16.fill();
image16.stroke();

const image17 = document.querySelector('.image17').getContext('2d')
image17.arc(75, 75, 50, 0, getRadians(90));
image17.fill();


//Смена цвета линии
//strokeStyle - цвет контура
//fillStyle - цвет заливки.
const image18 = document.querySelector('.image18').getContext('2d')
image18.beginPath();
image18.moveTo(40, 40);
image18.lineTo(150, 40);
image18.strokeStyle = 'green';
image18.stroke();

image18.beginPath();
image18.moveTo(50, 50);
image18.lineTo(150, 50);
image18.strokeStyle = 'red';
image18.stroke();

const image19 = document.querySelector('.image19').getContext('2d')
image19.rect(50, 50, 100, 50)
image19.fillStyle = 'green';
image19.fill();

const image20 = document.querySelector('.image20').getContext('2d')
image20.fillStyle = 'green';
image20.fillRect(100, 100, 50, 50);

image20.fillStyle = 'red';
image20.fillRect(50, 50, 50, 50);


//Смена размера линий
//lineWidth - Толщина линии
const image21 = document.querySelector('.image21').getContext('2d')
image21.rect(50, 50, 100, 75);
image21.lineWidth = 5;
image21.stroke();

//Циклы в canvas
const image22 = document.querySelector('.image22').getContext('2d')
for(let i = 1; i <=6; i++){
    image22.moveTo(50, 15*i);
    image22.lineTo(150, 15*i);
}

image22.stroke();

const image23 = document.querySelector('.image23').getContext('2d')
for(let i = 1; i <=5; i++){
    image23.moveTo(50, 15*i);
    image23.lineTo(150, 15*i);
}

image23.stroke();

for(let i = 1; i <=6; i++){
    image23.moveTo(47+(15*i), 5);
    image23.lineTo(47+(15*i), 85);
}

image23.stroke();



