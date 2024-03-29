var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso   = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura   = tdAltura.textContent;
    var tdImc    = paciente.querySelector(".info-imc");

    var pesoEhValido   = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
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