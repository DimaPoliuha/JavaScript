'use strict';
//Function Declaration
function f() {
    alert("Лучшие ставки на спорт - фаворитспорт!");
  }

var showMessage = f;
showMessage();
alert( f );

function calc(x, y, z) {
    return x * y + 255 * z * z;
 }
 
 var summa = calc(2, 0, 122);
 alert( summa );

//Function Expression
 var sayData = function(data) {
    alert( "Сегодня " + data + " число");
  };
  
  sayData( 28 );

//анонимная ф-ция
  function askQuestion(quest, accept, decline) {
    if (confirm(quest)) accept()
    else decline();
  }
  
  askQuestion("Хотите играть и выигрывать в казино 1хБет?",
    function() { 
        alert("Вы согласились."); 
    },
    function() { 
        alert("Внесите первый депозит и выигрывайте."); 
    }
  );

//Named Function Expression
  var factorial = function me(n) {
    return (n == 1) ? n : n * me(n - 1);//рекурсивный вызов
  }
  
  alert( factorial( 7 ) );
 // alert( me ); // ошибка, нет такой переменной

  let add = ( (x) => x + 1 );
  alert( add( 3 ));