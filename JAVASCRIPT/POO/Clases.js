/*class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    //Getter
    get area(){
        return this.calcArea();
    }
    
    //Method
    calcArea (){
        return this.height * this.width;
    }
}

const square = new Rectangle(10,10);
const rectangle = new Rectangle (20,30);
const rectangle2 = new Rectangle (25,15);

console.log(square.area);
console.log(rectangle.area);
console.log(rectangle2.area);
*/

class persona {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

const personal1 = new persona("Guillermo",1987);
const personal1 = new persona("Ángeles",2000);

console.log(persona1);
console.log(persona2);

document.getElementById("ID").innerHTML=persona1.name;
document.getElementById("ID").innerHTML=persona2.name;


var objeto = {
    name = "Guillermo",
    year = 1987
}