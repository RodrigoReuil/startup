
/* point 1.11 */
function GetMovie() {

	var Movie = {
		this.map = {};
		
		function play() {
			return 0;
		}
		function stop() {
			return 0;
		}
		function set(key, value) {
			this.map[key] = value;	// add a item
		}
		function get(key) {
			if(key in map){
				console.log("true");
				return map[key];
			} else {
				console.log("false");				
			}

			//this.getTxt = "";
		}
		
		/*
		this.play = "arrancando";
		this.stop = "frenando";
		this.set = "yo";
		this.get = "general";*/
	}

	var film = new Movie;
	film.play();
	/*
	film.set("kk","hary poter");
	film.set("terminator","t800");
	film.set("matrix","neo");
	*/
	film.get("terminator");

/*	
var map = {};
map[key1] = value1;	// add a item
delete map[key1];	// or remove it
key1 in map;		// or determine whether a key exists
*/
	

}