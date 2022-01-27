//Exercise 1
    transaction = parseInt(prompt("¿Cuántas transacciones hiciste?"));
    total = parseInt(prompt("¿Cuál es el Monto total?"));
function cost(comisiones,fee){
    var comisiones = transaction*3;
    console.log("El total de las comisiones es:" + comisiones)
    var fee = (comisiones + total)*0.01;
    console.log("El total de los impuestos es: " + fee);

    var grantotal = comisiones + fee + total;
    console.log("El gran total es: " + grantotal);

}

cost(transaction, total);

//Excersice 2 part 1

var nombre1 = prompt("Escribe el nombre de tu primer de tu amigo:");
var nombre2 = prompt("Escribe el nombre de tu segundo de tu amigo:");
var nombre3 = prompt("Escribe el nombre de tu tercer de tu amigo:");

ejercicio2Parte1(nombre1,nombre2,nombre3);

function ejercicio2Parte1(nom1,nom2,nom3){
    console.log("Bienvenido "+nom1+", "+nom2+", "+nom3);
    return;
}

//Excersice 2 part 2

function ejercicio2Parte2 (){
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    console.log(añoActual);
    // Devuelve la fecha actual
    var nacimiento = prompt("¿En qué año naciste?");
    //Almacena elaño de nacimiento
    años = añoActual - nacimiento;
    //Diferencia de fechas
    alert("Tu año de nacimiento es: "+nacimiento+" y tienes: "+años+" años");
}

ejercicio2Parte2();


//Excersice 2 part 3
var Edad1 = prompt("¿En qué año naciste?" + nombre1);
var Edad2 = prompt("¿En qué año naciste?" + nombre2);
var Edad3 = prompt("¿En qué año naciste?" + nombre3);

function ejercicio3(){
    console.log("Welcome: " + nombre1 + " your age: " + Edad1+ "Welcome: " + nombre2 + " your age: " + Edad2+"Welcome: " + nombre3 + " your age: " + Edad3);
}

ejercicio3();

//Challenge yourself

//part 1

var rubrica = parseInt(prompt("Rubrica: "));

function pass(){
    if(rubrica==11){
        console.log("Perfect");
    }
    else if(rubrica>8){
        console.log("Excellent");
    }
    else if(rubrica>=5){
        console.log(true);
    }
}

pass();
