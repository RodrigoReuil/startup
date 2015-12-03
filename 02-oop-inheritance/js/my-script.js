/*
4. al registrarse el evento "playing (Movie.play())" como tomar el objeto que lo llamo y mostrar el resultado de la pelicula
*/

function MovieObserver(){
	//necesito tomar la funcion .play cuando se ejecute y anexarle la funcion playing del evento "¿NO SE COMO SE LLAMA?". Ya q los mas comunes (clik...) son para el mouse y yo estoy manejando la consola
	//document.getElementById('film.play()').addEventListener("click", playing);
	//algo asi pieso q seria	Movie.play.addEventListener("load", playing);
	document.getElementById('mybtn1').addEventListener("click", playing);
	document.getElementById('mybtn2').addEventListener("mouseover", stopped);
	function playing(){
	    console.log(this.id+" : mouse-click");
	}
	function stopped(){
	    console.log(this.id+" : mouse-over");
	}
}
window.addEventListener("load", MovieObserver);

function Movie() {
	this.map = {};
	
	this.play = function() {
		console.log("le di play");
	}
	
	this.stop = function() {
		console.log("le di stop");
	}
	
	this.set = function(key, value) {
		this.map[key] = value;	// add a item
	}
	
	this.get = function(key) {
		if(key in this.map){
			return console.log(this.map[key]);
		} else {
			console.log("No existe la pelicula");
		}
		return "";
	}
}

function GetMovie() {

	var film = new Movie();
	film.set("title","terminator");
	film.get("title");
	film.play();

	console.log("************************");
	var film2 = new Movie();
	film2.set("title","The Matrix");
	film2.get("title");
	film2.play();
}
