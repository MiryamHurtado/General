/*
var length = 16;

var lastName = "Johnson";

var computadora = {marca:"asus", procesador:"i9", memoria:"16 Gb", grafica:"GTX2060", nucleos:8};

console.log("El tipo de dato de 16 es: "+typeof(length));

console.log("El tipo de dato de Johnson es: "+typeof(lastName));

console.log("El tipo de dato de computadora es: "+typeof(computadora));

console.log("La marca de la computadora es:"+computadora.grafica);

console.log("El número de núcleos de la computadora es de tipo:"+typeof(computadora.nucleos));

*/
/*
var x= 34;
var y = 34.00;

console.log(x);
console.log(y);

var x= "34";
var y = "34.00";

console.log(typeof(x2));
console.log(typeof(y2));

*/
/*
var x = false;

console.log(typeof(x));

//Matrices (estan dentro de la misma categoría)

var pan = ["Cuernito", "Conchita", "Dona"];

console.log(pan[1]);


//Objeto (describe y trabajamos con las características)

var auto = {Marca:"Ford", 
            cilindros:8, 
            transmisión:"automático", 
            tapiz:{
                    color:"beige", 
                    textura:"Fibrosa", 
                    material:"síntetico"}};

var frutas 
console.log(auto.tapiz.color);
*/

var x = 34;

var y = String(x);

console.log(typeof(x));


//toString
var y = x.toString();
console.log(typeof(x));
//toExponential
var x =3.15654654564864844654654
var y = x.toExponential(3);

console.log(y);

//toFixed

var x =3.15654654564864844654654
var y = x.toFixed(3);

console.log(y);

//toPrecision

var x =3.15654654564864844654654
var y = x.toPrecision(3);

console.log(y);

//ValueOf()  devuelve el valor del número

var x = 100 + 23;

var y=x.valueOf();
console.log((y));

//Conversión de variables a números Método number
var x = 123;

var y= Number(x);

console.log((x));
console.log(typeof(x));

console.log((y));
console.log(typeof(y));

//ParseInt

var x=10;
console.log((x));
console.log(typeof(x));

var y= parseInt(x);

console.log((y));
console.log(typeof(y));






