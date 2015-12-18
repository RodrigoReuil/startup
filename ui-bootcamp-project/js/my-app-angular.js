var WoWApp = angular.module('WoWApp', []);

WoWApp.controller('RealmlCtrl',  function ($scope, $http) {
	//La url devuelve toda la lista de reinos y sus estados, con la KEY generada
	$http.get("https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=knzbdtq5sddeymr5bzgzsustwq3d2cyz").success(function(data) {
		$scope.realms = data.realms;
	});

	//Asigno los sig valores para q no aparezca truo o false
	$scope.realmsStatus = function(status) {
		return ((status) ? 'ACTIVE' : 'INACTIVE');
	};
});

WoWApp.controller('PlayerCtrl',  function ($scope, $http) {
	//dejo pre fijado un jugador correspondiente a un reino
	$scope.playerRealmName = "Blackrock";
	$scope.playerName = "Darckli";
	
	$scope.getPlayer = function(){
		//La url devuelve toda la info del jugador, con la KEY generada
		$http.get("https://us.api.battle.net/wow/character/"+$scope.playerRealmName+"/"+$scope.playerName+"?locale=en_US&apikey=knzbdtq5sddeymr5bzgzsustwq3d2cyz").success(function(dataPlayer) {
			$scope.player = dataPlayer;
		});
		
		$http.get("https://us.api.battle.net/wow/data/character/classes?locale=en_US&apikey=knzbdtq5sddeymr5bzgzsustwq3d2cyz").success(function(dataClasses) {
			$scope.Classes = dataClasses.classes;
		});
		
		$http.get("https://us.api.battle.net/wow/data/character/races?locale=en_US&apikey=knzbdtq5sddeymr5bzgzsustwq3d2cyz").success(function(dataRaces) {
			$scope.Races = dataRaces.races;
		});

		//Busco las clases y le asigno el valor
		$scope.playerClass = function(theClass) {
			var name;
			//console.log("ing: "+theClass);
			//console.log("ing: "+$scope.Classes[2].name);
			//console.log($scope.Classes[theClass].id);
			for (i = 0; i < $scope.Classes.length; i++) {
				if($scope.Classes[i].id == theClass) {
					name = $scope.Classes[i].name;
				}
			}
			return name;
		};

		//Busco las raza y le asigno el valor
		$scope.playerRace = function(theRace) {
			var name;
			for (i = 0; i < $scope.Races.length; i++) {
				if($scope.Races[i].id == theRace) {
					name = $scope.Races[i].name;
				}
			}
			return name;
		};

		//Asigno los sig valores para q no aparezca truo o false
		$scope.playerGender = function(theGender) {
			return ((theGender) ? 'Female' : 'Male');
		};
	}
});

WoWApp.controller('GuildCtrl',  function ($scope, $http) {
	//dejo pre fijado un gremio correspondiente a un reino
	$scope.guildRealmName = "Blackrock";
	$scope.guildName = "Defenestrate";
	
	$scope.getGuild = function(){
		//La url devuelve toda la info del jugador, con la KEY generada
		$http.get("https://us.api.battle.net/wow/guild/"+$scope.guildRealmName+"/"+$scope.guildName+"?fields=members&locale=en_US&apikey=knzbdtq5sddeymr5bzgzsustwq3d2cyz").success(function(dataGuild) {
			$scope.guilds = dataGuild;
		});
		
		$http.get("https://us.api.battle.net/wow/data/character/classes?locale=en_US&apikey=knzbdtq5sddeymr5bzgzsustwq3d2cyz").success(function(dataClasses) {
			$scope.Classes = dataClasses.classes;
		});
		
		$http.get("https://us.api.battle.net/wow/data/character/races?locale=en_US&apikey=knzbdtq5sddeymr5bzgzsustwq3d2cyz").success(function(dataRaces) {
			$scope.Races = dataRaces.races;
		});

		//Busco las clases y le asigno el valor
		$scope.guildClass = function(theClass) {
			var name;
			for (i = 0; i < $scope.Classes.length; i++) {
				if($scope.Classes[i].id == theClass) {
					name = $scope.Classes[i].name;
				}
			}
			return name;
		};

		//Busco las raza y le asigno el valor
		$scope.guildRace = function(theRace) {
			var name;
			for (i = 0; i < $scope.Races.length; i++) {
				if($scope.Races[i].id == theRace) {
					name = $scope.Races[i].name;
				}
			}
			return name;
		};
	}
});