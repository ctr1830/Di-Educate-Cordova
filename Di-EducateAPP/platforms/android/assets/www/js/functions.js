
function loadValues(){
	var loginVal=$("#username").val();
	localStorage.setItem("username",loginVal);
	var userid=0
	localStorage.setItem("userid",loginVal);
	var fail=0;
	localStorage.setItem("fail",fail);
	var valor1=undefined;
	localStorage.setItem("valor1",valor1);
	var valor2=undefined;
	localStorage.setItem("valor2",valor2);
	var valor3=undefined;
	localStorage.setItem("valor3",valor3);
	var valor4=undefined;
	localStorage.setItem("valor4",valor4);
	var valor5=undefined;
	localStorage.setItem("valor5",valor5);
	var valor6=undefined;
	localStorage.setItem("valor6",valor6);
	var valor7 = undefined;
	localStorage.setItem("valor7", valor7);
	var valor8 = undefined;
	localStorage.setItem("valor8", valor8);
	var valor9 = undefined;
	localStorage.setItem("valor9", valor9);
	var valor10 = undefined;
	localStorage.setItem("valor10", valor10);
	var valor11 = undefined;
	localStorage.setItem("valor11", valor11);
	var valor12 = undefined;
	localStorage.setItem("valor12", valor12);
	var valor13 = undefined;
	localStorage.setItem("valor13", valor13);
	var valor14 = undefined;
	localStorage.setItem("valor14", valor14);
	var valor15 = undefined;
	localStorage.setItem("valor15", valor15);
	var valor16 = undefined;
	localStorage.setItem("valor16", valor16);
	var array0 = [];
	localStorage.setItem("array0", JSON.stringify(array0));
	var array1 = [];
	localStorage.setItem("array1", JSON.stringify(array1));
	var array2 = [];
	localStorage.setItem("array2", JSON.stringify(array2));
	var escucho1="INCOMPLETO";
	localStorage.setItem("escucho1",escucho1);
	var escucho2="INCOMPLETO";
	localStorage.setItem("escucho2",escucho2);
	var escucho3="INCOMPLETO";
	localStorage.setItem("escucho3",escucho3);
	var leoleo1="INCOMPLETO";
	localStorage.setItem("leoleo1",leoleo1);
	var leoleo2="INCOMPLETO";
	localStorage.setItem("leoleo2",leoleo2);
	var leoleo3="INCOMPLETO";
	localStorage.setItem("leoleo3",leoleo3);
	var juego1="INCOMPLETO";
	localStorage.setItem("juego1",juego1);
	var juego2="INCOMPLETO";
	localStorage.setItem("juego2",juego2);
	var l1=0;
	localStorage.setItem("l1",l1);
	var l2=0;
	localStorage.setItem("l2",l2);
	var l3=0;
	localStorage.setItem("l3",l3);
	var j1=0;
	localStorage.setItem("j1",j1);
	var j2=0;
	localStorage.setItem("j2",j2);
	var e1=0;
	localStorage.setItem("e1",e1);
	var e2=0;
	localStorage.setItem("e2",e2);
	var e3=0;
	localStorage.setItem("e3",e3);
	localStorage.setItem("exercises", JSON.stringify(exercises));
}

function validateFormLogin() {
	
	loadValues();
    var x = document.forms["SignIn"]["usuario"].value;
    var y = document.forms["SignIn"]["contraseña"].value;
    if (x == null || x == "") {
        return false;
    }
    else if (y == null || y == "") {
        return false;
    }
    else{
    	return true;
    }
    
}

function validateFormAccount() {
    var z = document.forms["SignIn"]["nombre"].value;
    var x = document.forms["SignIn"]["apellidos"].value;
    var y = document.forms["SignIn"]["contraseña"].value;
    var k = document.forms["SignIn"]["edad"].value;
    var l = document.forms["SignIn"]["nombre_usuario"].value;

    if (z == null || z == "") {
        $("#submit").disable(true);
        return false;
    }
    else if (x == null || x == "") {
        $("#submit").disable(true)
        return false;
    }
    else if (k == null || k == "") {
        $("#submit").disable(true)
        return false;
    }
    else if (y == null || y == "") {
        $("#submit").disable(true)
        return false;
    }
    else if (l == null || l == "") {
        $("#submit").disable(true)
        return false;
    }
    else{
		return true;
	}
}

function requestLeoLeo1(){
	var ejercicio=JSON.parse(localStorage.getItem("exercises"));
	var l1=localStorage.getItem("l1");
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestRespuestasURL()+"?ejercicio="+"1",
			function(data,status) {
			if(status=="success"){
				$.each(data, function(i, datos){
	            $.each(datos, function(i, datos2){
	            	//exercises.leoleo[0].correct.push(JSON.stringify(datos2.textoRespuesta));
	            	ejercicio.leoleo[0].correct.push(JSON.stringify(datos2.textoRespuesta));
	            	
	           });
		        });	
				
			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
			}
		);
	//alert(ejercicio.leoleo[0].correct);
	if(l1==0){
	for(var x=0;x<6;x++){
		ejercicio.leoleo[0].correct[x]=ejercicio.leoleo[0].correct[x].substring(1,2);
	}
	}
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestImagenesURL()+"?ejercicio="+"1",
			function(data,status) {
			if(status=="success"){
				$.each(data, function(i, datos){
	            $.each(datos, function(i, datos2){
	            ejercicio.leoleo[0].imagen.push(JSON.stringify(datos2.url));
	           //alert("valor rec: "+exercises.leoleo[0].imagen[i]);
	           //location.href='leoleo1.html';

	           });
		        });	
			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
			}
		);
	if(l1==0){
	for(var x=0;x<6;x++){
		ejercicio.leoleo[0].imagen[x]=ejercicio.leoleo[0].imagen[x].substring(1,(ejercicio.leoleo[0].imagen[x].length-1));
	}
	}
	
	
	//alert(exercises.leoleo[0].imagen);
	$('#banana').attr('src', ejercicio.leoleo[0].imagen[0]);
	$('#delfin').attr('src', ejercicio.leoleo[0].imagen[1]);
	$('#bano').attr('src', ejercicio.leoleo[0].imagen[2]);
	$('#dedo').attr('src', ejercicio.leoleo[0].imagen[3]);
	$('#pantalon').attr('src', ejercicio.leoleo[0].imagen[4]);
	$('#burro').attr('src', ejercicio.leoleo[0].imagen[5]);
	l1=1;
	localStorage.setItem("l1", l1);
	//alert("l1="+l1);
	localStorage.setItem("exercises", JSON.stringify(ejercicio));
}

