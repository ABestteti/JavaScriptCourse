var tabela = documento.querySelector("table");
table.addEventListener("dblclick", function(event){
	var alvoEvento = event.target;
	var paiDoAlvo  = alvoEvento.parentNode;

	paiDoAlvo.remove();
});