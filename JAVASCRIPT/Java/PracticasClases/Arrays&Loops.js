/* var cars1 = ["Saab","Volvo","BMW"];

var cars1 = [
    "Saab",
    "Volvo",
    "BMW"
]

var cars2 = new Array ("VolksWagen", "Ford", "Renault");

console.log(cars1);
console.log(cars2);

console.log("Mis dos marcas de autos favoritas son: " + cars2 [0] + " y " + cars1[2]);

var nuevosNombres = cars1.pop();
console.log(nuevosNombres);
console.log(cars1);

var equipo = new Array ("Enersto Alonso", "Ernesto Díaz", "Fernando", "Miryam", "Lupita", "Ulises", "Luis", "Arturo");

console.log(equipo);

function agregaAlInicio(){
    equipo.unshift("Luis");
}
agregaAlInicio();

console.log(equipo);

function agregaAlFinal(){
    equipo.push("Dany");
}
agregaAlFinal();

console.log(equipo);

function eliminaFinal(){
    equipo.pop();
}
eliminaFinal();

console.log(equipo);

function eliminaInicio(){
    equipo.shift();
}
eliminaInicio();

console.log(equipo);

var ultima = equipo[equipo.length-1]
console.log(ultima);

let frutas = ["Manzana", "Banana"]
frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})

//Eliminamos los elementos indicados entre intervalos o índices
let nombres = ["Adrian", "Michale", "Regina", "Ernesto", "Carolina"]

nombres.splice(1,2)
console.log(nombres);

// ["Manzana", "Banana", "Fresa"]
//let elementoEliminado = frutas.splice(pos, 1)
// ["Manzana", "Fresa"]


//Splice
var equipo = new Array ("Enersto Alonso", "Ernesto Díaz", "Fernando", "Miryam", "Lupita", "Ulises", "Luis", "Arturo");

equipo.splice(1,3);
equipo.splice(2,2);

console.log(equipo);

//["Repollo", "Zanahoria"]
//let copiaArray = vegetales.slice();
//["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"

//relacion entre lenght y propiedades numericas
let arreglo =[]
console.log(arreglo);
arreglo.push("Elemento1","Elemento2", "Elemento3", "Elemento4", "Elemento5")

console.log(arreglo);
console.log(arreglo.lenght);

arreglo[6]="Elemento7";
console.log(Object.keys(arreglo));
console.log(arreglo);
console.log(arreglo.length);
arreglo.length = 10;
console.log(arreglo.lenght)

arreglo.length=3;
console.log(arreglo);
console.log(arreglo.lenght);

var arreglo2 = [arreglo.length=7];
console.log(arreglo);
console.log(arreglo.lenght);

//arreglos multidimensionales
/*
var elementos = ["Carbono", "Oxígeno", "Hierro"];
var simbolo = ["C","O","Fe"];
var num_atomico=[6,8,26];
var tabla_per=[elementos, simbolo, num_atomico];
console.log(tabla_per);
*/

/*
var tabla_per=[["Carbono", "Oxígeno", "Hierro"], ["C","O","Fe"], [6,8,26]];
console.log(`El ${tabla_per[0][0]} tiene como simbolo la letra ${tabla_per[1][0]} y su número atómico es ${tabla_per[2][0]}`);
*/

/*
var tabla_per=[["Sofía","Aguilar"],["carbono","Oxígeno","Hierro"],["C","O","Fe"],[6,8,26]];

console.log(`El ${tabla_per[1][3]} tiene como simbolo la letra ${tabla_per[2][3]} y su número atómico es ${tabla_per[3][3]}`);
*/


/*
const armando = [
    [["Manzana","Piña","Sandía"],["Jitomate","Lechuga"],["Gryffindor","Hufflepuff","Slytheryn","Ravenclaw"],["Lentes"]],["Cubone","Rayquaza","Charizard"],
    [["Sonriente"],["Felíz"],["Triste"],["Sonrojado"],["Entusiasmado"],["Juguetón"]],
    ["Vegetitta","Kokun"]];

//EL jitomate color Charizard se ve sonriente porque vió a vegettita

console.log(`El ${armando[0][1][0]} color ${armando[1][2]} se ve ${armando[2][0]} porque vió a ${armando[3][0]}`);

*/


/*
// Ciclo For expresion inicial, Condicion, Expresion final, setencia.

for(var i = 0; i <= 15; i+=3){
    n = 0;
    n +=i;
    console.log(n);
}

//For anidado

for(let num2 = 0; num2<=5; num2++)
{
    for(let num1 = 4;num1<=5;num1++){
        console.log(num2+ "" + num1);
    }
}




//While
var n=0;
var x=0;

while(n<4){
    n++;
    x= x + n;
    console.log(x);
}
*/

var z=0
while(z++ < 50)
{
    for(let m =0; m<25; m++){
        console.log(m);
    }
    console.log(z);
}


//OPERADOR TERNARIO funciona igual que un if else pero no se puede anidar
 var edad = 17;
 var permiso = "Si";

 /*
 if(edad >=18){
     console.log("Eres mayo de edad");
 }else{
     console.log("Eres menor de edad");
 }
*/

 //edad >= 18 ? console.log("Eres mayor de edad") : "Eres mayor de edad";

 //ejemplo 2
 var cond1 = 17;
 var cond2 = "Sofi"
 
 console.log(cond1 >= 18 ? cond2=="sofi"? "Si es sofi": "No es sofi" : cond2=="sofi"? "Es su tocaya": "No se quien es");
 