function requestLeoLeo2(){
	var ejercicio=JSON.parse(localStorage.getItem("exercises"));
	var l2=localStorage.getItem("l2");
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestRespuestasURL()+"?ejercicio="+"2",
			function(data,status) {
			if(status=="success"){
				$.each(data, function(i, datos){
	            $.each(datos, function(i, datos2){
	            	ejercicio.leoleo[1].correct.push(JSON.stringify(datos2.textoRespuesta));
	           //alert("valor rec: "+exercises.leoleo[1].correct[i]);
	           });
		        });	
			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
			}
		);
	if(l2==0){
	for(var x=0;x<3;x++){
		ejercicio.leoleo[1].correct[x]=ejercicio.leoleo[1].correct[x].substring(1,(ejercicio.leoleo[1].correct[x].length-1));
	}
	}
	//alert(exercises.leoleo[1].correct);
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestImagenesURL()+"?ejercicio="+"2",
			function(data,status) {
			if(status=="success"){
				$.each(data, function(i, datos){
	            $.each(datos, function(i, datos2){
	            	ejercicio.leoleo[1].imagen.push(JSON.stringify(datos2.url));
	           //alert("valor rec: "+exercises.leoleo[1].imagen[i]);
	           });
		        });	
			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
			}
		);
	if(l2==0){
	for(var x=0;x<1;x++){
		ejercicio.leoleo[1].imagen[x]=ejercicio.leoleo[1].imagen[x].substring(1,(ejercicio.leoleo[1].imagen[x].length-1));
	}
	}
	//alert(exercises.leoleo[1].imagen);
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestAudiosURL()+"?ejercicio="+"2",
		function(data,status) {
			if(status=="success"){
				$.each(data, function(j, datos){
	            $.each(datos, function(j, datos2){
	            	ejercicio.leoleo[1].audio.push(JSON.stringify(datos2.url));
	            	//alert("valor rec: "+exercises.leoleo[1].audio[j]);
	            	//location.href='leoleo2.html';
	           });
		        });
				
			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
			}
		);
/*
	for(var x=0;x<3;x++){
		ejercicio.leoleo[1].audio[x]=ejercicio.leoleo[1].audio[x].substring(1,(ejercicio.leoleo[1].audio[x].length-1));
	}
*/
	
	//alert(exercises.leoleo[1].audio);
	$('#audio1').attr({src: ejercicio.leoleo[1].imagen[0],onclick:"playAudio("+ejercicio.leoleo[1].audio[0]+")"});
	$('#audio2').attr({src: ejercicio.leoleo[1].imagen[0],onclick:"playAudio("+ejercicio.leoleo[1].audio[1]+")"});
	$('#audio3').attr({src: ejercicio.leoleo[1].imagen[0],onclick:"playAudio("+ejercicio.leoleo[1].audio[2]+")"});
	l2=1;
	localStorage.setItem("l2", l2);
	localStorage.setItem("exercises", JSON.stringify(ejercicio));
}

function requestLeoLeo3(){
	
	var ejercicio=JSON.parse(localStorage.getItem("exercises"));
	var l3=localStorage.getItem("l3");
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestRespuestasURL()+"?ejercicio="+"3",
			function(data,status) {
			if(status=="success"){
				$.each(data, function(i, datos){
	            $.each(datos, function(i, datos2){
	            	ejercicio.leoleo[2].correct.push(JSON.stringify(datos2.textoRespuesta));
	           //alert("valor rec: "+exercises.leoleo[2].correct[i]);
	           });
		        });	
			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
			}
		);
	if(l3==0){
	for(var x=0;x<9;x++){
		ejercicio.leoleo[2].correct[x]=ejercicio.leoleo[2].correct[x].substring(1,(ejercicio.leoleo[2].correct[x].length-1));
	}
	}
	//alert(exercises.leoleo[2].correct);
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestEnunciadosURL()+"?ejercicio="+"3",
			function(data,status) {
				if(status=="success"){
					$.each(data, function(j, datos){
		            $.each(datos, function(j, datos2){
		            	ejercicio.leoleo[2].texto_enunciado.push(JSON.stringify(datos2.textoEnunciado));
		            	//alert("valor rec: "+exercises.leoleo[2].texto_enunciado[j]);
		            	//location.href='leoleo3.html';
		           });
			        });
					
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}
				}
			);
	if(l3==0){
	for(var x=0;x<1;x++){
		ejercicio.leoleo[2].texto_enunciado[x]=ejercicio.leoleo[2].texto_enunciado[x].substring(1,(ejercicio.leoleo[2].texto_enunciado[x].length-1));
	}
	}
	$("#enunciado").text(ejercicio.leoleo[2].texto_enunciado[0]);
	//alert(exercises.leoleo[2].texto_enunciado);
	l3=1;
	localStorage.setItem("l3", l3);
	localStorage.setItem("exercises", JSON.stringify(ejercicio));
}

function requestJuego(valor){
	
	var ejercicio=JSON.parse(localStorage.getItem("exercises"));
	var j1=localStorage.getItem("j1");
	var j2=localStorage.getItem("j2");
	if ((valor==4)&&(j2==0)){
		j2=2;
	}
	if ((valor==5)&&(j1==0)){
		j1=2;
	}
	
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestRespuestasURL()+"?ejercicio="+valor,
			function(data,status) {
			if(status=="success"){
				$.each(data, function(i, datos){
	            $.each(datos, function(i, datos2){
	            	ejercicio.juego[valor-4].correct.push(JSON.stringify(datos2.textoRespuesta));
	           //alert("valor rec: "+exercises.juego[valor-4].correct[i]);
	           });
		        });	
			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
			}
		);
	if(j1==0){
	for(var x=0;x<3;x++){
		ejercicio.juego[0].correct[x]=ejercicio.juego[0].correct[x].substring(1,(ejercicio.juego[0].correct[x].length-1));
	}
	}
	if(j2==0){
	for(var x=0;x<3;x++){
		ejercicio.juego[1].correct[x]=ejercicio.juego[1].correct[x].substring(1,(ejercicio.juego[1].correct[x].length-1));
	}
	}
	//alert(exercises.juego[valor-4].correct);
	
	 if(valor==5){
		 $.ajaxSetup({
		        async: false,
		        cache:false,
		        contentType:"application/json"
		    });
		 
		 $.getJSON(appConstants.requestAudiosURL()+"?ejercicio="+valor,
			function(data,status) {
				if(status=="success"){
					$.each(data, function(j, datos){
		            $.each(datos, function(j, datos2){
		            	ejercicio.juego[valor-4].audio.push(JSON.stringify(datos2.url));
		            	//alert("valor rec: "+exercises.juego[valor-4].audio[j]);
		            	//location.href='juego2.html';
		           });
			        });
					
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}
				}
			);
		 if(j2==0){
		 for(var x=0;x<1;x++){
				ejercicio.juego[valor-4].audio[x]=ejercicio.juego[valor-4].audio[x].substring(1,(ejercicio.juego[valor-4].audio[x].length-1));
			}
		 }
		// alert(exercises.juego[valor-4].audio);
     }
	 if ((valor==4)&&(j1==0)){
		j1=1;
	}
	if ((valor==5)&&(j2==0)){
		j2=1;
	}
	if(j1==2){
		j1=0;
	}
	if(j2==2){
		j2=0;
	}
	
	 localStorage.setItem("j1", j1);
	 localStorage.setItem("j2", j2);
	 localStorage.setItem("exercises", JSON.stringify(ejercicio));
}

