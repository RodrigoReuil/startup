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
		url: "http://bootcamp.af.cm/welcome/yourname",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		success: function (msg) {
			$.each(msg, function(i, field){
				$("#myTextarea").val((field).replace("yourname", "RODRIGO"));
			});
		},
		error: function (jqxhr, textStatus, error) {
			console.log("jqxhr: "+jqxhr+ "\ntextStatus: " + textStatus + "\nerror: " + error);
			$.each(jqxhr, function(i, field){
				//$("#myTextarea").val(field);
				console.log(field);
			});
		}
	});
	/*
		$.getJSON("http://bootcamp.af.cm/welcome/yourname").done(function(result){
			$.each(result, function(i, field){
				$("#myTextarea").val( (field).replace("yourname", "RODRIGO") );
			});
		}).error(function (jqXHR, exception) {
			var msg = '';
			if (jqXHR.status === 0) {
				msg = 'Not connect: Verify Network.';
			} else if (jqXHR.status == 404) {
				msg = 'Requested page not found. [404]';
			} else if (jqXHR.status == 500) {
				msg = 'Internal Server Error [500].';
			} else if (exception === 'parsererror') {
				msg = 'Requested JSON parse failed.';
			} else if (exception === 'timeout') {
				msg = 'Time out error.';
			} else if (exception === 'abort') {
				msg = 'Ajax request aborted.';
			} else {
				msg = 'Uncaught Error.\n' + jqXHR;
			}
			console.log("msg: "+msg);
		});
		*/
}
