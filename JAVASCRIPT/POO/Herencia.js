Let apellido=prompt("¿Cuál es el apellido?");
let nombreHijo1=prompt("Nombre hijo 1");
let nombreHijo2=prompt("nombre hijo 2");
class padre {
    constructor(apellido) {
      this.apellidoPadre = apellido;
    }
  }
  
  class hijo extends padre {
    constructor(nombre, apellido) {
      super(apellido);
      this.nombreHijo = nombre;
    }
  
    registro() {
      return (
        "El nombre del hijo será: " + this.nombreHijo + " " + this.apellidoPadre);
    }
  }
  
  let Hijo1 = new hijo(nombreHijo1 , apellido);
  let Hijo2 = new hijo(nombreHijo2, apellido);
  
  document.getElementById("Id").innerHTML = Hijo1.registro();
  document.getElementById("Id2").innerHTML = Hijo2.registro();
  