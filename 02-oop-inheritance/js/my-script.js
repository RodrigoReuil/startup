//se crean los eventos con el constructor de eventos, para play y stop
var eventPlay = new Event('buildPlay');
var eventStop = new Event('buildStop');

/***************	INICIO MOVIE	*/
var Movie = function() {
	this.map = [];
}

Movie.prototype.play = function() {
	//si tiene valor la variable lo muestro
	if ( this.map.title ) {
		console.log("Playing the movie: " + this.map.title);
		//se dispara el evento
		document.dispatchEvent(eventPlay);
	} else {
		console.log("The movie does´t exist");
	}
}

Movie.prototype.stop = function() {
	if ( this.map.title ) {
		console.log("Stopped the movie: " + this.map.title);
		//se dispara el evento
		document.dispatchEvent(eventStop);
	} else {
		console.log("The movie does´t exist");
	}
}

Movie.prototype.set = function(key, value) {
	this.map[key] = value;	// agrega a item
}

Movie.prototype.get = function(key) {
	if(key in this.map){	// chequea item
		return console.log(this.map[key]);
	}
	return console.log("The movie does´t exist");
}
/***************	FIN MOVIE	*/

/***************	INICIO MovieObserver	*/
var MovieObserver = function() {
}

MovieObserver.prototype.playing =  function () {
	// Escucha el evento.
	document.addEventListener("buildPlay", function (e){
		// e.target matches document from above
		console.log("It was called to the event ¨Playing¨ of MovieObserver");
	}, false);
}

MovieObserver.prototype.stopped =  function () {
    document.addEventListener("buildStop", function(e){
		console.log("It was called to the event ¨Stopped¨ of MovieObserver");
	}, false);
}
/***************	FIN MovieObserver	*/

/***************	INICIO DownloadableMovie	*/
//se crea un nuevo objeto con el objeto y propiedades del prototipo especificado.
//Object.create constituye el prototipo del nuevo objeto, mientras que el NEW las propiedades/funciones declaradas no forman el prototipo.
var DownloadableMovie = Object.create(Movie);

//Agrego el metodo "download"
DownloadableMovie.prototype.download = function() {
	if (this.map.title) {
		console.log("Downloading: " + this.map.title);
	} else {
		console.log("Nothing to download");
	}
}
/***************	FIN DownloadableMovie	*/

/***************	INICIO Social	*/
var Social = Object.create(Movie);

Social.prototype.share = function(value) {
	if ( this.map.title ) {
		console.log("Sharing the movie " + this.map.title + ", with: " + value);
	} else {
		console.log("There is nothing to share");
	}
}

Social.prototype.like = function() {
	if ( this.map.title ) {
		console.log("This movie ( " + this.map.title + " ) I like");
	} else {
		console.log("There is a 'like' in the deep space");
	}
}
/***************	FIN Social	*/

function GetMovie() {
	var mo = new MovieObserver();
	mo.playing();
	mo.stopped();
	
	console.log("************************");
	var film = new Movie();
	film.set("title","terminator");
	//film.get("title");	//chequear pelicula inexistente
	film.play();
	film.stop();
	film.download();
	film.share("Cacho");
	film.like();
	

	console.log("************************");
	var film2 = new Movie();
	film2.set("title","The Matrix");
	film2.play();
	film2.stop();
	film2.download();
	film2.share("Pepe");
	film2.like();
	
	console.log("************************");
	var film3 = new Movie();
	film3.set("","");	//testeo con nada
	film3.play();
	film3.stop();
	film3.download();
	film3.share("Matias");
	film3.like();
}
