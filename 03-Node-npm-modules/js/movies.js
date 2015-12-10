//movies.js se genero a travez de movie.js y director.js > movies.js, por medio de browserify
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

	var myMovie = require("./movie.js");

	console.log("************************");
	var film = new myMovie();
	film.set("title","Terminator");
	//film.get("title");	//chequear pelicula inexistente
	film.play();
	film.stop();
	film.download();

	console.log("************************");
	var film2 = new myMovie();
	film2.set("title","The Matrix");
	film2.play();
	film2.stop();
	film2.download();

	console.log("************************");
	var film3 = new myMovie();
	film3.set("","");	//testeo con nada
	film3.play();
	film3.stop();
	film3.download();

},{"./movie.js":2}],2:[function(require,module,exports){

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

},{}]},{},[1]);
