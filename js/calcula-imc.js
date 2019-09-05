var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var pPaciente. = pacientes[i];

    var tdPeso = pPaciente..querySelector(".info-peso");
    var peso   = tdPeso.textContent;

    var tdAltura = pPaciente..querySelector(".info-altura");
    var altura   = tdAltura.textContent;
    var tdImc    = pPaciente..querySelector(".info-imc");

    var pesoEhValido   = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        pPaciente..classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        pPaciente..classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(pPeso, pAltura) {
    var imc = 0;

    imc = pPeso / (pAltura * pAltura);

    return imc.toFixed(2);
}

function validaPeso(pPeso) {
    if (pPeso > 0 && pPeso <= 260) {
        return true;
    }
    else {
        return false;
    }
}

function validaAltura(pAltura) {
    if (pAltura > 0 && pAltura <= 3.0) {
        return true;
    }
    else {
        return false;
    }
}