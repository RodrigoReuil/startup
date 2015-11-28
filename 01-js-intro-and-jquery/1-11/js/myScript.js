$(document).ready( function() {
	/* point 1.5 ; 1.6 */
	$("#myDivHidden").delay(1500).hide(700, function(){
		$("#myTextarea").focus();
	});
	/* point 1.6 */
	$("#myTextarea").addClass("alias");
});

function clearTexarea() {
	document.getElementById("myTextarea").value = "";
}

/* point 1.7 */
function httpGet() {
	//http://bootcamp.aws.af.cm/welcome/yourname
	$.ajax({
		type: "GET",
		url: "http://bootcamp.aws.af.cm/welcome/yourname",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		// point 1.8
		success: function (msg) {
			$.each(msg, function(i, field){
				// point 1.10
				$("#myTextarea").val((field).replace("yourname", "RODRIGO"));
			});
		},
		error: function (jqxhr, textStatus, error) {
			console.log("jqxhr: "+jqxhr+ "\ntextStatus: " + textStatus + "\nerror: " + error);
			// point 1.9
			$("#myTextarea").css('color', 'red');
			document.getElementById("myTextarea").value = "Error en la URL. " + error;
		}
	});
}

/* point 1.11 */
function httpGetAlbums() {
	//este me lo paso un compañero, se vaso con este link (xq esta mas reducido)
	//https://api.spotify.com/v1/search?q=Rolling%20Stones&type=album&market=US
	
	//este seria el q iria del apartado, pero si el de arriba lo paso este chico y no dijo nada raro, juega el de arriba
	//https://api.spotify.com/v1/search?q=Rolling%20Stones&type=album
	$.getJSON("https://api.spotify.com/v1/search?q=Rolling%20Stones&type=album").done(function(data){
		console.log(data);
		$.each(data, function (linktext, link) {
			console.log("busco ARRAY 1: "+ linktext);
			console.log(link);
			console.log("**************************************************************************");
				$.each(link, function(linktext2, link2){
					console.log("busco ARRAY 2 (items): "+ linktext2);
					console.log(link2);
					console.log("------------------------------------------------------------------------");
					if( linktext2 == "items" ) {
						$.each(link2, function(linktext3, link3){
							console.log("recorro los ARRAY de items: "+ linktext3);
							console.log(link3);
							console.log("++++++++++++++++++++++++++++++++++++++++++");
							$.each(link3, function(linktext4, link4){
								console.log("busco ARRAY 4 (external_urls) y (images): "+ linktext4);
								console.log(link4);
								console.log("/////////////////");
								if( linktext4 == "external_urls" ) {
									$.each(link4, function(linktext5, link5){
										console.log("Guardar dato del spotifi: ultimo external_urls: "+ linktext5);
										console.log(link5);
										$("#myDivSpotify").append(link5+"<br>");	//spotify
										console.log("-.-.-.-.-.-.");
									});
								}
								if( linktext4 == "images" ) {
									$.each(link4, function(linktext5, link5){
										console.log("ultimo img: "+ linktext5);
										console.log(link5);
										if(linktext5 == "2"){
											console.log("Guardar la ref a la img: ultima img: (elijo la de tamaño mas chico) "+link5);
											$("#myDivImages").append("<img src='"+link5.url+"'/><br>");	//spotify											
										}
										console.log("-.-.-.-.-.-.");
									});
								}
								if( linktext4 == "name" ) {
									$("#myDivAlbunName").append(link4+"<br>");	//spotify
								}
								if( linktext4 == "type" ) {
									$("#myDivType").append(link4+"<br>");	//spotify
								}
							});
						});
					}
				});
		});
	}).error(function( jqxhr, textStatus, error ) {
		console.log("jqxhr: "+jqxhr+ "\ntextStatus: " + textStatus + "\nerror: " + error);
	});
}


	/*
//	distintas pruebas
	$.ajax({
		type: "POST",
		url: "http://bootcamp.aws.af.cm/welcome/yourname",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		success: function (msg) {
			//var json = $.parseJSON(msg);
			$.each(json, function(i, field){
				$("#myDivAlbun").append(field);
			});
			//$("#myDivAlbun").append(json);

		},
		error: function (jqxhr, textStatus, error) {
			//console.log("jqxhr: "+jqxhr+ "\ntextStatus: " + textStatus + "\nerror: " + error);
			$("#myDivAlbun").css('color', 'red');
			$("#myDivAlbun").append(error);
			//document.getElementById("#myDivAlbun").value = "Error en la URL. " + error;
		}
	});*/
	/*$.getJSON("https://api.spotify.com/v1/search?q=Rolling%20Stones&type=album&market=US", function(data){
		$.each(data, function (linktext, link) {
			console.log(linktext);
			console.log(link);
		});
	});*/
