var cargar = function(){
	$("#enviar").click(registrarDatos);
}

$(document).ready(cargar);

var registrarDatos= function(){
	var exampleInput1= $("#exampleInput1").val();
	var exampleInput2= $("#exampleInput2").val();
	var exampleInput3= $("#exampleInput3").val();
	var exampleInput4= $("#exampleInput4").val();

	if((exampleInput1.length< 40 && exampleInput1 > 0) && 
		(exampleInput2.length< 60 && exampleInput1 > 0) && 
		(exampleInput3< 2016 && exampleInput1 > 1990) && 
		(exampleInput4.length< 30 && exampleInput1 > 0)){
		$(".alert-success").removeClass("none");
		$(".alert-danger").addClass("none");
	}else{
		$(".alert-danger").removeClass("none");
		$(".alert-success").addClass("none");
	}
}