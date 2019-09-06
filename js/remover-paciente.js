var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){
	var alvoEvento = event.target;
	var paiDoAlvo  = alvoEvento.parentNode;
    paiDoAlvo.classList.add("fadeOut");
	//paiDoAlvo.remove();
});