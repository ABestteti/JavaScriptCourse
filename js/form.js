var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

});

function obtemPacienteDoFormulario(pForm) {

    var paciente = {
        nome: pForm.nome.value,
        peso: pForm.peso.value,
        altura: pForm.altura.value,
        gordura: pForm.gordura.value,
        imc: calculaImc(pForm.peso.value, pForm.altura.value)
    }

    return paciente;
}

function montaTr(pPaciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(pPaciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(pPaciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(pPaciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(pPaciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(pPaciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(pDado, pClasse ) {
    var td = document.createElement("td");
    td.textContent = pDado;
    td.classList.add(pClasse);

    return td;
}