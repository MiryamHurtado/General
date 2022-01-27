//var arreglo = ["Guillermo","Chang", 34];
//console.log(arreglo);

/*
let objeto = {
    nombre: "Guillermo",
    apellido: "Chang",
    edad: 34,
    nombreCompleto: function(){
        return this.nombre + ""+ this.apellido;
    }
}

console.log(objeto.nombreCompleto);

docuemnt.getElementById("boquita").innerHTML = objeto.nombreCompleto();

//let objeto = {
    nombre: "Ulises",
    apellido: {    
      paterno:"Portuguez",    
      materno:"Gordillo" },
    edad: 34,
    nombreCompleto: function () {
      return this.nombre + " " + this.apellido.paterno
    }
    
  }
  
  document.getElementById("boquita").innerHTML = objeto.nombreCompleto();
*/
  
//Definan 2 objetos para modelar el proceso de compra de una plataforma de comercio electrónico:

let articulo = {
nombre: "Dona",
descripción: "Chocolate con chispas gluten free",
precio: 50,
cantidad: 5,
fotografia: "https://www.nestleprofessional.com.mx/sites/default/files/styles/recipe/public/media/mini_donas_crunch.jpg?itok=xmWJdmGc"
}

let venta = { 
productos: {
    pan: "Dona"
},
total: articulo.cantidad * articulo.precio,
idCliente: 1515,
emailCliente: "idcliente1515@gmail.com"
}


//console.log("Adquirió "+ articulo.cantidad + " "+articulo.nombre + " vendida a cliente no. "+ venta.idCliente + " total a pagar "+ venta.total);


console.log("Adquirió "+ articulo.cantidad + " "+articulo.nombre + " vendida a cliente no. "+ venta.idCliente + " total a pagar "+ venta.total)
