var numero1 = (prompt("Introduce a word"));
var numero2 = (prompt("Introduce a word"));
var Numero = (numero1+numero2);

function calculadora(numero1,numero2){ // Declaramos la función
    return("La suma de los valores es: " + Numero + " \nLa resta de los valores es: "+ (numero1-numero2) + " \nLa multiplicacion de los valores es: "+ numero1*numero2 + " \nLa división de los valores es: "+ numero1/numero2 + " \nEl modulo de la división de los valores es: "+ (numero1%numero2));
}

console.log(calculadora(numero1,numero2)) // Imprimimos la función
