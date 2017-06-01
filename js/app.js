/*
 * Archivo principal de funcionalidad de JS
 */

(function main(){
 	var trabajos = Array.from(document.getElementsByClassName("col-4"));
 	var nuevoDiv = document.getElementById("box-modal");
 	var mostrar, cerrar, img;
 	
 	trabajos.forEach(function(el){// recorremos cada elemento de la varible la que contiene nustras imagenes
 		el.addEventListener("click", function(){
 			nuevoDiv.innerHTML = "";

 			mostrar = document.createElement("div");//crea un nuevo div dentro del ya existente
 			mostrar.classList.add("modal");
 			mostrar.innerHTML= el.innerHTML;// pega la clase encima del div vacio

 			nuevoDiv.appendChild(mostrar);// le damos a la variable mostrar un hijo que seria nuevoDiv
 			nuevoDiv.classList.remove("hide");

			
 			cerrar = document.createElement("div");// crea un nuevo div al que se le da como clase equis
 			cerrar.classList.add("equis");
 			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");// da un atributo a img que seria mi equis
			cerrar.appendChild(img)

			mostrar.appendChild(cerrar);

			cerrar.addEventListener("click", function(){
			nuevoDiv.classList.add("hide");
			});
 			
 		});
 	});

 })()