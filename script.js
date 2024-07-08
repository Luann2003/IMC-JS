const calcular = document.getElementById("calcular");
calcular.addEventListener("click", imc);
let altura; 

function imc(){
    let name = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let result = document.getElementById("result");
    altura = document.getElementById("altura").value;

    if(name == '' || altura == '' || peso == ''){
        alert("Preencha todos os campos ");
    }else{
        const imc = peso / (altura * altura);
        result.innerHTML = `O IMC do usuário ${name} é ${imc.toFixed(2)}`;
    }
    window.onload = formatHeight;
}

function formated(){
    altura.addEventListener('input', function() {
        let valor = alturaInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (valor.length > 2) {
            alturaInput.value = valor.slice(0, -2) + '.' + valor.slice(-2); // Adiciona o ponto decimal
        }
    });
}




