'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

//реализую функцию, которая создает границы рандомного числа в моем случае от 1 до 100

    

let foo = (function() {
    //рандомное число в замыкании от 1 до 100
    let number = Math.floor((Math.random() * 100) +1);
    console.log(number);
    return function bar () {

        let userNumber = prompt('Угадай число от 1 до 100');
        if ( userNumber === null) {
           alert('good bay');
           return;
        }
        if(!isNumber(userNumber) ) {
            userNumber = prompt('Введи число!');
        } else {
            userNumber = +userNumber;
            if (userNumber > number ) {
                alert('Загаданное число меньше!');
                bar();
                
            } if (userNumber < number) {
                alert('Загаданное число больше!');
                bar();
                
            }if (userNumber === number) {
                confirm('Ты победил!');
            }
        }
       return bar();
    };
})();
foo();















    

   

    