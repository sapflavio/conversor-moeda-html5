const ovly = { };

ovly.conversor = { 
	versao: "1",
	chamarAPI: function(){
		console.log("Chamando API");
		const endpoint = "api/latest";
		var oParametros = {
			base: $("#moeda_origem").val()
		};
		$.get(endpoint, oParametros, this.callback );
	},
	callback: function(resultado){
		// console.log(resultado);
		var sMoedaDestino = $("#moeda_destino").val();
		var fValor = resultado.rates[sMoedaDestino];
		$("#valor_destino").text(fValor);
		$("#moeda_destino2").text(sMoedaDestino);
	}
}

/*

function chamarAPI(){
	console.log("Chamando API");
	const endpoint = "api/latest";
		var oParametros = {
		base: $("#moeda_origem").val()
	};
	$.get(endpoint, oParametros, callback );
}

function callback(resultado){
	// console.log(resultado);
	
	var sMoedaDestino = $("#moeda_destino").val();
	var fValor = resultado.rates[sMoedaDestino];
	
	$("#valor_destino").text(fValor);
	$("#moeda_destino2").text(sMoedaDestino);
}*/