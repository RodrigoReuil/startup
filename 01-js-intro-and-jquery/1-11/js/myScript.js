$(document).ready( function() {
	/* point 1.5 ; 1.6 */
	$("#my-div-hidden").fadeOut(1700).hide(700, function(){
		$("#my-textarea").focus();
	});
	/* point 1.6 */
	$("#my-textarea").addClass("alias");
});

function clearTexarea() {
	document.getElementById("my-textarea").value = "";
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
				$("#my-textarea").val((field).replace("yourname", "RODRIGO"));
			});
		},
		error: function (jqxhr, textStatus, error) {
			console.log("jqxhr: "+jqxhr+ "\ntextStatus: " + textStatus + "\nerror: " + error);
			// point 1.9
			$("#my-textarea").css('color', 'red');
			document.getElementById("my-textarea").value = "Error en la URL. " + error;
		}
	});
}

/* point 1.11 */
function httpGetAlbums() {
	//https://api.spotify.com/v1/search?q=Rolling%20Stones&type=album
	$.getJSON("https://api.spotify.com/v1/search?q=Rolling%20Stones&type=album").done(function(data){
		console.log(data);
		
		var AlbunImg, AlbunName, AlbunType ,AlbunSpoti, AlbunDate;
		var createTable = '<table id="list_albun" align="center">';
			createTable += '<tr>';
			createTable += '<th>Image Albun</th><th>Albun Name</th><th>Type</th><th>Link Of Spotifi</th><th>Release Date</th>';
			createTable += '</tr>';
			tr = '';

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
								if( linktext4 == "images" ) {
									$.each(link4, function(linktext5, link5){
										console.log("ultimo img: "+ linktext5);
										console.log(link5);
										if(linktext5 == "2"){
											console.log("Guardar la ref a la img: ultima img: (elijo la de tamaño mas chico) "+link5);
											//$("#myDivImages").append("<img src='"+link5.url+"'/><br>");
											AlbunImg = link5.url;
										}
										console.log("-.-.-.-.-.-.");
									});
								}
								if( linktext4 == "href" ) {
										console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO "+link4);
										$.getJSON(link4).done(function(dataExt){
											console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa "+dataExt.release_date);
											AlbunDate = dataExt.release_date;
										}).error(function( jqxhr, textStatus, error ) {
											console.log("jqxhr: "+jqxhr+ "\ntextStatus: " + textStatus + "\nerror: " + error);
										});
								}
								if( linktext4 == "external_urls" ) {
									//$("#myDivSpotify").append(link5+"<br>");	//spotify
									AlbunSpoti = link4.spotify;
								}
								if( linktext4 == "name" ) {
									//$("#myDivAlbunName").append(link4+"<br>");	//spotify
									AlbunName = link4;
								}
								if( linktext4 == "album_type" ) {
									//$("#myDivType").append(link4+"<br>");	//spotify
									AlbunType = link4;
								}
								
							
							});
							// armo la tabla
							tr += '<tr>';
							tr += '<td><img src="' +AlbunImg+'"/></td><td>'+ AlbunName +'</td><td>'+ AlbunType +'</td><td>'+ AlbunSpoti +'</td><td>'+ AlbunDate +'</td>';
							tr += '</tr>';

						});
					}
				});
				// cierro la tabla
                createTable += tr;
                createTable += '</table>';
                $('#my-table-show-info').html( createTable );
		});
	}).error(function( jqxhr, textStatus, error ) {
		console.log("jqxhr: "+jqxhr+ "\ntextStatus: " + textStatus + "\nerror: " + error);
	});
}
