 var carreritas = ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];

 console.log(carreritas);
//Andrea adelanta a María
 carreritas.splice(2,1, "Andrea");
 carreritas.splice(3,1, "María");
 carreritas.splice(4,1, "Jesús");
 console.log(carreritas);
//José es descalificado de la carrera
 carreritas.pop();
 console.log(carreritas);
//Detras de Lucía y antes de Roberto se Clasifican tres nuevos corredores
 carreritas.unshift("Cristóbal", "Fernanda", "Armando");
 carreritas.splice(0,1, "Lucía");
 carreritas.splice(1,1, "Cristóbal");
 carreritas.splice(2,1, "Fernanda");
 carreritas.splice(3,1, "Armando");
 console.log(carreritas);
//Hay un nuevo concursante en primer Lugar
 carreritas.unshift("Federico");
 console.log(carreritas);

