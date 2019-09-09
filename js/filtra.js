var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (campoFiltro.value.length > 0) {
        pacientes.forEach(function(pPaciente) {
            var tdNome = pPaciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
    
            var expressao = new RegExp(campoFiltro.value, "i");

            if (!expressao.test(nome)) {
                pPaciente.classList.add("invisivel");
            }
            else {
                pPaciente.classList.remove("invisivel");
            }
        })
    }
    else {
        pacientes.forEach(function(pPaciente) {
            pPaciente.classList.remove("invisivel");
        })
    }
})