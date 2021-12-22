const numeros = [1,2,3,4,5];
console.log(numeros);

const misNumeros = new Array(16,17,18,19);
console.log(misNumeros);

const colores = ["Rojo", "Verde", "Azul", "Amarillo"];

conosole.log(colores);

//areglos combinados

const combinado = ["Hola", 34, true, null, undefined, {Nombre: "Miryam", Apellido: "Hurtado"}, new date]

console.log(combinado);

let valor;
valor = numeros.lenght
console.log(valor);

valor = Array.isArray(misNumeros);
console.log(valor);

//Obtener valor del arreglo

valor = colores [2];
console.log(valor);

//Insertar valor a un arreglo
colores [2] = "Morado";
console.log(colores);

//conocer la posicion de un elemento dentro de mi arreglo

valor = colores.indexOf("Morado");
console.log(valor);

//añadir valores al final
colores.push("Magenta");
console.log(colores);


//añadir valores al inicio
colores.unshift("Cerulio");
console.log(colores);

//Eliminar el ultimo elemento
colores.pop();
console.log(colores);

//Eliminar el primer elemento
colores.shift();
console.log(colores);

//Extraer conjunto de valores de un arreglo
numeros.splice(1,3);
conosole.log(numeros);

//concatenar arreglos
valores = misNumeros.concat(numeros);
console.log(valores);

valor = colores.sort();
console.log(valor);

valor = valores.sort();
console.log(valor);

//descendente
valor = valores.sort(function(x,y){
    return x-y
});
console.log(valor);

//ascendente
valor = valores.sort(function(x,y){
    return y-x
});
console.log(valor);