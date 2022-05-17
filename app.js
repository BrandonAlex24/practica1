if (navigator.serviceWorker) {
	navigator.serviceWorker.register("https://brandonalex24.github.io/practica1/sw.js");
}
$(document).ready(function(){
	console.log("JQuery funcionando...");
	$('#linkPractica1').click(function(){
        console.log("Presiono link Practica1");
        location.href = "../Practica1/index.html";
    })

    $('#linkPractica2').click(function(){
        console.log("Presiono link Practica2");
        location.href = "../Practica2/index.html";
    })

    $('#linkPractica3').click(function(){
        console.log("Presiono link Practica3");
		location.href = "../Practica3/index.html";
    })

	$("#body").css("background-color", "#e5e5f7");
    $("#body").css("opacity", "0.8");
	$("#body").css("background", "linear-gradient(135deg, #444cf755 25%, transparent 25%) -10px 0/ 20px 20px,linear-gradient(225deg, #444cf7 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #444cf755 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%) 0px 0/ 20px 20px");
	$.ajax({
		url: "db_functions.php",
		type: "POST",
		data:{"read_db":"true"},
		datatype: "json",
		success: function(response){
			console.log(response);
			var json = JSON.parse(response);
			if(json.led1 == 0){
				console.log("led1 = off");
				$('#btn1').removeClass("btn-success");
				$('#btn1').addClass("btn-secondary");
				$('#btn1').html("Led1 - On");
			}else{
				console.log("led1 = on");
				$('#btn1').removeClass("btn-secondary");
				$('#btn1').addClass("btn-success");
				$('#btn1').html("Led1 - Off");
			}
			if(json.led2 == 0){
				console.log("led2 = off");
				$('#btn2').removeClass("btn-success");
				$('#btn2').addClass("btn-secondary");
				$('#btn2').html("Led2 - On");
			}else{
				console.log("led2 = on");
				$('#btn2').removeClass("btn-secondary");
				$('#btn2').addClass("btn-success");
				$('#btn2').html("Led2 - Off");
			}
			if(json.led3 == 0){
				console.log("led3 = off");
				$('#btn3').removeClass("btn-success");
				$('#btn3').addClass("btn-secondary");
				$('#btn3').html("Led3 - On");
			}else{
				console.log("led3 = on");
				$('#btn3').removeClass("btn-secondary");
				$('#btn3').addClass("btn-success");
				$('#btn3').html("Led3 - Off");
			}
			if(json.led4 == 0){
				console.log("led4 = off");
				$('#btn4').removeClass("btn-success");
				$('#btn4').addClass("btn-secondary");
				$('#btn4').html("Led4 - On");
			}else{
				console.log("led4 = on");
				$('#btn4').removeClass("btn-secondary");
				$('#btn4').addClass("btn-success");
				$('#btn4').html("Led4 - Off");
			}
		}
	});

	$('#btn1').click(function(){
		console.log("presionó el boton 1");
		if($('#btn1').html("Led1 - Off")){
			console.log("el boton 1 esta en off");
			$.ajax({
			url: "db_functions.php",
			type: "POST",
			data:{"update_db":"true","led":"1","value":"1"},
			datatype: "json",
			success: function(response){
					console.log(response);
				}
			});
		}else{
			console.log("el boton 1 esta en on");
			$.ajax({
			url: "db_functions.php",
			type: "POST",
			data:{"update_db":"true","led":"1","value":"0"},
			datatype: "json",
			success: function(response){
					console.log(response);
				}
			});
		}
	});

	$('#btn2').click(function(){
		console.log("presionó el boton 2");
		if($('#btn2').html("Led2 - Off")){
			console.log("el boton 2 esta en off");
			$.ajax({
			url: "db_functions.php",
			type: "POST",
			data:{"update_db":"true","led":"2","value":"1"},
			datatype: "json",
			success: function(response){
					console.log(response);
				}
			});
		}else{
			console.log("el boton 2 esta en on");
			$.ajax({
			url: "db_functions.php",
			type: "POST",
			data:{"update_db":"true","led":"2","value":"0"},
			datatype: "json",
			success: function(response){
					console.log(response);
				}
			});
		}
	});

	$('#btn3').click(function(){
		console.log("presionó el boton 3");
		if($('#btn3').html("Led3 - Off")){
			console.log("el boton 3 esta en off");
			$.ajax({
			url: "db_functions.php",
			type: "POST",
			data:{"update_db":"true","led":"3","value":"1"},
			datatype: "json",
			success: function(response){
					console.log(response);
				}
			});
		}else{
			console.log("el boton 3 esta en on");
			$.ajax({
			url: "db_functions.php",
			type: "POST",
			data:{"update_db":"true","led":"3","value":"0"},
			datatype: "json",
			success: function(response){
					console.log(response);
				}
			});
		}
	});

	$('#btn4').click(function(){
		console.log("presionó el boton 4");
		if($('#btn4').html("Led4 - Off")){
			console.log("el boton 4 esta en off");
			$.ajax({
			url: "db_functions.php",
			type: "POST",
			data:{"update_db":"true","led":"4","value":"1"},
			datatype: "json",
			success: function(response){
					console.log(response);
				}
			});
		}else{
			console.log("el boton 4 esta en on");
			$.ajax({
			url: "db_functions.php",
			type: "POST",
			data:{"update_db":"true","led":"4","value":"0"},
			datatype: "json",
			success: function(response){
					console.log(response);
				}
			});
		}
	});

});