function requestEscucho(valor){
	
	var ejercicio=JSON.parse(localStorage.getItem("exercises"));
	var e1=localStorage.getItem("e1");
	var e2=localStorage.getItem("e2");
	var e3=localStorage.getItem("e3");
	//alert(valor+','+e1+','+e2+','+e3);
	
	if ((valor==6)&&(e2==0)){
		e2=2;
	}
	if ((valor==6)&&(e3==0)){
		e3=2;
	}
	if ((valor==7)&&(e1==0)){
		e1=2;
	}
	if ((valor==7)&&(e3==0)){
		e3=2;
	}
	if ((valor==8)&&(e1==0)){
		e1=2;
	}
	if ((valor==8)&&(e2==0)){
		e2=2;
	}
	//alert(e1+','+e2+','+e3);
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestRespuestasURL()+"?ejercicio="+valor,
			function(data,status) {
			if(status=="success"){
				$.each(data, function(i, datos){
	            $.each(datos, function(i, datos2){
	            	ejercicio.escucho[valor-6].correct.push(JSON.stringify(datos2.textoRespuesta));
	          // alert("valor rec: "+exercises.escucho[valor-6].correct[i]);
	           });
		        });	
			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
			}
		);
	
	if(valor==6){
		if(e1==0){
		for(var x=0;x<3;x++){
			ejercicio.escucho[valor-6].correct[x]=ejercicio.escucho[valor-6].correct[x].substring(1,(ejercicio.escucho[valor-6].correct[x].length-1));
		}
		}
	}
	else if(valor==7){
		if(e2==0){
		for(var x=0;x<3;x++){
			ejercicio.escucho[valor-6].correct[x]=ejercicio.escucho[valor-6].correct[x].substring(1,(ejercicio.escucho[valor-6].correct[x].length-1));
		}
		}
	}
	else if(valor==8){
		if(e3==0){
		for(var x=0;x<6;x++){
			ejercicio.escucho[valor-6].correct[x]=ejercicio.escucho[valor-6].correct[x].substring(1,(ejercicio.escucho[valor-6].correct[x].length-1));
		}
		}
	}
	//alert(exercises.escucho[valor-6].correct);
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestImagenesURL()+"?ejercicio="+valor,
			function(data,status) {
			if(status=="success"){
				$.each(data, function(i, datos){
	            $.each(datos, function(i, datos2){
	            	ejercicio.escucho[valor-6].imagen.push(JSON.stringify(datos2.url));
	           //alert("valor rec: "+exercises.escucho[valor-6].imagen[i]);
	           });
		        });	
			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
			}
		);
	
	if(valor==6){
		if(e1==0){
		for(var x=0;x<1;x++){
			ejercicio.escucho[valor-6].imagen[x]=ejercicio.escucho[valor-6].imagen[x].substring(1,(ejercicio.escucho[valor-6].imagen[x].length-1));
		}
		}
	}
	else if(valor==7){
		if(e2==0){
		for(var x=0;x<1;x++){
			ejercicio.escucho[valor-6].imagen[x]=ejercicio.escucho[valor-6].imagen[x].substring(1,(ejercicio.escucho[valor-6].imagen[x].length-1));
		}
		}
	}
	else if(valor==8){
		if(e3==0){
		for(var x=0;x<8;x++){
			ejercicio.escucho[valor-6].imagen[x]=ejercicio.escucho[valor-6].imagen[x].substring(1,(ejercicio.escucho[valor-6].imagen[x].length-1));
		}
		}
	}
	
	//alert(exercises.escucho[valor-6].imagen);
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestAudiosURL()+"?ejercicio="+valor,
		function(data,status) {
			if(status=="success"){
				$.each(data, function(j, datos){
	            $.each(datos, function(j, datos2){
	            	ejercicio.escucho[valor-6].audio.push(JSON.stringify(datos2.url));
	            	//alert("valor rec: "+exercises.escucho[valor-6].audio[j]);
	           });
		        });
				
			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
			}
		);
	
	if(valor==7){
		if(e2==0){
		ejercicio.escucho[1].audio[3]=ejercicio.escucho[1].audio[3].substring(1,(ejercicio.escucho[1].audio[3].length-1));
		ejercicio.escucho[1].audio[4]=ejercicio.escucho[1].audio[4].substring(1,(ejercicio.escucho[1].audio[4].length-1));
		//alert(ejercicio.escucho[1].audio[3]+','+ejercicio.escucho[1].audio[4]);
		}
	}
	
	//alert(exercises.escucho[valor-6].audio);
	
	if (valor==8){
		
		$.ajaxSetup({
	        async: false,
	        cache:false,
	        contentType:"application/json"
	    });
		
		$.getJSON(appConstants.requestEnunciadosURL()+"?ejercicio="+valor,
			function(data,status) {
				if(status=="success"){
					$.each(data, function(j, datos){
		            $.each(datos, function(j, datos2){
		            	ejercicio.escucho[valor-6].texto_enunciado.push(JSON.stringify(datos2.textoEnunciado));
		            	//alert("valor rec: "+exercises.escucho[valor-6].texto_enunciado[j]);
		            	//location.href='escucho3.html';
		           });
			        });
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}
				}
			);
		if(e3==0){
		for(var x=0;x<1;x++){
			ejercicio.escucho[valor-6].texto_enunciado[x]=ejercicio.escucho[valor-6].texto_enunciado[x].substring(1,(ejercicio.escucho[valor-6].texto_enunciado[x].length-1));
		}
		}
		//alert(exercises.escucho[valor-6].texto_enunciado);
	}
	if (valor==6){
		$('#audio1').attr({src: ejercicio.escucho[0].imagen[0],onclick:"playAudio("+ejercicio.escucho[0].audio[0]+")"});
		$('#audio2').attr({src: ejercicio.escucho[0].imagen[0],onclick:"playAudio("+ejercicio.escucho[0].audio[1]+")"});
		$('#audio3').attr({src: ejercicio.escucho[0].imagen[0],onclick:"playAudio("+ejercicio.escucho[0].audio[2]+")"});
	}
	else if(valor==7){
		setTimeout(function(){playAudio(ejercicio.escucho[1].audio[3])},800);
		setTimeout(function(){playAudio(ejercicio.escucho[1].audio[4])},3500);
		$('#audio1').attr({src: ejercicio.escucho[1].imagen[0],onclick:"playAudio("+ejercicio.escucho[1].audio[0]+")"});
		$('#audio2').attr({src: ejercicio.escucho[1].imagen[0],onclick:"playAudio("+ejercicio.escucho[1].audio[1]+")"});
		$('#audio3').attr({src: ejercicio.escucho[1].imagen[0],onclick:"playAudio("+ejercicio.escucho[1].audio[2]+")"});
	}
	else if (valor==8){
		$('#audio0').attr({src: ejercicio.escucho[2].imagen[0],onclick:"playAudio("+ejercicio.escucho[2].audio[0]+")"});
		$('#audio1').attr({src: ejercicio.escucho[2].imagen[0],onclick:"playAudio("+ejercicio.escucho[2].audio[1]+")"});
		$('#audio2').attr({src: ejercicio.escucho[2].imagen[0],onclick:"playAudio("+ejercicio.escucho[2].audio[2]+")"});
		$('#audio3').attr({src: ejercicio.escucho[2].imagen[0],onclick:"playAudio("+ejercicio.escucho[2].audio[3]+")"});
		$('#audio4').attr({src: ejercicio.escucho[2].imagen[0],onclick:"playAudio("+ejercicio.escucho[2].audio[4]+")"});
		$('#audio5').attr({src: ejercicio.escucho[2].imagen[0],onclick:"playAudio("+ejercicio.escucho[2].audio[5]+")"});
		$('#audio6').attr({src: ejercicio.escucho[2].imagen[0],onclick:"playAudio("+ejercicio.escucho[2].audio[6]+")"});
		$("#enunciado").text(ejercicio.escucho[2].texto_enunciado[0]);
		$("#img1").attr('src',ejercicio.escucho[2].imagen[1]);
		$("#img2").attr('src',ejercicio.escucho[2].imagen[2]);
		$("#img3").attr('src',ejercicio.escucho[2].imagen[2]);
		$("#img4").attr('src',ejercicio.escucho[2].imagen[3]);
		$("#img5").attr('src',ejercicio.escucho[2].imagen[4]);
		$("#img6").attr('src',ejercicio.escucho[2].imagen[5]);
		$("#img7").attr('src',ejercicio.escucho[2].imagen[2]);
		$("#img8").attr('src',ejercicio.escucho[2].imagen[6]);
		$("#img9").attr('src',ejercicio.escucho[2].imagen[7]);
		$("#img10").attr('src',ejercicio.escucho[2].imagen[5]);
		$("#img11").attr('src',ejercicio.escucho[2].imagen[5]);
		$("#img12").attr('src',ejercicio.escucho[2].imagen[1]);
	}
	
	if ((valor==6)&&(e1==0)){
		e1=1;
	}
	if ((valor==7)&&(e2==0)){
		e2=1;
	}
	if ((valor==8)&&(e3==0)){
		e3=1;
	}
	if (e3==2){
		e3=0;
	}
	if (e1==2){
		e1=0;
	}
	if (e2==2){
		e2=0;
	}
	//alert(e1+','+e2+','+e3);
	
	localStorage.setItem("e1", e1);
	localStorage.setItem("e2", e2);
	localStorage.setItem("e3", e3);
	localStorage.setItem("exercises", JSON.stringify(ejercicio));
}
function loginUsuario(){
	var username=$("#username").val();
	var pass=$("#pass").val();
	var proceder=true;
	var frase;
	var userid=localStorage.getItem("userid");
	
	usuario.username=username;
	usuario.password=pass;
	
	if((navigator.connection.type!=Connection.WIFI)&&(navigator.connection.type!=Connection.CELL_3G)&&(navigator.connection.type!=Connection.CELL_4G)){
		proceder=confirm("Para el debido funcionamiento de la aplicación, debe estar conectado a la red");
	}
	if(proceder==true){
	$.ajaxSetup({contentType: "application/json"});
	
	$.post(appConstants.loginURL(),JSON.stringify(usuario),//Enviar al Servidor el objeto critica,que debe ser convertido a string
			function(data,status) {//Función callback
				if(status=="success"){//Si la HTTP-RESPONSE es OK
					frase=data.split(";");
					userid=frase[1];
					localStorage.setItem("userid", userid);
					alert(frase[0]);
					if(frase[0]=="Contraseña incorrecta"){
						location.href='login.html';
					}
					else if(frase[0]=="El usuario indicado no existe"){
						location.href='login.html';
					}
					else{
						location.href='menu.html';
					}
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}
			},
			"text"//Content-type esperado en HTTP-RESPONSE: text lo que se espera recibir
		);
	}
	else{
		alert("No se pudo pudo acceder con éxito a la aplicación");
		location.href='login.html';
	}

}

