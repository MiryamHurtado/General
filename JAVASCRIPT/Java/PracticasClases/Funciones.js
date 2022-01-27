function suma (){
    x = 2 + 3;
    console.log("La suma de los numeros es: " + x);
} 

suma ();

function contar (a,b){
    resultados = a + b;
    console.log("La suma de los numeros es: " + resultados);
} 

contar (5, 7);

var x = function(a,b){return a*b};
var y = x(4,3);
console.log(y);


var x = function(a,b){return a*b};
console.log(x(3,4));

//Funcion autoinvocada
(function (){
    console.log("Holi Caracoli");
})();

//Funciones como valores

function valor (a,b){
    return a*b;
}
var x = valor(2,3)*7;

console.log(x);

//Funciones Flecha permite una sintaxis corta de funciones

var x = function(x,y){
    return x*y;
}
console.log(x(2,3));

const y = (x,y) => x*y;
console.log(y(2,3));

