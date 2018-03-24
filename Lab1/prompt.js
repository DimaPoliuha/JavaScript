//var mail = prompt("Enter e-mail", '');
//alert("Your e-mail: " + mail);

var mark = prompt("Какую оценку я получу за этот семестр?", '');
if (mark == 100) {
    alert( 'Все верно!' );
} else if (mark > 100){
    alert( 'Это невозможно!' );
} else{
    alert( 'А вот и неправильно!' );
}