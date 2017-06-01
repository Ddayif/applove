/*
 * Archivo principal de funcionalidad de JS
 */

 (function imagenes(){
 	var boxes = Array.from(document.getElementsByClassName("col-4"));
 	var modal = document.getElementById("container");
	var bodyModal, close, img;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			alert("Hola Mundo");
		})
	})
})()