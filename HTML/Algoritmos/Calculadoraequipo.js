//declaración de variables

var Numero1;
var Numero2;

function calculadora(numero1,numero2){ // Declaramos la función
    Numero1 = numero1
    Numero2 = numero2
    Numero1--
    Numero2--
    return("La suma de los valores es: " + (numero1+numero2) + " \nLa resta de los valores es: "+ (numero1-numero2) + " \nLa multiplicacion de los valores es: "+ numero1*numero2 + " \nLa división de los valores es: "+ numero1/numero2 + " \nEl cuadrado del modulo de la división de los valores es: "+ (numero1%numero2)**2 + " \nEl incremento de los valores es: " + (++numero1) + " " + (++numero2) + " \nEl decremento de los valores es: " + (Numero1) + " " + (Numero2) );
}

console.log(calculadora(7,5)) // Imprimimos la función
