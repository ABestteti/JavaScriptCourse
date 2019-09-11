var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
    var errors   = validaPaciente(paciente);

    if (errors.length > 0) {
        exibeMensagensDeErros(errors);
        return;
    }
    
    adicionaPacienteNaTabela(paciente);

    // Clear form after form submit
    form.reset();

    // Clear all error messagens from ul element
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErros(pErrors) {
    var ul = document.querySelector("#mensagens-erro");

    // Clear all error messagens from ul element
    ul.innerHTML = "";

    pErrors.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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

function validaPaciente(pPaciente) {

    // Errors message array
    var errors = [];

    if (pPaciente.nome.length == 0) {
        errors.push("O nome não pode ser em branco");
    }

    if (pPaciente.gordura.length == 0) {
        errors.push("A gordura não pode ser em branco");
    }

    if (pPaciente.peso.length == 0) {
        errors.push("O peso não pode ser em branco");
    }

    if (pPaciente.altura.length == 0) {
        errors.push("A altura não pode ser em branco");
    }

    if (!validaPeso(pPaciente.peso)) {
        errors.push("Peso é inválido");
    }

    if (!validaAltura(pPaciente.altura)) {
        errors.push("Altura é inválida");
    }

    return errors;
}
