$('.carousel').carousel({
	interval:3000,
	pause: "hover"
})

$(document).ready(function(){
	// Show the Modal on load
	$("#primerModal").modal("show");
});

function valContra() {
	con1=document.getElementById("clave").value;
	con2=document.getElementById("repeClave").value;
	if (con1!=con2) {
		alert('Los campos no pueden ser diferentes');
		/*document.getElementById("repeClave").setCustomValidity('Witinnovation');*/
		return false;
		
        /*var email = document.getElementById("repeClave");
		email.addEventListener("keyup", function (event) {
		  if (email.validity.typeMismatch) {
		    email.setCustomValidity("I expect an e-mail, darling!");
		  } else {
		    email.setCustomValidity("");
		  }
		});*/
	}
}

function check(id) {
	var variable = document.getElementById("id");
	variable.addEventListener("keyup", function (event) {
		if (variable.validity.typeMismatch) {
		    variable.setCustomValidity("Haz coincidir con el formato solicitado Ej: ejemplo@dominio.com");
			} 
		else { 
			variable.setCustomValidity("");
		}
	});
}
 //FUNCIONA CON ONSUBMIT RETURN PRUEBA()
function prueba() {
	var x = document.getElementById("clave").value;
	var y = document.getElementById("repeClave").value;
	if (x!=y) {
		/*document.getElementById("demo").innerHTML = "Estas bien";*/
		alert("Las claves deben coincidir, por favor verifique e intentelo de nuevo");
		document.getElementById("repeClave").focus();
		var aval = false;
	}
	else {
		/*document.getElementById("repeClave").focus();
		document.getElementById("demo").innerHTML = "Estas mal";*/
		var aval = true;
	}
	return aval;
}
function prueba3() {
	var x = document.getElementById("clave").value;
	var y = document.getElementById("repeClave").value;
	if (x!=y) {
		alert("Las claves deben coincidir, por favor verifique e intentelo de nuevo");
		document.getElementById("repeClave").focus();
		return false;
	}
	else {
		alert("Todo bien");
		return true;
	}
}