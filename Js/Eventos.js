var boton = document.getElementById("boton");
var parrafo1 = document.getElementById("parrafo1");
var parrafo2 = document.getElementById("parrafo2");
var parrafo3 = document.getElementById("parrafo3");
// boton.addEventListener('click', function(){
//     console.log('Me diste un click');
// });

//Al dar click en el primer parrafo cambia de color con el evento click
parrafo1.addEventListener('click', function(){
parrafo1.style.color = "blue";
 });

//cuando el mouse pasa por encima del segundo parrafo cambia de color
    parrafo2.addEventListener('mouseover', function(){
    parrafo2.style.color = "red";
    });

//Cuando el mouse se aleje del parrafo 3 cambiara de color
parrafo3.addEventListener('mouseout', function(){
    parrafo3.style.color = "green";
    });