function addUsuario(){
	var nombre=$("#nombre").val();
	var apellidos=$("#apellidos").val();
	var edad=$("#edad").val();
	var foto=photo.fileName;;
	var aficiones=$("#aficiones").val();
	var username=$("#nombre_usuario").val();
	var contraseña=$("#contraseña").val();
	
	usuario.nombre=nombre;
	usuario.apellidos=apellidos;
	usuario.edad=edad;
	usuario.foto=foto;
	usuario.aficiones=aficiones;
	usuario.username=username;
	usuario.password=contraseña;
	var proceder=true;
	
//	alert('Valores a enviar: '+usuario.nombre+','+usuario.apellidos+','+usuario.edad+','+usuario.foto+','+usuario.aficiones+','+usuario.username+','+usuario.password);
	if((navigator.connection.type!=Connection.WIFI)&&(navigator.connection.type!=Connection.CELL_3G)&&(navigator.connection.type!=Connection.CELL_4G)){
		proceder=confirm("Para el debido funcionamiento de la aplicación, debe estar conectado a la red");
	}
	if(proceder==true){
		
	$.ajaxSetup({contentType: "application/json"});
		
	$.post(appConstants.addUsuariosURL(),JSON.stringify(usuario),//Enviar al Servidor el objeto critica,que debe ser convertido a string
			function(data,status) {//Función callback
				if(status=="success"){//Si la HTTP-RESPONSE es OK
					alert(data);//Indicar al usuario que se ha publicado la opinion
					if(data=="Nombre de usuario existente. No se añadió a la base de datos"){
						location.href='newaccount.html';
					}
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}
				location.href='login.html';
			},
			"text"//Content-type esperado en HTTP-RESPONSE: text lo que se espera recibir
		);
	}
	else{
		alert("No se pudo crear un nuevo usuario");
		location.href='login.html';
	}

}

