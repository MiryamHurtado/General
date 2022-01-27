var miAlfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G']; 

function longitud(miAlfabeto){
console.log(miAlfabeto.length);
}

longitud(miAlfabeto);

var planetas=["Jupiter","Plutón","Mercurio","Venus","Saturno"];

planetas.forEach(function (elemento, indice, array) {
    console.log(elemento,indice,array);
});

var myArr = [ 1, 2, 'Uno', true];

myArr.forEach(function (elemento, indice, array) {
    console.log(elemento,indice,array);
});