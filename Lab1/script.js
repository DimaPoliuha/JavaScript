"use strict"//строгий режим, только в начале кода или в начале функции
//
function greeting() {
    alert( "Hello, brother" );
  }
  
  var funcHi = greeting;
  greeting();//одинаково
  funcHi();//одинаково
//
var name;
name = 'vasya';
var surname = 'petrovich';
//
var name1 = 'nick', age = 15;
var ageNick = age;//15
// имя нельзя начинать с цифры
// var aa & var Aa - разные переменные
//var NAME = 'AaA' - константная переменная
/*
var undef; // переменная не присвоена, т.е. равна undefined
var zero = 0;
var emptyStr = "";
var msg = "Привет!";

var result = undef || zero || emptyStr || msg || 0;

alert( result ); // выведет "Привет!" - первое значение, которое является true 

eсли все значения «ложные», то || возвратит последнее из них:
*/
for (var i = 0; i < 10; i++) {
    
      if (i % 2 == 0) continue;
    
      console.log(i);
    }
//
var yearNow = function(year) {
    alert( "Now " + year + " year");
  };
  
  yearNow('2017');

function sum(m, n) {
    var res = m + n;
  
    return res;
  }
alert( sum(10, -9) );
//
console.log( "Hello, you! Hiiiii".length );
/*
var hello = "Привет, мир!";
alert( hello.toUpperCase() ); // "ПРИВЕТ, МИР!"
*/
/*var n = 12.345;
alert( n.toFixed(2) ); // "12.35"
*/
var str = "I'm a JavaScript \"programmer\" ";//экранирование
alert( str ); // I'm a JavaScript "programmer"
//Ассоциативный массив – структура данных, в которой можно хранить любые данные в формате ключ-значение
var group = {};
group.name = 'ti-62';
group.amount = 17;
group.starosta = 'Nastya';
group.surname = undefined;
delete group.surname;

var ke = 'starosta';
console.log( group[ke] );

var count = 0;

for (var key in group) {
    alert( "Ключ: " + key + " значение: " + group[key] );
    count++;
}

alert( "Amount of keys is: " + count);