function saveValue(valor,i){
	var valor=valor;
	var array0=JSON.parse(localStorage.getItem("array0"));
	var array1=JSON.parse(localStorage.getItem("array1"));
	var array2=JSON.parse(localStorage.getItem("array2"));
	
	if(i==0){
		if(array0[2]==undefined){
			array0.push(valor);
			alert("Has pulsado: "+array0);
			localStorage.setItem("array0", JSON.stringify(array0));
			}
		else{
			alert("Ya introdujiste los tres valores. Pulsa el botón comprobar");
		}
	}
	if(i==1){
		if(array1[2]==undefined){
			array1.push(valor);
			alert("Has pulsado: "+array1);
			localStorage.setItem("array1", JSON.stringify(array1));
			}
		else{
			alert("Ya introdujiste los tres valores. Pulsa el botón comprobar");
		}
	}
	else if(i==2){
		if(array2[2]==undefined){
			array2.push(valor);
			alert("Has pulsado: "+array2);
			localStorage.setItem("array2", JSON.stringify(array2));
			}
		else{
			alert("Ya introdujiste los tres valores. Pulsa el botón comprobar");
		}
	}
	
		
}
function requestCalification(valor){

	var index=valor;
	var username=localStorage.getItem("userid");
	var aprobado=[];
	var nota=[];
	var leoleo1=localStorage.getItem("leoleo1");
	var leoleo2=localStorage.getItem("leoleo2");
	var leoleo3=localStorage.getItem("leoleo3");
	var juego1=localStorage.getItem("juego1");
	var juego2=localStorage.getItem("juego2");
	var escucho1=localStorage.getItem("escucho1");
	var escucho2=localStorage.getItem("escucho2");
	var escucho3=localStorage.getItem("escucho3");
	//alert(username);
	
	$.ajaxSetup({
        async: false,
        cache:false,
        contentType:"application/json"
    });
	
	$.getJSON(appConstants.requestCalificacionesURL()+"?userid="+username,
		function(data,status) {
			
			if(status=="success"){
				$.each(data, function(j, datos){
	            $.each(datos, function(j, datos2){
	            	aprobado.push(JSON.stringify(datos2.aprobado));
	            	//alert(aprobado);
	           });
		        });

			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
			}
	);
	
	for(var i=0;i<8;i++){
		if(aprobado[i]=="false"){
			nota[i]="INCOMPLETO";
		}
		else if(aprobado[i]=="true"){
			nota[i]="COMPLETADO";
		}
	}
	
	leoleo1=nota[0];
	localStorage.setItem("leoleo1", leoleo1);
	leoleo2=nota[1];
	localStorage.setItem("leoleo2", leoleo2);
	leoleo3=nota[2];
	localStorage.setItem("leoleo3", leoleo3);
	juego1=nota[3];
	localStorage.setItem("juego1", juego1);
	juego2=nota[4];
	localStorage.setItem("juego2", juego2);
	escucho1=nota[5];
	localStorage.setItem("escucho1", escucho1);
	escucho2=nota[6];
	localStorage.setItem("escucho2", escucho2);
	escucho3=nota[7];
	localStorage.setItem("escucho3", escucho3);


}


function addCalification(valor){
	
	info.ejercicio=valor;
    info.username=localStorage.getItem("userid");
//    alert(info.username);
//    alert(info.ejercicio);
    $.ajaxSetup({async: false, contentType: "application/json"});
	
	$.post(appConstants.addInfoURL(),JSON.stringify(info),
			function(data,status) {
				if(status=="success"){
					//alert(data);
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}
			},
			"text"
		);
	 $.ajaxSetup({async: false, contentType: "application/json"});
	
	$.post(appConstants.addCalificacionesURL(),JSON.stringify(aprobado),
		function(data,status) {
			if(status=="success"){
				alert(data);
			}
			else {
				alert("NO RESPONSE FROM SERVER");
			}
		},
		"text"
	);
}

function checkEscucho(i)
{
	var ejercicio=JSON.parse(localStorage.getItem("exercises"));
	
	var escucho1=localStorage.getItem("escucho1");
	var escucho2=localStorage.getItem("escucho2");
	var escucho3=localStorage.getItem("escucho3");
	
	if(i==0)
	{
		var fail=localStorage.getItem("fail");
		var valor10=localStorage.getItem("valor10");
		if (valor10==ejercicio.escucho[i].correct[0])
		{
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ1").css("display","none");
			$("#EJ2").css("display","block");
			
		}
		else if (valor10==ejercicio.escucho[i].correct[1])
		{
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ2").css("display","none");
			$("#EJ3").css("display","block");
		}
		else if (valor10==ejercicio.escucho[i].correct[2])
		{
			fail=0;
			localStorage.setItem("fail", fail);
			localStorage.setItem("escucho1", "COMPLETADO");
			$("#EJ3").css("display","none");
			$("#EJ2").css("display","none");
			$("#EJ1").css("display","none");
			$("#correcto1").css("display","block");
			//FUNCION ACTUALIZAR BASE DE DATOS
	        addCalification(6);
			setTimeout(function(){playAudio("/android_asset/www/audio/aplausos.mp3")},500);
	        setTimeout(function(){window.location.href='escucho_menu.html'},5000);
			
	    }
	
		else{
			fail++;
			localStorage.setItem("fail", fail);
			localStorage.setItem("myMedia", null);
			playAudio("/android_asset/www/audio/fail.mp3");
			if(fail==3)
			{
				fail=0;
				localStorage.setItem("fail", fail);
				$("#EJ3").css("display","none");
				$("#EJ2").css("display","none");
				$("#EJ1").css("display","none");
				$("#ayuda1").css("display","block");
				setTimeout(function(){playAudio("/android_asset/www/audio/ayuda.mp3")},500);
		        setTimeout(function(){window.location.href='escucho_menu.html'},5000);
			}
		}

	}
	else if (i==1)
	{

	var input=$("#input").val();
	localStorage.setItem("input",input);
	//alert("input: "+input);
	var fail=localStorage.getItem("fail");
	
	if(input==ejercicio.escucho[i].correct[0])
	{
		fail=0;
		localStorage.setItem("fail", fail);
		input = undefined;
		localStorage.setItem("input", input);
		$("#input").val('');
		$("#EJ1").css("display","none");
		$("#EJ2").css("display","block");
		
	}
	else if(input==ejercicio.escucho[i].correct[1])
	{
		fail=0;
		localStorage.setItem("fail", fail);
		input = undefined;
		localStorage.setItem("input", input);
		$("#input").val('');
		$("#EJ2").css("display","none");
		$("#EJ3").css("display","block");
	}
	else if(input==ejercicio.escucho[i].correct[2])
	{
		fail=0;
		localStorage.setItem("fail", fail);
		input = undefined;
		localStorage.setItem("input", input);
		$("#input").val('');
		localStorage.setItem("escucho2", "COMPLETADO");
		$("#EJ3").css("display","none");
		$("#EJ2").css("display","none");
		$("#EJ1").css("display","none");
		$("#boton").css("display","none");
		$("#entrada").css("display","none");
		$("#correcto2").css("display","block");
		addCalification(7);
		setTimeout(function(){playAudio("/android_asset/www/audio/aplausos.mp3")},500);
        setTimeout(function(){window.location.href='escucho_menu.html'},5000);
		//FUNCION ACTUALIZAR BASE DE DATOS
	}
	else{	
		fail++;
		localStorage.setItem("fail", fail);
		localStorage.setItem("myMedia", null);
		playAudio("/android_asset/www/audio/fail.mp3");
		if(fail==3)
		{
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ3").css("display","none");
			$("#EJ2").css("display","none");
			$("#EJ1").css("display","none");
			$("#boton").css("display","none");
			$("#entrada").css("display","none");
			$("#ayuda2").css("display","block");
			setTimeout(function(){playAudio("/android_asset/www/audio/ayuda.mp3")},500);
	        setTimeout(function(){window.location.href='escucho_menu.html'},5000);
		}	
	}
	}
	else if(i==2){
		var valor11=localStorage.getItem("valor11");
		var valor12=localStorage.getItem("valor12");
		var valor13=localStorage.getItem("valor13");
		var valor14=localStorage.getItem("valor14");
		var valor15=localStorage.getItem("valor15");
		var valor16=localStorage.getItem("valor16");
		var fail=localStorage.getItem("fail");
		
		if(valor11==ejercicio.escucho[i].correct[0]){
			fail=0;
			localStorage.setItem("fail", fail);
			valor11=undefined;
			localStorage.setItem("valor11", valor11);
			stopAudio();
			$("#EJ31").css("display","none");
			$("#EJ32").css("display","block");
		}
		else if(valor12==ejercicio.escucho[i].correct[1]){
			fail=0;
			localStorage.setItem("fail", fail);
			valor12=undefined;
			localStorage.setItem("valor12", valor12);
			stopAudio();
			$("#EJ32").css("display","none");
			$("#EJ33").css("display","block");
		}
		else if(valor13==ejercicio.escucho[i].correct[2]){
			fail=0;
			localStorage.setItem("fail", fail);
			valor13=undefined;
			localStorage.setItem("valor13", valor13);
			stopAudio();
			$("#EJ33").css("display","none");
			$("#EJ34").css("display","block");
		}
		else if(valor14==ejercicio.escucho[i].correct[3]){
			fail=0;
			localStorage.setItem("fail", fail);
			valor14=undefined;
			localStorage.setItem("valor14", valor14);
			stopAudio();
			$("#EJ34").css("display","none");
			$("#EJ35").css("display","block");
		}
		else if(valor15==ejercicio.escucho[i].correct[4]){
			fail=0;
			localStorage.setItem("fail", fail);
			valor15=undefined;
			localStorage.setItem("valor15", valor15);
			stopAudio();
			$("#EJ35").css("display","none");
			$("#EJ36").css("display","block");
		}
		else if(valor16==ejercicio.escucho[i].correct[5]){
			fail=0;
			localStorage.setItem("fail", fail);
			valor16=undefined;
			localStorage.setItem("valor16", valor16);
			stopAudio();
			localStorage.setItem("escucho3", "COMPLETADO");
			$("#EJ31").css("display","none");
			$("#EJ32").css("display","none");
			$("#EJ33").css("display","none");
			$("#EJ34").css("display","none");
			$("#EJ35").css("display","none");
			$("#EJ36").css("display","none");
			$("#correcto3").css("display","block");
			addCalification(8);
			setTimeout(function(){playAudio("/android_asset/www/audio/aplausos.mp3")},500);
	        setTimeout(function(){window.location.href='escucho_menu.html'},5000);
			//FUNCION ACTUALIZAR BASE DE DATOS
		}
		else{
			fail++;
			localStorage.setItem("fail", fail);
			localStorage.setItem("myMedia", null);
			playAudio("/android_asset/www/audio/fail.mp3");
			if(fail==3)
			{
				fail=0;
				localStorage.setItem("fail", fail);
				$("#EJ31").css("display","none");
				$("#EJ32").css("display","none");
				$("#EJ33").css("display","none");
				$("#EJ34").css("display","none");
				$("#EJ35").css("display","none");
				$("#EJ36").css("display","none");
				$("#ayuda3").css("display","block");
				setTimeout(function(){playAudio("/android_asset/www/audio/ayuda.mp3")},500);
		        setTimeout(function(){window.location.href='escucho_menu.html'},5000);
			}
		}
	}

}

function checkJuego(i,j){
	var ejercicio=JSON.parse(localStorage.getItem("exercises"));
	var juego1=localStorage.getItem("juego1");
	var juego2=localStorage.getItem("juego2");
	
	if(i==0)
	{
		var fail=localStorage.getItem("fail");
		var valor8=localStorage.getItem("valor8");
		if (valor8==ejercicio.juego[i].correct[0])
		{
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ1").css("display","none");
			$("#EJ2").css("display","block");
		}
		else if (valor8==ejercicio.juego[i].correct[1])
		{
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ2").css("display","none");
			$("#EJ3").css("display","block");
		}
		else if (valor8==ejercicio.juego[i].correct[2])
		{
			fail=0;
			localStorage.setItem("fail", fail);
			localStorage.setItem("juego1", "COMPLETADO");
			$("#EJ3").css("display","none");
			$("#EJ2").css("display","none");
			$("#EJ1").css("display","none");
			$("#correcto1").css("display","block");
			addCalification(4);
			setTimeout(function(){playAudio("/android_asset/www/audio/aplausos.mp3")},500);
	        setTimeout(function(){window.location.href='juego_menu.html'},5000);
			//FUNCION ACTUALIZAR BASE DE DATOS
		}
		else{
			
		fail++;
		localStorage.setItem("fail", fail);
		localStorage.setItem("myMedia", null);
		playAudio("/android_asset/www/audio/fail.mp3");
		if(fail==3)
		{
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ3").css("display","none");
			$("#EJ2").css("display","none");
			$("#EJ1").css("display","none");
			$("#ayuda1").css("display","block");
			setTimeout(function(){playAudio("/android_asset/www/audio/ayuda.mp3")},500);
	        setTimeout(function(){window.location.href='juego_menu.html'},5000);
		}
		}

	}
	else if(i==1)
	{
		var fail=localStorage.getItem("fail");
		var valor9=localStorage.getItem("valor9");
		if (valor9==ejercicio.juego[i].correct[0])
		{
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ1").css("display","none");
			$("#EJ2").css("display","block");
		}
		else if (valor9==ejercicio.juego[i].correct[1])
		{
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ2").css("display","none");
			$("#EJ3").css("display","block");
		}
		else if (valor9==ejercicio.juego[i].correct[2])
		{
			fail=0;
			localStorage.setItem("fail", fail);
			localStorage.setItem("juego2", "COMPLETADO");
			$("#EJ3").css("display","none");
			$("#EJ2").css("display","none");
			$("#EJ1").css("display","none");
			$("#correcto2").css("display","block");
			addCalification(5);
			setTimeout(function(){playAudio("/android_asset/www/audio/aplausos.mp3")},500);
	        setTimeout(function(){window.location.href='juego_menu.html'},5000);
			//FUNCION ACTUALIZAR BASE DE DATOS
		}
		else{
			
		fail++;
		localStorage.setItem("fail", fail);
		localStorage.setItem("myMedia", null);
		playAudio("/android_asset/www/audio/fail.mp3");
		if(fail==3)
		{
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ3").css("display","none");
			$("#EJ2").css("display","none");
			$("#EJ1").css("display","none");
			$("#ayuda2").css("display","block");
			setTimeout(function(){playAudio("/android_asset/www/audio/ayuda.mp3")},500);
	        setTimeout(function(){window.location.href='juego_menu.html'},5000);
		}
			
		}
	}	
}

function checkLeoleo(i,j) {
	var ejercicio=JSON.parse(localStorage.getItem("exercises"));
	var fail=localStorage.getItem("fail");
	var valor1=localStorage.getItem("valor1");
	var valor2=localStorage.getItem("valor2");
	var valor3=localStorage.getItem("valor3");
	var valor4=localStorage.getItem("valor4");
	var valor5=localStorage.getItem("valor5");
	var valor6=localStorage.getItem("valor6");
	var leoleo1=localStorage.getItem("leoleo1");
	var leoleo2=localStorage.getItem("leoleo2");
	var leoleo3=localStorage.getItem("leoleo3");
	
	//alert(ejercicio.leoleo[i].correct[0]+','+valor1+','+ejercicio.leoleo[i].correct[1]+','+valor2);

if (i==0)
{
	if(j==0){
		if((valor1==ejercicio.leoleo[i].correct[j])&&(valor2==ejercicio.leoleo[i].correct[j+1]))
			{
				//alert("hola");
				fail=0;
				localStorage.setItem("fail", fail);
				$("#EJ1").css("display","none");
				$("#EJ2").css("display","block");
			}
		
		else{
			fail++;
			localStorage.setItem("fail", fail);
			localStorage.setItem("myMedia", null);
			playAudio("/android_asset/www/audio/fail.mp3");
			//alert("Fallos= "+fail);
		}
	}
	if(j==2){
		if((valor3==ejercicio.leoleo[i].correct[j])&&(valor4==ejercicio.leoleo[i].correct[j+1]))
			{
				fail=0;
				localStorage.setItem("fail", fail);
				$("#EJ2").css("display","none");
				$("#EJ3").css("display","block");
			}
		
		else{
			fail++;
			localStorage.setItem("fail", fail);
			localStorage.setItem("myMedia", null);
			playAudio("/android_asset/www/audio/fail.mp3");
			//alert("Fallos= "+fail);
		}
	}
	if(j==4){
		if((valor5==ejercicio.leoleo[i].correct[j])&&(valor6==ejercicio.leoleo[i].correct[j+1]))
			{
				fail=0;
				localStorage.setItem("fail", fail);
				localStorage.setItem("leoleo1", "COMPLETADO");
				$("#EJ3").css("display","none");
				$("#EJ2").css("display","none");
				$("#EJ1").css("display","none");
				$("#correcto1").css("display","block");
				addCalification(1);
				setTimeout(function(){playAudio("/android_asset/www/audio/aplausos.mp3")},500);
		        setTimeout(function(){window.location.href='leoleo_menu.html'},5000);
				//FUNCION ACTUALIZAR BASE DE DATOS
			}
		
		else{
			fail++;
			localStorage.setItem("fail", fail);
			localStorage.setItem("myMedia", null);
			playAudio("/android_asset/www/audio/fail.mp3");
			//alert("Fallos= "+fail);

		}
	}
	if (fail==3)
	{
		fail=0;
		localStorage.setItem("fail", fail);
		$("#EJ3").css("display","none");
		$("#EJ2").css("display","none");
		$("#EJ1").css("display","none");
		$("#ayuda1").css("display","block");
		setTimeout(function(){playAudio("/android_asset/www/audio/ayuda.mp3")},500);
        setTimeout(function(){window.location.href='leoleo_menu.html'},5000);
       
	}
}

else if (i==1){
	var fail=localStorage.getItem("fail");
	var valor7=localStorage.getItem("valor7");
	if (valor7==ejercicio.leoleo[i].correct[0])
	{
		fail=0;
		localStorage.setItem("fail", fail);
		$("#EJ1").css("display","none");
		$("#EJ2").css("display","block");
	}
	else if (valor7==ejercicio.leoleo[i].correct[1])
	{
		fail=0;
		localStorage.setItem("fail", fail);
		$("#EJ2").css("display","none");
		$("#EJ3").css("display","block");
	}
	else if (valor7==ejercicio.leoleo[i].correct[2])
	{
		fail=0;
		localStorage.setItem("fail", fail);
		localStorage.setItem("leoleo2", "COMPLETADO");
		$("#EJ3").css("display","none");
		$("#EJ2").css("display","none");
		$("#EJ1").css("display","none");
		$("#correcto2").css("display","block");
		addCalification(2);
		setTimeout(function(){playAudio("/android_asset/www/audio/aplausos.mp3")},500);
        setTimeout(function(){window.location.href='leoleo_menu.html'},5000);
		//FUNCION ACTUALIZAR BASE DE DATOS
	}
	else{
		fail++;
		localStorage.setItem("fail", fail);
		localStorage.setItem("myMedia", null);
		playAudio("/android_asset/www/audio/fail.mp3");
		if(fail==3)
		{
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ3").css("display","none");
			$("#EJ2").css("display","none");
			$("#EJ1").css("display","none");
			$("#ayuda2").css("display","block");
			setTimeout(function(){playAudio("/android_asset/www/audio/ayuda.mp3")},500);
	        setTimeout(function(){window.location.href='leoleo_menu.html'},5000);
		}			
	}
}

else if(i==2)
{
	var fail=localStorage.getItem("fail");
	var array0=JSON.parse(localStorage.getItem("array0"));
	var array1=JSON.parse(localStorage.getItem("array1"));
	var array2=JSON.parse(localStorage.getItem("array2"));
	
	if(j==0){
		//alert(ejercicio.leoleo[i].correct[0]+','+array0[0]+','+ejercicio.leoleo[i].correct[1]+','+array0[1]+','+ejercicio.leoleo[i].correct[2]+','+array0[2]);
		if((ejercicio.leoleo[i].correct[0]==array0[0])&&(ejercicio.leoleo[i].correct[1]==array0[1])&&(ejercicio.leoleo[i].correct[2]==array0[2])){
			
			var arrayx = [];
			localStorage.setItem("array0", JSON.stringify(arrayx));
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ1").css("display","none");
			$("#EJ2").css("display","block");
			
		}
		else{
			fail++;
			localStorage.setItem("fail", fail);
			var arrayxx = [];
			localStorage.setItem("array0", JSON.stringify(arrayxx));
			localStorage.setItem("myMedia", null);
			playAudio("/android_asset/www/audio/fail.mp3");
			if(fail==3){
				fail=0;
				localStorage.setItem("fail", fail);
				$("#EJ3").css("display","none");
				$("#EJ2").css("display","none");
				$("#EJ1").css("display","none");
				$("#ayuda3").css("display","block");
				setTimeout(function(){playAudio("/android_asset/www/audio/ayuda.mp3")},500);
		        setTimeout(function(){window.location.href='leoleo_menu.html'},5000);
			}
		}
	}
	else if(j==1){
		if((ejercicio.leoleo[i].correct[3]==array1[0])&&(ejercicio.leoleo[i].correct[4]==array1[1])&&(ejercicio.leoleo[i].correct[5]==array1[2])){
			
			var arrayy = [];
			localStorage.setItem("array1", JSON.stringify(arrayy));
			fail=0;
			localStorage.setItem("fail", fail);
			$("#EJ2").css("display","none");
			$("#EJ3").css("display","block");
		}
		else{
			var arrayyy = [];
			localStorage.setItem("array1", JSON.stringify(arrayyy));
			fail++;
			localStorage.setItem("fail", fail);
			localStorage.setItem("myMedia", null);
			playAudio("/android_asset/www/audio/fail.mp3");
			if(fail==3){
				fail=0;
				localStorage.setItem("fail", fail);
				$("#EJ3").css("display","none");
				$("#EJ2").css("display","none");
				$("#EJ1").css("display","none");
				$("#ayuda3").css("display","block");
				setTimeout(function(){playAudio("/android_asset/www/audio/ayuda.mp3")},500);
		        setTimeout(function(){window.location.href='leoleo_menu.html'},5000);
			}
		}
	}
	else if(j==2){
		if((ejercicio.leoleo[i].correct[6]==array2[0])&&(ejercicio.leoleo[i].correct[7]==array2[1])&&(ejercicio.leoleo[i].correct[8]==array2[2])){

			var arrayz = [];
			localStorage.setItem("array2", JSON.stringify(arrayz));
			fail=0;
			localStorage.setItem("fail", fail);
			localStorage.setItem("leoleo3", "COMPLETADO");
			$("#EJ3").css("display","none");
			$("#EJ2").css("display","none");
			$("#EJ1").css("display","none");
			$("#correcto3").css("display","block");
			addCalification(3);
			setTimeout(function(){playAudio("/android_asset/www/audio/aplausos.mp3")},500);
	        setTimeout(function(){window.location.href='leoleo_menu.html'},5000);
			//FUNCION ACTUALIZAR BASE DE DATOS
		}
		else{
			
			var arrayzz = [];
			localStorage.setItem("array2", JSON.stringify(arrayzz));
			fail++;
			localStorage.setItem("fail", fail);
			localStorage.setItem("myMedia", null);
			playAudio("/android_asset/www/audio/fail.mp3");
			if(fail==3){
				fail=0;
				localStorage.setItem("fail", fail);
				$("#EJ3").css("display","none");
				$("#EJ2").css("display","none");
				$("#EJ1").css("display","none");
				$("#ayuda3").css("display","block");
				setTimeout(function(){playAudio("/android_asset/www/audio/ayuda.mp3")},500);
		        setTimeout(function(){window.location.href='leoleo_menu.html'},5000);
			}
		}
	}
}
}
function adelante(){
	stopAudio();
	$("#cuento").css("display","none");
	$("#EJ31").css("display","block");
}
function stopAudio() {

	if(myMedia) {
		myMedia.stop(); 
	   }
		
	myMedia = null;
	localStorage.setItem("myMedia", myMedia);
}
function playAudio(src) {
	myMedia=localStorage.getItem(myMedia);
   if(myMedia == null) {
      myMedia = new Media(src, onSuccess, onError);

      function onSuccess() {
         console.log("playAudio Success");
      }

      function onError(error) {
         console.log("playAudio Error: " + error.code);
      }
   }
   myMedia.play();	
}

function takePhoto(i) {
	var fileFolder=appConstants.localPermanentStorageFolderImg();
	var fileName="img"+i+".jpg";	
	photo.takeAsync(
		fileFolder,
		fileName,
		function() {
			$("#button-"+i+"-1").blur();
			$("#image-"+i+"-1").attr("src","file://"+photo.fileFolder+photo.fileName+"?"+(new Date()).getTime());//Se le pone la fecha porque si sacamos mas de una foto a menos que el nombre cambie, no se renderiza. es uan forma de cambiar algo
			//$("#image-"+i+"-1").rotate(90);
			$("#fileName-"+i+"-1").text("Photo: "+photo.fileFolder+photo.fileName);
			$("#image-"+i+"-1").show();
			alert("Photo in: "+photo.fileFolder+photo.fileName);
		}
	);
}