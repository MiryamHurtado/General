//Excersice 1

var line = ["Sofía", "David", "Juan"];
console.log(line);
line.push("Sara","Agustín");
line.shift();
console.log(line);
line.push("Renata");
line.splice(3,1, "Renata");
line.splice(4,1, "Sara");
line.splice(5,1, "Agustín");
console.log(line);
line.push("Elena");
console.log(line);

//Excersice 2

let i = "";j= "";k = "";
for(i=1;i<=6;i++){
    for(j=1;j<=i;j++){
        k = k + ("*");
    }
    console.log(k);
    k="";
}

//Excersice 3
// var xValue = parseInt(prompt("Introduce un valor entero"));
// while (xValue >= 0.5) {
//     xValue = xValue - 0.5;
//     console.log(xValue);
// }

// {
//     let i = 1
//     while (i <= 98) {

//         console.log(i)
//         i += 2
//     }
// }

var n = 6;
var i = 0;
while (i <= 6) {
    console.log(`[${i}]`)
    i++
}

var w = 1;
let m = '';
while (w <= 6) {
    m = m + "[" + w + "]";
    w++;
}
console.log(m)

// {
//     let suma = 0;
//     let n = 21;
//     let i = 0;
//     while (i < n) {
//         i++;
//         suma += i;
//     }
//     console.log(suma);
// }
