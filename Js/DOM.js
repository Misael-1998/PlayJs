//Accediendo al dom mediante id
var h1 = document.getElementById("titulo");
h1.innerHTML = "Hola soy un nuevo texto";

h1.style.color = "red";
h1.style.background = "blue";

var parrafo = document.getElementById("parrafo");
//Evento Onclick
var boton = document.getElementById("boton");
// boton.onclick = function(){
// parrafo.style.color ="olive";
// }
//Segunda forma de crear una funcion
// function cambiar()
// {
//     parrafo.style.color ="green";
// }

// boton.onclick = cambiar;

//Accediendo al dom mediante clases
//Aqui accedemos a los parrafos que tienen la clase lead en este caso son 2 parrafos
// si creamos un console.log(parrafo); este nos selecciona los 2 parrafos 
//Pero si queremos que nos selccione solo uno solo se le agrega la posicion console.log(parrafo[0]);
//ya que este nos devuelve un arreglo

// var parrafo = document.getElementsByClassName("lead");
// console.log(parrafo[0]); 

//QuerySelector
/**
 * Este podemos asignarle todas las etiquetas que tengamos en nuestro html solo 
 * qeu si deseamos seleccionar todas las etiquetas se debe agregar al querySelectorAll
 */
var parrafo = document.querySelectorAll('p');
console.log(parrafo); 

