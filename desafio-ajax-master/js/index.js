$(function(){ // Quando a pagina carrega

    $.ajax({
		type: "GET",
		dataType: 'JSON',
		url: "https://ibge.herokuapp.com/estado/Nome",
		success: function(retorno){
		 
			$.each(retorno, function (key, val) {                
               $('#selEstado').append('<option value="' + val + '">' + key + '</option>');
            });
		}
	});

$('#selEstado').change(function(){
	$('#selMunicipio').empty();
	$('#selMunicipio').append('<option value="">Selecione</option>');
		var estado = $('#selEstado').val(); //Pegando o id do estado
		//console.log(estado);
		$.ajax({
			type: "GET",
			dataType: "JSON",
			url: "https://ibge.herokuapp.com/municipio/?val=" + estado,
			success: function(retorno){
				//console.log(retorno);
				$.each(retorno, function(key, val){
					$('#selMunicipio').append('<option value="' + val + '">' + key + '</option');
				});
			}
		});
	});

	$(document).on({
	  	ajaxStart: function () {
			$(".modal").show();
		},
	  	ajaxStop: function() {
	    	$(".modal").hide();
	  	}
	});

});