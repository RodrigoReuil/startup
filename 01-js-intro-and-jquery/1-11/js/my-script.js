$(document).ready( function() {
	/* point 1.5 ; 1.6 */
	$("#my-div-hidden").fadeOut(1700).hide(700, function(){
		$("#my-textarea").focus();
	});
	/* point 1.6 */
	$("#my-textarea").addClass("alias");
});

function clearTexarea() {
	$("#my-textarea").val("");
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
		
		var AlbunImg, AlbunName, AlbunType ,AlbunSpoti;
		var createTable = '<table id="list_albun" class="display">';
			createTable += '<tr>';
			createTable += '<th><b>Image Albun</b></th><th><b>Albun Name</b></th><th><b>Type</b></th><th><b>Link Of Spotifi</b></th>';
			createTable += '</tr>';
			tr = '';

		$.each(data.albums.items, function (linktext, link) {
			console.log("busco ARRAY 1: "+ linktext);
			console.log(link);
			console.log("****************************************");
			$.each(link, function(linktext2, link2){
				console.log("obtengo ´external_urls.spotify´, name, album_type, y recorro (images): "+ linktext2);
				console.log(link2);
				console.log("----------------------------------------");
				if( linktext2 == "images" ) {
					$.each(link2, function(linktext3, link3){
						if(linktext3 == "2"){
							console.log("Guardar la ref a la img: (elijo la de tamaño mas chico) "+link3);
							AlbunImg = link3.url;
						}
						console.log("imgenes: "+ linktext3);
						console.log(link3);
						console.log("++++++++++++++++++++++++++++++++++++++++");
					});
				}
				if( linktext2 == "name" ) {
					console.log("GUARDE el nombre del albun");
					AlbunName = link2;
				}
				if( linktext2 == "album_type" ) {
					console.log("GUARDE el typo de ajax");
					AlbunType = link2;
				}
				if( linktext2 == "external_urls" ) {
					console.log("GUARDE href spotify");
					AlbunSpoti = link2.spotify;
				}
			});
			// armo la FILA de la tabla
			tr += '<tr>';
			tr += '<td><img src="'+AlbunImg+'"/></td><td>'+AlbunName+'</td><td>'+AlbunType+'</td><td><a href="'+AlbunSpoti+'" target="_blank">'+AlbunSpoti+'</a></td>';
			tr += '</tr>';
		});
		// cierro la tabla
		createTable += tr;
		createTable += '</table>';
		$('#my-table-show-info').html( createTable );
	}).error(function( jqxhr, textStatus, error ) {
		console.log("jqxhr: "+jqxhr+ "\ntextStatus: " + textStatus + "\nerror: " + error);
	});
}