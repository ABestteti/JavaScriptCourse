var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
	var alvoEvento = event.target;
	var paiDoAlvo  = alvoEvento.parentNode;
	paiDoAlvo.classList.add("fadeOut");
	
	setTimeout(function() {
		if (alvoEvento.tagName == "TD") {
			paiDoAlvo.remove();
		}
	}, 500);
	
});