alert("Este programa te dice si eres apto para el bootcamp");

Nombre = prompt("¿Cuál es tu nombre?");
 Edad = parseInt(prompt("¿Ingresa tu edad?"));

 alert("Hola " + Nombre);

if (Edad>=18&&Edad<=29){
    alert("¡Felicidades, cumples con los requisitos para ser aceptado en el Bootcamp Java Full Stack de Generation!");
}else if(Edad<18||Edad>=29){
    alert("No cumple con los requisitos para el programa.");
}else if(Edad>=0&&Edad<100){
    alert("Valor no reconocido");
}else{
    alert("Valor no reconocido");
}

console.log(Nombre);
console.log(Edad);
