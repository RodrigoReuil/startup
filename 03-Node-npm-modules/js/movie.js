var Movie = function() {
	this.map = [];
}

Movie.prototype.play = function() {
	//si tiene valor la variable lo muestro
	if ( this.map.title ) {
		console.log("Playing the movie: " + this.map.title);
	} else {
		console.log("The movie does´t exist");
	}
}

Movie.prototype.stop = function() {
	if ( this.map.title ) {
		console.log("Stopped the movie: " + this.map.title);
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

module.exports = Movie;
