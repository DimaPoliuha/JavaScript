'use strict';

var P = " ";
var arrayChar = ['Jav', 'a', 'scri', 'pt'];
var arrayInt = [0,1,2,3,4,5,6,7,8,9];


//forEach
arrayInt.forEach( function( item ){
  console.log( item );
});

arrayChar.forEach( ( item, i ) => console.log( i + "-й элемент:" + item ));
//

console.log( P );
console.log( P );

//filter
var arrayCharFiltered = arrayChar.filter( function( item ){
  return item.length > 2;
});

var arrayIntFiltered = arrayInt.filter( ( item ) => {return item > 2;});

console.log( arrayCharFiltered );
console.log( arrayIntFiltered );
//

console.log( P );
console.log( P );

//map
var arrayCharMap = arrayChar.map( function( item ) {
  return item.length;
});

var arrayIntMap = arrayInt.map( ( item ) => {return '<li>' + item + '</li>'});

console.log( arrayCharMap );
console.log( arrayIntMap );
//

console.log( P );
console.log( P );

//every (and)
var Flag0 = arrayChar.every( function( item ){
  return item.length < 4;
});

var Flag1 = arrayInt.every( ( item, i ) => {return i == item;});

console.log( Flag0 );
console.log( Flag1 );
//

console.log( P );
console.log( P );

//some (or)
var Flag2 = arrayChar.some( function( item, i ){
  return item.length < i;
});

var Flag3 = arrayInt.some( ( item ) => {return item == 3;});

console.log( Flag2 );
console.log( Flag3 );
//

console.log( P );
console.log( P );

//reduce
var arrayIntSum0 = arrayInt.reduce( function( s, item, i ){
  return s + item + i;
});
var arrayIntSum1 = arrayInt.reduceRight( ( s, item) => {return s + item;} , 0 );

console.log( arrayIntSum0 );
console.log( arrayIntSum1 );
//