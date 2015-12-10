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
