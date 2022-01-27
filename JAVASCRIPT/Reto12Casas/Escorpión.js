var máximo = 1
var mínimo = 10 
var num = Math.floor(Math.random() * ((máximo+1) - mínimo) + mínimo);
//Ejemplo:
var num = Math.floor((Math.random() * (11-5))+5);
//num es ahora un número entre 5 y 10, ambos incluidos.

console.log(num);



do {
    usuario();

 } while (number != 0);
 
function usuario() {
    number = parseInt(prompt("¡La gran batalla decisiva del Santuario! Hyoga de Cisne ¿Cuál es el número para elevar tu 7mo sentido (1 - 10) para derrotar a Milo de Escorpio? Escribe 0 para terminar el programa"));
    if (number > num){
        alert("El numero es mayor, Milo a esquivado tu ataque");
    }else if(number < num){
        alert("El numero es menor, Milo a contraatacado!");
    }else if(number == num){
        alert("El numero es igual al numéro mágico haz derrotado a Milo!");
    }else{
        alert("El dato no es valido");
    }
};
