

var login = $("form#loginForm input, form#loginForm textarea");
login.change(function(){
	if(validateFormLogin()!=false){
		$("#submit").removeAttr("disabled");
		}
	});

var newaccount = $("form#formulario input, form#formulario textarea");
	newaccount.change(function(){
		if(validateFormAccount()!=false){
			$("#submit").removeAttr("disabled");
			}
		});
		
var usuario= {
	nombre: null,
	apellidos: null,
	edad: 0,
	foto: null,
	aficiones: null,
	username: null,
	password: null
};
var aprobado= {
		aprobado: true
	};
var info= {
		username: null,
		ejercicio: null
	};

var myMedia = null;
	localStorage.setItem("myMedia", myMedia);	
		
var appConstants = {
	
	serverURL: "http://u017633.ehu.eus:28080/Di-EducateSERVER",
	addUsuariosURL: function() {
		return this.serverURL+"/rest/DiEducate/addUsuario";
	},
	loginURL: function() {
		return this.serverURL+"/rest/DiEducate/requestUser";
	},
	requestRespuestasURL: function() {
		return this.serverURL+"/rest/DiEducate/requestRespuestas";
	},
	requestAudiosURL: function() {
		return this.serverURL+"/rest/DiEducate/requestAudios";
	},
	requestImagenesURL: function() {
		return this.serverURL+"/rest/DiEducate/requestImagenes";
	},
	requestEnunciadosURL: function() {
		return this.serverURL+"/rest/DiEducate/requestEnunciados";
	},
	addCalificacionesURL: function() {
		return this.serverURL+"/rest/DiEducate/addCalificaciones";
	},
	requestCalificacionesURL: function() {
		return this.serverURL+"/rest/DiEducate/requestCalifications";
	},
	addInfoURL: function() {
		return this.serverURL+"/rest/DiEducate/addInfo";
	},
	localPermanentStorageFolder: "/storage/sdcard0/eus.ehu.Di_Educate/",
	localPermanentStorageFolderImg: function () {
		return this.localPermanentStorageFolder+"img/";
	},
	localPermanentStorageFolderAudio: function () {
		return this.localPermanentStorageFolder+"audio/";
	},
	localPermanentStorageFolderVideo: function () {
		return this.localPonSuccessonSuccessonSuccessermanentStorageFolder+"video/";
	},
	uploadFileURL: "http://158.227.64.57:8080/TTA1617_LS-EX_09S/rest/School/uploadFile", //EHU PUBLIC
	serverURLstatic: "http://158.227.64.57:8080/TTA1617_LS-EX_09S/"//EHU PUBLIC

};

var photo = {
		fileFolder:null,
		fileName:null,
		takeAsync: function(fileFolder,fileName,onSuccess) {
			navigator.device.capture.captureImage(
				function(photoFiles) {//te devuelve un array, le ha dado el nombre photoFiles pero da igual
					//alert("onCaptureSuccess: ");
					var tempFullPath=photoFiles[0].fullPath; //Begins with "file:"
					tempFullPath=tempFullPath.substring(tempFullPath.indexOf("/")); //to retrieve "file:"Para quedarse con la parte del path "/...."
					//alert("New photo in: "+tempFullPath);
					
					fileUtilities.moveAsync(tempFullPath,fileFolder,fileName,
				      function() {
							photo.fileFolder=fileFolder;//Guardar en el atributo fileFolder del objeto photo, la carpeta destino
							photo.fileName=fileName;//Guardar en el atributo fileName del objeto photo, el nuevo nombre del fichero
							if(onSuccess!=false)
								onSuccess();
		        		}							
					);
				},
				function(e) {
					var msgText = "Photo error: " + e.message + "(" + e.code + ")";
					alert(msgText);
				}
			);
//			alert("record2: "+this.fileFolder);
		}
}

var fileUtilities = {
		moveAsync: function (sourceFullPath,destFolder,destName,onSuccess){
			var url="file://"+sourceFullPath;
			var destFile=destFolder+destName;
			var fileTransfer=new FileTransfer();//Crear objeto FileTransfer
		    fileTransfer.download(url,destFile,//Copiar (descargar) el fichero indicado por URL en destFile
				function() {//función successCallback: si el fichero se descargó bien
					window.resolveLocalFileSystemURL(url,//Acceder al fichero original por su URL
		    				function(fileEntry) {//función successCallback: si se ha podido acceder al fichero original

						fileEntry.remove(onSuccess);//Borrar el fichero y seguir con onSuccess
		    				},
		    				function(error) {
		    					alert("Source file NOT accesible; not removed");
		    				}
		    		);			
				},
				function(error) {
					alert('File not copied. '+'error.code: '+error.code+'\nerror.source: '+error.source+'\nerror.target: '+error.target+'\nerror.http_status: '+error.http_status);
				}
			);
		}
	,
	uploadFileAsync: function(sourceFullPath,fileType,uploadFileServiceURL,onSuccess) {
		var fileURL="file://"+sourceFullPath;
		var fileName=sourceFullPath.substring(sourceFullPath.lastIndexOf("/")+1);
		var options = new FileUploadOptions();
		options.fileKey = "file";
		options.mimeType = "multipart/form-data";
		options.fileName = fileName;
		var params = {filetype:fileType};
		options.params=params;
		
		var fileTransfer=new FileTransfer();//Crear objeto FileTransfer
		fileTransfer.upload(fileURL,encodeURI(appConstants.uploadFileURL),//Subir el fichero indicado por fileURL al servicio de subida de ficheros
			function() {//función successCallback: si el fichero se subió bien
				alert("File uploaded");
				if(onSuccess!=false)
					onSuccess();
			}, 
			function(error) {//función errorCallback: si el fichero NO se subió bien
				alert("Error de subida");//Indicar el error al usuario
			}, 
			options//Opciones de subida
		);
	}
};

var exercises={
		
		leoleo: [
			{
				correct: [],
				audio: [],
				imagen: [],
				texto_enunciado: []
			},
			{
				correct: [],
				audio: [],
				imagen: [],
				texto_enunciado: []
			},
			{
				correct: [],
				audio: [],
				imagen: [],
				texto_enunciado: []
			}
		],
		juego: [
			{
				correct: [],
				audio: [],
				imagen: [],
				texto_enunciado: []
			},
			{
				correct: [],
				audio: [],
				imagen: [],
				texto_enunciado: []
			},
		],
		escucho: [
			{
				correct: [],
				audio: [],
				imagen: [],
				texto_enunciado: []
			},
			{
				correct: [],
				audio: [],
				imagen: [],
				texto_enunciado: []
			},
			{
				correct: [],
				audio: [],
				imagen: [],
				texto_enunciado: []
			},
		]
}
/*
var ejercicios={
		
		leoleo: [
			{
				correct: ["p","d","b","d","p","b"]
			},
			{
				correct:["raton","callar","abuelo"]
			},
			{
				correct:["lagarto","tomate","tetera","lechuga","gato","topo","cinco","copa","papel"]
			}
		],
		juego: [
			{
				correct: ["go","bu","lo"]
			},
			{
				correct: ["pla","fan","tu"]
			},
		],
		escucho: [
			{
				correct: ["pato","capucha","coche"]
			},
			{
				correct: ["clavito","tigres","desenladrillador"]
			},
			{
				correct: ["muu","plash","run","muack","boing","ring"]
			},
		]
}*/