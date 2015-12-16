angular.module('movieApp', []).controller('movieAppController',['$scope',function($scope){
	//creo la lista q persistira los datos en el navegador
	$scope.myMovies = JSON.parse(localStorage.getItem('myMovies')) || [];
	$scope.$watch('myMovies', function(newValue, oldValue){
		if(newValue!=oldValue) {
			localStorage.setItem('myMovies',JSON.stringify(newValue));
		}
	}, true);

	$scope.theMovie = {};

	$scope.load = function() {
		$scope.myMovies =  [{name:'Iron Man',desc:'the best character of marvel'},
							{name:'The Avengers',desc:'Epic movie!'},
							{name:'Wolverine Origins',desc:'The best mutant'},
							{name:'Terminator Genesis',desc:'I want to be t800'},
							{name:'Saw',desc:'I need moore blood'},
							{name:'300',desc:'This is sparta'},
							{name:'The Matrix',desc:'I love it'}
		];
	}

	$scope.addMovie = function() {
		$scope.myMovies.push({"name":$scope.enteredName, "desc": $scope.enteredDesc});
		$scope.enteredName = '';	//borro contenidos
		$scope.enteredDesc = '';
	}

	$scope.removeMovie = function(movie) {
		//lugar del array
		var i = $scope.myMovies.indexOf(movie);
		console.log("removeMovie index: "+i)
		$scope.myMovies.splice(i, 1);
	}

	$scope.printInfo = function(movie) {
		console.log("printInfo index: "+$scope.myMovies.indexOf(movie));
		$scope.theMovie = movie;
		//document.getElementById("movieText").value = movie.name;
		//document.getElementById("descText").value = movie.desc;
		$scope.txtName = movie.name;
		$scope.txtDesc = movie.desc;
	}

	$scope.editMovie = function(movie) {
		console.log("editMovie index: "+$scope.myMovies.indexOf(movie));
		console.log("ver theMovie.txtName: "+movie.name);
		console.log("ver theMovie.txtDesc: "+movie.desc);
		$scope.theMovie = {};	//guarda
		$scope.txtName = '';	//borro contenidos
		$scope.txtDesc = '';
		alert("Edited Movie!");
	};
}]);