/* function sumar (){
    var numero1 = 5;
    var numero2 = 6;
    var suma = numero1 + numero2;
    alert ("La suma de la funcion sin parametros es: " + suma);
}

sumar();
//Funcion con parametros
function restar (num1, num2,resta){
    var num1 = 6;
    var num2 = 8;
    var resta = num2 - num1;
    alert("La resta de la funcion con parametros es: " + resta);
}

restar();

//Otra funcion con parametros

funcion Cuadrado (cuadrado){
    var rescuadrado = cuadrado * cuadrado;
    alert ("El cuadrado del numero es: " + rescuadrado);
}

Cuadrado (4);

function Operaciones (num1,num2,num3, suma, resta, multi){
    var suma = num1 + num2 + num3;
    var resta = num1 - num2 - num3;
    var multi = num1 * num2 * num3;

    alert("La suma es: " + suma +", la resta es: " + resta + "y la multiplicacion es: " + multi);
}

Operaciones(5,6,7);
*/

//Function Prompter

/* function Prompter(){
    var respuesta = prompt("Buenos días, ¿Cuál es tu nombre");
    alert("Es un gusto saludarte: "+ respuesta);
}

Prompter();

function AreaCuadrado (){
    var datoingresado = prompt("Ingresa un numero");
    var resultado = datoingresado * datoingresado;
    alert ("El area del cuadrado es" + datoingresado + "porque el numero que ingresaste es: " + datoingresado);
}
AreaCuadrado();
*/

function confirmación(){
    var pregunta = confirm("¿Deseas visitar google.com y buscar fotos de perritos?")
    if (pregunta){
        alert("Te enviaré rapidamente")
        window.location = "https//www.Google.com";
    }
    else{
        alert("No hay problema, nos vemos luego")
    }
}

//get element By id

function cambiarColor(nuevoColor){
    var elem = documento.getElementById ("parrafo");
    elem.style.color = nuevoColor; 

}

function Accion (Tipo){
    var elem = document.getElementById ("DivBotones");
    if (Tipo == "Ocultar")
    elem.style.display ='none';
    else elem.style.display = '';
}